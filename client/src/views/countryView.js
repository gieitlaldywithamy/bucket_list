const CountryView = function(){
  this.countries = [];
}

CountryView.prototype.populateDropdown = function(countries){
  const select = document.querySelector('#countries-dropdown');
  countries.forEach(function(item, index){
    const option = document.createElement('option');
    option.value = index;
    option.text = item.name;
    select.appendChild(option);
  })
}
module.exports = CountryView;
