const apikey="5724cd494fa475a5c8c179619ef80b33";


const weatherDataEl = document.getElementById("Weather-data")


const cityInputEl = document.getElementById("city-input")



const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityvalue = cityInputEl.value;
    getWeatherData(cityvalue);
})
async function getWeatherData(cityvalue){
    try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`) 
       if(!response.ok){
        throw new Error("Network response was not ok")
       }
       const data = await response.json();
       console.log(data)
       const temperture = Math.round(data.main.temp)


    const description = data.weather[0].description

    const icon = data.weather[0].icon


    const details = [
        `Feels like:${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}%`,
        `wind speed: ${data.wind.speed} m/s`

    ];

    weatherDataEl.querySelector(".Icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;



 weatherDataEl.querySelector(
    ".temperture").textContent = `${temperture}℃`;



    weatherDataEl.querySelector(
        ".description").textContent = description;


 weatherDataEl.querySelector(
        ".details").innerHTML = details.map((details) =>`<div>${details}</div>`).join("");
  
    }catch(Error){
        weatherDataEl.querySelector(".Icon").innerHTML="";
        weatherDataEl.querySelector(
           ".temperture").textContent = "";
           weatherDataEl.querySelector(
               ".description").textContent ="An Error happened Please Try Again Later ";
        weatherDataEl.querySelector(
               ".details").innerHTML ="";

    }
}

