//this is my api key and url



const apikey = "ca61fcad231f784659e1f8aaf9d15bc7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//this is for click event by which user give the cmd at runtime by click the search button

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");




//for selecting the weathericon to change the icon



const weather_icon = document.querySelector(".weathericon");


//this is the asyne and await fn by which we fetch the api

async function cheakWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);



    //this if else for the error maassage when user give a wrong city name

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        let data = await response.json();
        console.log(data);

        // runtime details change acc. to api output

        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";

        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".pressure").innerHTML= data.main.pressure +" psi"

        document.querySelector(".visibility").innerHTML=data.visibility +" meters"

        document.querySelector(".min-temp").innerHTML=data.main.temp_min +" °c"

        document.querySelector(".high-temp").innerHTML= data.main.temp_max + " °c"

        //runtime img change acc. to api output

        if (data.weather[0].main == "Clouds") {
            weather_icon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weather_icon.src = "sun.png";
        }
        else if (data.weather[0].main == "Rain") {
            weather_icon.src = "rainy-day.png";
        }
        else if (data.weather[0].main == "Dizzle") {
            weather_icon.src = "cloud.png";
        }
        else if (data.weather[0].main == "Mist") {
            weather_icon.src = "snowman.png";
        }

        // in starting we dont have to show complete web page
        document.querySelector(".weather").style.display = "block"
    }
    //this is the event have the async fn with user input and value

}
addEventListener("click", () => {
    cheakWeather(searchbox.value);
});
