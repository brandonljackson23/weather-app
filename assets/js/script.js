var searchInputEl = document.querySelector("#search");
var searchBtnEl = document.querySelector("#search-btn");
var searchHistoryEl = document.querySelector("#search-history");
var currentDayEl = document.querySelector("#current-day");
var titleEl = document.querySelector("#card-title");
var dayOneEl = document.querySelector("#day-one");
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
            // city name
            var city = data.city.name
            console.log("City: " + city)
            // city lat
            var lat = data.city.coord.lat
            console.log("Latitude: " + lat)
            // city lon
            var lng = data.city.coord.lon
            console.log("Longitude: " + lng)
            // current day
            // icon
            var icon = data.list[0].weather[0].icon
            console.log("Icon: " + icon)
            // temperature
            var temp = data.list[0].main.temp
            console.log("Temperature: " + temp)
            // humidity
            var humidity = data.list[0].main.humidity
            console.log("Humidity: " + humidity)
            // wind speed
            var wind = data.list[0].wind.speed
            console.log("Wind Speed: " + wind)
            // day 1
            // icon
            var iconD1 = data.list[8].weather[0].icon
            console.log("Icon: " + iconD1)
            // temperature
            var tempD1 = data.list[8].main.temp
            console.log("Temperature: " + tempD1)
            // humidity
            var humidityD1 = data.list[8].main.humidity
            console.log("Humidity: " + humidityD1)
            // day 2
            // icon
            var iconD2 = data.list[16].weather[0].icon
            console.log("Icon: " + iconD2)
            // temperature
            var tempD2 = data.list[16].main.temp
            console.log("Temperature: " + tempD2)
            // humidity
            var humidityD2 = data.list[16].main.humidity
            console.log("Humidity: " + humidityD2)
            // day 3
            // icon
            var iconD3 = data.list[24].weather[0].icon
            console.log("Icon: " + iconD3)
            // temperature
            var tempD3 = data.list[24].main.temp
            console.log("Temperature: " + tempD3)
            // humidity
            var humidityD3 = data.list[24].main.humidity
            console.log("Humidity: " + humidityD3)
            // day 4
            // icon
            var iconD4 = data.list[32].weather[0].icon
            console.log("Icon: " + iconD4)
            // temperature
            var tempD4 = data.list[32].main.temp
            console.log("Temperature: " + tempD4)
            // humidity
            var humidityD4 = data.list[32].main.humidity
            console.log("Humidity: " + humidityD4)
            // day 5
            // icon
            var iconD5 = data.list[39].weather[0].icon
            console.log("Icon: " + iconD5)
            // temperature
            var tempD5 = data.list[39].main.temp
            console.log("Temperature: " + tempD5)
            // humidity
            var humidityD5 = data.list[39].main.humidity
            console.log("Humidity: " + humidityD5)

            displayCurrentDate(city, icon, temp, humidity, wind);
            displayDayOne(iconD1, tempD1, humidityD1);
            displayDayTwo(iconD2, tempD2, humidityD2);
            displayDayThree(iconD3, tempD3, humidityD3);
            displayDayFour(iconD4, tempD4, humidityD4);
            displayDayFive(iconD5, tempD5, humidityD5);
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

displayCurrentDate = function(city, icon, temp, humidity, wind) {
    // display city name and date
    var currentCityEl = document.createElement("h2");
    var date = moment().format("M/D/YYYY");
    currentCityEl.innerHTML = city + " (" + date + ")";
    titleEl.appendChild(currentCityEl);
    // display icon
    var spanEl = document.createElement("span");
    var currentIconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    currentIconEl.classList = "icon";
    currentIconEl.setAttribute("src", iconUrl);
    titleEl.appendChild(spanEl);
    spanEl.appendChild(currentIconEl);
    // display temperature
    var currentTempEl = document.createElement("p");
    currentTempEl.innerHTML = "Temperature: " + temp + "&#8457";
    currentDayEl.appendChild(currentTempEl);
    // display humidity
    var currentHumidityEl = document.createElement("p");
    currentHumidityEl.innerHTML = "Humidity: " + humidity + "%";
    currentDayEl.appendChild(currentHumidityEl);
    // display wind speed
    var currentWindEl = document.createElement("p");
    currentWindEl.innerHTML = "Wind Speed: " + wind + " mph";
    currentDayEl.appendChild(currentWindEl);
};

displayDayOne = function(iconD1, tempD1, humidityD1) {
    // display date
    var dayOneDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD1 = currentDate + (1 * 86400000);
    var date = moment(dateD1).format("M/D/YYYY");
    console.log("Tomorrow's Date: " + date);
    dayOneDateEl.innerHTML = date;
    dayOneEl.appendChild(dayOneDateEl);
    // display icon
    var spanEl = document.createElement("span");
    var IconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD1 + "@2x.png";
    IconEl.classList = "icon";
    IconEl.setAttribute("src", iconUrl);
    dayOneEl.appendChild(spanEl);
    spanEl.appendChild(IconEl);
    // display temperature
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD1 + "&#8457";
    dayOneEl.appendChild(tempEl);
    // display humidity
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD1 + "%";
    dayOneEl.appendChild(humidityEl);
};

displayDayTwo = function(iconD2, tempD2, humidityD2) {
    // display date
    var dayTwoDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD2 = currentDate + (2 * 86400000);
    var date = moment(dateD2).format("M/D/YYYY");
    dayTwoDateEl.innerHTML = date;
    dayTwoEl.appendChild(dayTwoDateEl);
    // display icon
    var spanEl = document.createElement("span");
    var IconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD2 + "@2x.png";
    IconEl.classList = "icon";
    IconEl.setAttribute("src", iconUrl);
    dayTwoEl.appendChild(spanEl);
    spanEl.appendChild(IconEl);
    // display temperature
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD2 + "&#8457";
    dayTwoEl.appendChild(tempEl);
    // display humidity
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD2 + "%";
    dayTwoEl.appendChild(humidityEl);
};

displayDayThree = function(iconD3, tempD3, humidityD3) {
    // display date
    var dayThreeDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD3 = currentDate + (3 * 86400000);
    var date = moment(dateD3).format("M/D/YYYY");
    dayThreeDateEl.innerHTML = date;
    dayThreeEl.appendChild(dayThreeDateEl);
    // display icon
    var spanEl = document.createElement("span");
    var IconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD3 + "@2x.png";
    IconEl.classList = "icon";
    IconEl.setAttribute("src", iconUrl);
    dayThreeEl.appendChild(spanEl);
    spanEl.appendChild(IconEl);
    // display temperature
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD3 + "&#8457";
    dayThreeEl.appendChild(tempEl);
    // display humidity
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD3 + "%";
    dayThreeEl.appendChild(humidityEl);
};

displayDayFour = function(iconD4, tempD4, humidityD4) {
    // display date
    var dayFourDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD4 = currentDate + (4 * 86400000);
    var date = moment(dateD4).format("M/D/YYYY");
    dayFourDateEl.innerHTML = date;
    dayFourEl.appendChild(dayFourDateEl);
    // display icon
    var spanEl = document.createElement("span");
    var IconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD4 + "@2x.png";
    IconEl.classList = "icon";
    IconEl.setAttribute("src", iconUrl);
    dayFourEl.appendChild(spanEl);
    spanEl.appendChild(IconEl);
    // display temperature
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD4 + "&#8457";
    dayFourEl.appendChild(tempEl);
    // display humidity
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD4 + "%";
    dayFourEl.appendChild(humidityEl);
};

displayDayFive = function(iconD5, tempD5, humidityD5) {
    // display date
    var dayFiveDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD5 = currentDate + (5 * 86400000);
    var date = moment(dateD5).format("M/D/YYYY");
    dayFiveDateEl.innerHTML = date;
    dayFiveEl.appendChild(dayFiveDateEl);
    // display icon
    var spanEl = document.createElement("span");
    var IconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD5 + "@2x.png";
    IconEl.classList = "icon";
    IconEl.setAttribute("src", iconUrl);
    dayFiveEl.appendChild(spanEl);
    spanEl.appendChild(IconEl);
    // display temperature
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD5 + "&#8457";
    dayFiveEl.appendChild(tempEl);
    // display humidity
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD5 + "%";
    dayFiveEl.appendChild(humidityEl);
};