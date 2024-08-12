import {Presidents_endpoint,Airports_endpoint,TouristicAttraction_endpoint  } from "../../routes";



async function fetchPresidents() {
      
    try {
      const startTime = Date.now();
      const response = await fetch(`${Presidents_endpoint}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const endTime = Date.now(); 
      const duration = endTime - startTime;

      return {presidents:data,timePresidents:duration};
    } catch (error) {
      console.error('Error fetching presidents:', error);
      return null; 
    }
}

async function fetchAirports() {
    
    try {
        const startTime = Date.now(); 
        const response = await fetch(`${Airports_endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const endTime = Date.now(); 
    const duration = endTime - startTime;

    return {airports:data,timeAirport:duration};
} catch (error) {
    console.error('Error fetching presidents:', error);
    return null; 
}
}

async function fetchTouristAttraction() {
  try {
    const startTime = Date.now();
    const response = await fetch(`${TouristicAttraction_endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const endTime = Date.now(); 
    const duration = endTime - startTime;

    return {touristAttraction:data,timeAttraction:duration};
} catch (error) {
    console.error('Error fetching presidents:', error);
    return null; 
}
}

export {fetchPresidents,fetchAirports,fetchTouristAttraction}




