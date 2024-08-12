import { useContext } from "react";
import { dash_context,SortAirportsForDepartament } from "../../routes"



export const Airport = () => {
    const { airports} = useContext(dash_context)
    const groupedData = SortAirportsForDepartament(airports)
    
    return (
  <table className="airports-table">
        <thead>
          <tr>
            <th>Departamento</th>
            <th>Ciudad</th>
            <th>Nombre del Aeropuerto</th>
            <th>Cantidad de Aeropuertos</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedData).map(department => (
            Object.keys(groupedData[department].cities).map((city, index) => (
              <tr key={`${department}-${city}`}>
                {index === 0 && (
                  <td rowSpan={Object.keys(groupedData[department].cities).length}>
                    {department}
                  </td>
                )}
                <td>{city}</td>
                <td>
                  {groupedData[department].cities[city].map(airport => (
                    <div key={airport.id}>{airport.name}</div>
                  ))}
                </td>
                {index === 0 && (
                  <td rowSpan={Object.keys(groupedData[department].cities).length}>
                    {groupedData[department].airportCount}
                  </td>
                )}
              </tr>
            ))
          ))}
        </tbody>
      </table>
    );
    
}