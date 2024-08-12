import { useContext, useMemo } from "react";
import { dash_context } from "../../context";
import { sortTouristicAttraction } from "../../utils/functions";
import './attractions.css'

export const Attractions = () => {
  const { touristAttraction, timeAttraction } = useContext(dash_context);
  const sortTouristic = sortTouristicAttraction(touristAttraction);
  const groupedData = useMemo(() => sortTouristic, [sortTouristic]); // change name: GroupedTouristicAttraction
  const attractionsList = Object.values(groupedData).flatMap((department) =>
    Object.values(department.cities).flatMap((city) =>
      city.attractions.map((attraction) => ({
        departmentId: department.departmentId,
        cityName: city.cityName,
        attractionsCount: city.attractionsCount,
        attractionName: attraction.name,
      }))
    )
  );
  return (
    <div className="container">
      <h1>Tiempo {timeAttraction} ms</h1>
      <h1>Numero de elementos {touristAttraction.length}</h1>
      <h2>Agrupamiento de Atracciones Turísticas</h2>
      <table className="attractions-table">
        <thead>
          <tr>
            <th>Departamento ID</th>
            <th>Ciudad</th>
            <th>Cantidad de Atracciones en la Ciudad</th>
            <th>Nombre de la Atracción</th>
          </tr>
        </thead>
        <tbody>
          {attractionsList.map((item, index) => (
            <tr key={index}>
              <td>{item.departmentId}</td>
              <td>{item.cityName}</td>
              <td>{item.attractionsCount}</td>
              <td>{item.attractionName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{background:'azure',marginTop:'1rem'}}>
        <h1>Output data</h1>
        <div style={{overflowY:'scroll',height:'200px', width:'100vw', overflowX:'hidden',overflowWrap:'break-word'}}>
          
          <pre>
            {JSON.stringify(touristAttraction, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
