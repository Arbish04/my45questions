// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Example usage
var formattedCityCountry1 = city_country("Karachi", "Pakistan");
console.log(formattedCityCountry1); // Output: Karachi, Pakistan
var formattedCityCountry2 = city_country("New York", "USA");
console.log(formattedCityCountry2); // Output: New York, USA
