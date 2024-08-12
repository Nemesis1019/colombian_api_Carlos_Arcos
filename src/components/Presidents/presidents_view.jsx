import { useContext } from "react"

import { SortPresidents,dash_context } from "../../routes"
import './presidents_view.css'



export const Presidents_view = () => {
    const {presidents,timePresidents} = useContext(dash_context)
    const sortedByCount = SortPresidents(presidents)
    console.log(timePresidents)
    return (
      <div>
      
      <h1>Tiempo {timePresidents} ms</h1>
      <h1>Numero de elementos {presidents.length}</h1>
      <h1>Presidentes por Partido Político</h1>
      <table>
        <thead>
          <tr>
            <th>Partido Político</th>
            <th>Conteo de Presidentes</th>
            <th>Presidentes</th>
          </tr>
        </thead>
        <tbody>
          {sortedByCount.map((party, index) => (
            <tr key={index}>
              <td>{party.politicalParty}</td>
              <td>{party.count}</td>
              <td>
                <ul>
                  {party.presidents.map((president) => (
                    <li key={president.id}>
                      {president.name} {president.lastName}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{background:'azure',marginTop:'1rem'}}>
        <h1>Output data</h1>
        <div style={{overflowY:'scroll',height:'200px', width:'100vw', overflowX:'hidden',overflowWrap:'break-word'}}>
          
          <pre>
            {JSON.stringify(presidents, null, 2)}
          </pre>
        </div>
      </div>
      
    </div>
    )
}