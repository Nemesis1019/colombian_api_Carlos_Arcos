import { useContext, useMemo } from "react"
import _ from 'lodash';

import {dash_context,sortAirportsForRegion,Airport} from  "../../routes"


export const Airport_Region = ()=>{

    const { airports,timeAirport} = useContext(dash_context)
    const sortTouristic = sortAirportsForRegion(airports)
    const groupedAirports = useMemo(() => sortTouristic, [sortTouristic]) // change name: GroupedTouristicAttraction
  
  console.log('hola',sortTouristic)
    return (
        <div>
          <h1>Tiempo {timeAirport} ms</h1>
          <h1>Numero de elementos {airports.length}</h1>
          <h1>Agrupamiento de Aereopuertos por Región</h1>
          <table className="airports-table">
            <thead>
              <tr>
                <th>Región</th>
                <th>Departamento</th>
                <th>Ciudad</th>
                <th>Tipo</th>
                <th>Conteo</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedAirports).map((regionKey, regionIndex) => {
                const region = groupedAirports[regionKey];
                const regionRowSpan = _.sumBy(
                  Object.values(region.departments),
                  department => _.sumBy(Object.values(department.cities), city => Object.keys(city.types).length)
                );
        
                return Object.keys(region.departments).map((departmentKey, departmentIndex) => {
                  const department = region.departments[departmentKey];
                  const departmentRowSpan = _.sumBy(Object.values(department.cities), city => Object.keys(city.types).length);
        
                  return Object.keys(department.cities).map((cityKey, cityIndex) => {
                    const city = department.cities[cityKey];
                    const cityRowSpan = Object.keys(city.types).length;
        
                    return Object.keys(city.types).map((typeKey, typeIndex) => (
                      <tr key={`${regionKey}-${departmentKey}-${cityKey}-${typeKey}`}>
                        {departmentIndex === 0 && cityIndex === 0 && typeIndex === 0 && (
                          <td rowSpan={regionRowSpan}>{regionKey}</td>
                        )}
                        {cityIndex === 0 && typeIndex === 0 && (
                          <td rowSpan={departmentRowSpan}>{departmentKey}</td>
                        )}
                        {typeIndex === 0 && (
                          <td rowSpan={cityRowSpan}>{cityKey}</td>
                        )}
                        <td>{typeKey}</td>
                        <td>{city.types[typeKey].length}</td>
                      </tr>
                    ));
                  });
                });
              })}
            </tbody>
          </table>
          <h1>Agrupamiento de Aereopuertos por Departamento</h1>
          <Airport/>
          <div style={{background:'azure',marginTop:'1rem'}}>
            <h1>Output data</h1>
            <div style={{overflowY:'scroll',height:'200px', width:'100vw', overflowX:'hidden',overflowWrap:'break-word'}}>
              <pre>
                {JSON.stringify(sortTouristic, null, 2)}
              </pre>
            </div>
          </div>
        </div>
     
      );
}