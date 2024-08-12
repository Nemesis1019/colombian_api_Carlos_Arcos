import { dash_context } from "../../context";
import _ from 'lodash';
import { useContext } from "react";



const SortPresidents = (presidents) => {

  const groupedByParty = _.groupBy(presidents, 'politicalParty');

  // Transformar en un array con el nombre del partido y el conteo de presidentes
  const partyCounts = _.map(groupedByParty, (value, key) => ({
    politicalParty: key,
    count: value.length,
    presidents: value
  }));
  
  // Ordenar por el conteo de presidentes de forma descendente
  return _.orderBy(partyCounts, ['count'], ['desc']);

}

const sortTouristicAttraction = (touristAttraction) => {
  const groupedByDepartment = _.groupBy(touristAttraction, (item) => item.city.departmentId);

const result = _.mapValues(groupedByDepartment, (items) => {
  const groupedByCity = _.groupBy(items, (item) => item.city.name);
  
  return _.mapValues(groupedByCity, (cityItems) => ({
    cityName: cityItems[0].city.name,
    attractions: cityItems,
    attractionsCount: cityItems.length
  }));
});

const departmentAttractionsCount = _.mapValues(groupedByDepartment, (items) => items.length);

return _.mapValues(result, (cities, departmentId) => ({
  departmentId,
  cities: cities,
  totalAttractionsCount: departmentAttractionsCount[departmentId]
}));

}

function SortAirportsForDepartament(airports){



return _.chain(airports)
  .groupBy(airport => airport.department.name)
  .mapValues(departmentAirports => ({
    cities: _.groupBy(departmentAirports, airport => airport.city.name),
    airportCount: departmentAirports.length,
  }))
  .value()


}

function sortAirportsForRegion(airports){

  return _.chain(airports)
  .groupBy(airport => airport.department.regionId) // Agrupación por región
  .mapValues(regionAirports => ({
    departments: _.chain(regionAirports)
      .groupBy(airport => airport.department.name) // Agrupación por departamento
      .mapValues(departmentAirports => ({
        cities: _.chain(departmentAirports)
          .groupBy(airport => airport.city.name) // Agrupación por ciudad
          .mapValues(cityAirports => ({
            types: _.groupBy(cityAirports, airport => airport.type), // Agrupación por tipo
          }))
          .value(),
        airportCount: departmentAirports.length,
      }))
      .value(),
    airportCount: regionAirports.length,
    region: regionAirports[0].department.regionId, // Se obtiene la región
  }))
  .value();
}

export {SortAirportsForDepartament,sortAirportsForRegion,SortPresidents, sortTouristicAttraction}
