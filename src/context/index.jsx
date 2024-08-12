import { createContext, useEffect, useState } from "react";
import { fetchAirports, fetchPresidents, fetchTouristAttraction } from "../routes";

const dash_context = createContext();

function Dash_provider({ children }) {
  const [datos, setDatos] = useState([]);
  const [presidents, setPresidents] = useState([]);
  const [airports, setAirports] = useState([]);
  const [touristAttraction, setTouristAttraction] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [presidentOrder, setPresidentOrder] = useState(false);
  const [airportOrder, setAirportOrder] = useState(false);
  const [attractionsOrder, setAttractionsOrder] = useState(false);
  const [timePresidents,setTimePresidents] = useState(0)
  const [timeAirports,setTimeAirports] = useState(0)
  const [timeAttractions,setTimeAttractions] = useState(0)

  const [changeTab,setChangeTab] = useState("")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {presidents,timePresidents} = await fetchPresidents();
        const {airports,timeAirport} = await fetchAirports();
        const {touristAttraction,timeAttraction} = await fetchTouristAttraction();

        setPresidents(presidents ?? []);
        setTimePresidents(timePresidents)
        setAirports(airports ?? []);
        setTimeAirports(timeAirport)
        setTouristAttraction(touristAttraction ?? []);
        setTimeAttractions(timeAttraction)

      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchData();
  }, [changeTab]);

  return (
    <dash_context.Provider
      value={{
        presidents,
        setPresidents,
        airports,
        setAirports,
        touristAttraction,
        setTouristAttraction,
        datos,
        setDatos,
        partidos,
        setPartidos,
        presidentOrder,
        setPresidentOrder,
        attractionsOrder,
        setAttractionsOrder,
        airportOrder,
        setAirportOrder,
        timePresidents,
        setTimePresidents,
        setChangeTab,
        timeAirports,
        setTimeAirports,
        timeAttractions,
        setTimeAttractions
      }}
    >
      {children}
    </dash_context.Provider>
  );
}

export { dash_context, Dash_provider };
