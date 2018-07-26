class Storage{
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'FL'
  }

  getLocationData(){
     //if there is no city in LS
    if(localStorage.getItem('city') === null) {
      //CITY WILL BE THE DEFAULT CITY
      this.city = this.defaultCity;
   }else{
     //otherwise city will be what is inside of LS
     this.city = localStorage.getItem('city');
   }
    //if there is no state in LS
    if(localStorage.getItem('state') === null) {
      //state WILL BE THE DEFAULT state
      this.state = this.defaultState;
   }else{
     //otherwise state will be what is inside of LS
     this.state = localStorage.getItem('state');
   }

   return {
     city:this.city,
     state:this.state

   }
   
  
}
  //Because we are just saving strings we don't need to use JSONparse and JSON stringify.
  setLocationData(city,state){
    localStorage.setItem('city' , city );
    localStorage.setItem('state', state )
  }
}