import { Home } from "../pages/Home";
import { Notfound } from "../pages/NotFound";

import { Dash_provider,dash_context } from "../context";

import {Presidents_endpoint,Airports_endpoint,TouristicAttraction_endpoint} from "../api/endpoints"

import {SortPresidents,sortAirportsForRegion,SortAirportsForDepartament } from "../utils/functions";

import { fetchPresidents,fetchTouristAttraction,fetchAirports } from "../api/requests";

import { Presidents_view } from "../components/Presidents/presidents_view";

import {Airport} from "../components/Airports/airport"
import {Airport_Region} from "../components/Airports/airport_regions"
import { Attractions } from "../components/Attractions/attractions"

export {
    Home,
    Notfound
}

export{
    dash_context,
    Dash_provider
}

export {
    Presidents_endpoint,
    Airports_endpoint,
    TouristicAttraction_endpoint
}

export {
    SortPresidents,
    sortAirportsForRegion,
    SortAirportsForDepartament
}

export{
    fetchPresidents,
    fetchTouristAttraction,
    fetchAirports
}

export {
    Presidents_view
}

export {
    Airport,
    Airport_Region,
    Attractions
}