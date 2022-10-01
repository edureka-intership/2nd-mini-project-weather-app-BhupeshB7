let weather ={
apikey:"2d2cab1b18fcde9a3a0296daf5e08178",
fetchWeather: function(city){
    fetch(
       " https://api.openweathermap.org/data/2.5/weather?q=" +
         city + 
         "&units=metric&appid="+
         this.apikey
    )
    .then((response) => {
        console.log(response);
       if(!response.ok){
          alert("no weather found.");
          throw new Error("No weather found.");
       }
          return response.json();
    })
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data){
        
    
    const  {name } = data;
    const { icon, description } = data.weather[0];
    const {temp, humidity}  = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = "Weather in " + name;
    document.querySelector('.icon').src = 
    "https://openweathermap.org/img/wn/" + icon +".png";
   document.querySelector('.discription').innerText = description;
    document.querySelector(".temp").innerHTML = temp + " °C";
    document.querySelector('.humidity').innerText = "Humodity:" + humidity + "%";
    document.querySelector('.wind').innerText = "Wind speed:"+ speed + "km/h";
    document.querySelector('.weather').classList.remove("loading");
    document.body.style.backgroundImage = 
    "url('https://source.unsplash.com/1600x900/?" + name +"')";
     },
     search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
     },
};
document.querySelector('.search button').addEventListener("click", function(){
    weather.search();
});
document.querySelector('.search-bar').addEventListener("keyup", function(event) {
   if(event.key == "Enter")
 weather.search();
}
)

document.querySelector('.search button ').addEventListener("click",
 function(){
    weather.search();
    var clr = document.getElementById('searching') ;
    if (clr.value != ""){
      clr.value ="";
    }
 })

//  document.querySelector('.search').addEventListener("keyup",
//  function(){
//     weather.search();
//     var clr = document.getElementById('searching') ;
//     if(event.key== "Enter"){
//     if (clr.value != ""){
//       clr.value ="";
//     }
//    }
//  })
weather.fetchWeather("Delhi");

