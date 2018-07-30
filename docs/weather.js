//Weather class
class Weather {
  constructor(city, state) {
    //properties needed for the API URL.
    this.apiKey = '**************';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    //fetch info
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    //use json() on it
    const responseData = await response.json();
    //return data
    return responseData.current_observation;


  }

  // Change weather location
  changeLocation(city, state) {
    //this changes the city and the state inside of the Weather object
    this.city = city;
    this.state = state;
  }
} 
