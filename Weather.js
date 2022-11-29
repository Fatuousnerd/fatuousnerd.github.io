let weather = {  
  "apiKey": "e2c1d873e17655abe9c9bdf6946db59d",  
  fetchWeather: function (city) {  
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)  
    .then((response)=>response.json())  
    .then((data)=>this.displayWeather(data));  
  },  
  displayWeather: function (data) {  
    const {name}=data;  
    const {icon,description}=data.weather[0];  
    const {temp,humidity}=data.main;  
    const {speed}=data.wind;  
    // console.log(name,description,icon,temp,humidity,speed);  
    document.querySelector(".city").innerText="Weather in " + name;  
    document.querySelector(".description").innerText=description;  
    document.querySelector(".temp").innerText=temp + "°C";  
    document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";  
    document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";     
    document.querySelector(".weather").classList.remove("loading"); 
    bgset();
    //document.body.style.backgroundImage="url('https://www.pexels.com/search/" + name + ")";
  },  
  search: function () {  
    this.fetchWeather(document.querySelector(".search-bar").value);  
  }  
};  
document.querySelector(".search button").addEventListener("click", function () {  
  weather.search();    
});  
document.querySelector(".search-bar").addEventListener("keyup",function(event) {  
  if (event.key=="Enter") {  
    weather.search()  
  }   
}); 
weather.fetchWeather("Nairobi"); 

function bgset(){
const container = document.querySelector(".container");
//const cardTag;
function getPhotos(images) {
   images.map(image => {
   const cardTag = `<div class="card">
              <img src=${image.src.tiny} />
         </div>`;
     container.innerHTML += cardTag;
   })
}
  var name = document.getElementById("textboxSearch");
  var nameval = name.value;
        const pexels = "https://api.pexels.com/v1/search?query="+nameval;
fetch(pexels,{
  headers: {
    Authorization: "563492ad6f917000010000014061e5d42524467b95e7f27d98d41b00"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })
}

//for the loader
var loader = document.getElementById("loader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

/* document.querySelector("body").addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    loader.style.display = "block";
  }
}) */


let cities = [],
histbtn = document.getElementById('history'),
searchinput = document.getElementById("textboxSearch"),
input = document.getElementById("search"),
histlist = document.getElementById("searchHistory");

input.addEventListener('click', () => {
  cities.push(searchinput.value);
  console.log(cities);
  histlist.innerText = cities;
})

window.addEventListener('keypress', (e) => {
  if(e.key == "Enter"){
    cities.push(searchinput.value);
    console.log(cities);
    histlist.innerText = cities;
  }
})

function history() {
  var x = document.getElementById("historylist");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function AlrtOn(){
  const AlrtOn = new notification("Welcome back online!", {
    body: "Search for weather across towns/cities around the world.", 
    icon: "F.N.jfif"
  })
}

function AlrtOff(){
  const AlrtOff = new Notification("Sorry!!! You seem to be offline.", {
    body: "Please check your connection and try again.",
    icon: "F.N.jfif"
  })
}

window.addEventListener("online", () => {
  AlrtOn();
})

window.addEventListener('offline', () => {
  AlrtOff();
})

function showNotification(){
  const notification = new Notification("Hello from Nerocast", {
    body: "Welcome,want to the check weather today?",
    icon: "F.N.jfif"
  })
}
if(Notification.permission == "granted"){
  //showNotification();
}

window.addEventListener('load', () => {
  //console.log("Notifications " + Notification.permission)

  if(Notification.permission == "granted"){
    console.log("Notifications allowed")
  } else if(Notification.permission == "denied"){
    Notification.requestPermission().then(permission =>{
      console.log(permission)
    })
  } else if (Notification.permission == "default"){
    Notification.requestPermission()
  }
})
/*
const successCallback = (position) => {
  console.log(position);
}

const errorCallback = (error) => {
  console.error(error);
}

const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);*/

window.addEventListener('load', () => {initClock()})
// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
// END CLOCK SCRIPT

var countEl = document.getElementById("counttxt");

updatevisitcount();

function updatevisitcount() {
    fetch('https://api.countapi.xyz/hit/fatuousnerd.github.io/index.html')
    .then(res => res.json())
    .then(res => {
      countEl.innerText = res.value;
        console.log("Total visits:  " + res.value)
    })
}

