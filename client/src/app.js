const Request = require('./services/request.js');
const CountryView = require('./views/countryView.js')
const countriesAPIRequest = new Request("http://restcountries.eu/rest/v2");
const bucketListView = new CountryView();

const bucketList = new Request("http://localhost:3000/api/countries");

const app = function(){
  countriesAPIRequest.get(getCountriesRequestComplete);
}

const getCountriesRequestComplete = function(allCountries){
  bucketListView.populateDropdown(allCountries);
}

document.addEventListener('DOMContentLoaded', app);
