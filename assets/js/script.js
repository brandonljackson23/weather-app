var searchInputEl = document.querySelector("#search");
var searchBtnEl = document.querySelector("#search-btn");
var searchHistoryEl = document.querySelector("#search-history");
var currentDayEl = document.querySelector("#current-day");
var tomorrowEl = document.querySelector("#tomorrow");
var dayTwoEl = document.querySelector("#day-two");
var dayThreeEl = document.querySelector("#day-three");
var dayFourEl = document.querySelector("#day-four");
var dayFiveEl = document.querySelector("#day-five");
var apiKey = "fb0eaa5e6e3b462dd643789c7960e482";

var getWeatherInfo = function(searchInput, lat, lng) {
    // format the weather api call
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&units=Imperial&APPID=' + apiKey;
    // format the uv index api call
    //var uvApiUrl = 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng;
    // make the api call
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // current date
            var date = data.list[0].dt_txt
            console.log("Date: " + date)
            // city lat
            var lat = data.city.coord.lat
            console.log("Latitude: " + lat)
            // city lon
            var lng = data.city.coord.lon
            console.log("Longitude: " + lng)
            // current temperature
            var icon = data.list[0].weather[0].icon
            console.log("Icon: " + icon)
            // current temperature
            var temp = data.list[0].main.temp
            console.log("Temperature: " + temp)
            // current humidity
            var humidity = data.list[0].main.humidity
            console.log("Humidity: " + humidity)
            // current wind speed
            var wind = data.list[0].wind.speed
            console.log("Wind Speed: " + wind)
            // return fetch(uvApiUrl)
            // .then(function(response) {
            //     return response.json();
            // })
            // .then(function(data) {
            //     console.log(data);
            // });
        });
};

var searchSubmitHandler = function(event) {
    event.preventDefault();
    // get value from search input element
    var searchInput = searchInputEl.value.trim();
    getWeatherInfo(searchInput);
    searchInputEl.value = "";
};

searchBtnEl.addEventListener("click", searchSubmitHandler);


