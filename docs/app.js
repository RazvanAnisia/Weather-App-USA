//initialise LS object
const storage = new Storage();
let city = storage.getLocationData().city;
let state = storage.getLocationData().state;
//initialise weather object and pass in info from LS
const weather = new Weather(city,state);
//initialise UI object
const ui = new UI();



//Content Loaded Event
//We will get the weather using the info from LS.
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
  weather.getWeather()
.then(results =>{
  ui.paint(results)})
.catch(err =>{
  console.log(err)
})
// document.querySelector('.container').classList.add('flipInY')
}

//event listener for changing location
document.getElementById('button-change-btn').addEventListener('click',function(){
  //get the values from the user inputs
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
    //CHANGE LOCATION
  weather.changeLocation(city,state);
  //GET the weather again with the new location and  repaint the UI
  getWeather();
  //Hide the modal
 $('#locModal').modal('hide')
  //Set location data in LS
  storage.setLocationData(city,state)
})

