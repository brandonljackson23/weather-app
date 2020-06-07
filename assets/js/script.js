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
var searchArr = JSON.parse(localStorage.getItem("city")) || [];

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
            saveSearch(city);
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

removeCurrentDate = function() {
    var title = document.getElementById("current-title");
    title.remove();
    displayCurrentDate();
};

displayCurrentDate = function(city, icon, temp, humidity, wind) {
    // replace exisitng city and date
    var replaceCity = document.querySelector("#current-title");
    var currentCityEl = document.createElement("h2");
    var date = moment().format("M/D/YYYY");
    currentCityEl.innerHTML = city + " (" + date + ")";
    currentCityEl.setAttribute("id", "current-title");
    titleEl.replaceChild(currentCityEl, replaceCity);
    // replace exisitng icon
    var spanEl = document.querySelector("#current-icon-span");
    var replaceIcon = document.querySelector("#current-icon");
    var currentIconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    currentIconEl.classList = "icon";
    currentIconEl.setAttribute("src", iconUrl);
    currentIconEl.setAttribute("id", "current-icon")
    spanEl.replaceChild(currentIconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("current-temp");
    var currentTempEl = document.createElement("p");
    currentTempEl.innerHTML = "Temperature: " + temp + "&#8457";
    currentTempEl.setAttribute("id", "current-temp");
    currentDayEl.replaceChild(currentTempEl, replaceTemp);
    // replace existing humidity
    var replaceHumidity = document.getElementById("current-humidity");
    var currentHumidityEl = document.createElement("p");
    currentHumidityEl.innerHTML = "Humidity: " + humidity + "%";
    currentHumidityEl.setAttribute("id", "current-humidity");
    currentDayEl.replaceChild(currentHumidityEl, replaceHumidity);
    // display wind speed
    var replaceWind = document.getElementById("current-wind");
    var currentWindEl = document.createElement("p");
    currentWindEl.innerHTML = "Wind Speed: " + wind + " mph";
    currentWindEl.setAttribute("id", "current-wind");
    currentDayEl.replaceChild(currentWindEl, replaceWind);
};

displayDayOne = function(iconD1, tempD1, humidityD1) {
    // replace existing date
    var replaceDate = document.getElementById("day-one-date");
    var dayOneDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD1 = currentDate + (1 * 86400000);
    var date = moment(dateD1).format("M/D/YYYY");
    console.log("Tomorrow's Date: " + date);
    dayOneDateEl.innerHTML = date;
    dayOneDateEl.setAttribute("id", "day-one-date");
    dayOneEl.replaceChild(dayOneDateEl, replaceDate);
    // replace existing icon
    var spanEl = document.querySelector("#day-one-span");
    var replaceIcon = document.getElementById("day-one-icon");
    var iconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD1 + "@2x.png";
    iconEl.classList = "icon";
    iconEl.setAttribute("src", iconUrl);
    iconEl.setAttribute("id", "day-one-icon");
    spanEl.replaceChild(iconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("day-one-temp");
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD1 + "&#8457";
    tempEl.setAttribute("id", "day-one-temp");
    dayOneEl.replaceChild(tempEl, replaceTemp);
    // replace existing humidity
    var replacehumidity = document.getElementById("day-one-humidity");
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD1 + "%";
    humidityEl.setAttribute("id", "day-one-humidity");
    dayOneEl.replaceChild(humidityEl, replacehumidity);
};

displayDayTwo = function(iconD2, tempD2, humidityD2) {
    // replace existing date
    var replaceDate = document.getElementById("day-two-date");
    var dayTwoDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD2 = currentDate + (2 * 86400000);
    var date = moment(dateD2).format("M/D/YYYY");
    dayTwoDateEl.innerHTML = date;
    dayTwoDateEl.setAttribute("id", "day-two-date");
    dayTwoEl.replaceChild(dayTwoDateEl, replaceDate);
    // replace existing icon
    var spanEl = document.querySelector("#day-two-span");
    var replaceIcon = document.getElementById("day-two-icon");
    var iconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD2 + "@2x.png";
    iconEl.classList = "icon";
    iconEl.setAttribute("src", iconUrl);
    iconEl.setAttribute("id", "day-two-icon");
    spanEl.replaceChild(iconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("day-two-temp");
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD2 + "&#8457";
    tempEl.setAttribute("id", "day-two-temp");
    dayTwoEl.replaceChild(tempEl, replaceTemp);
    // replace existing humidity
    var replacehumidity = document.getElementById("day-two-humidity");
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD2 + "%";
    humidityEl.setAttribute("id", "day-two-humidity");
    dayTwoEl.replaceChild(humidityEl, replacehumidity);
};

displayDayThree = function(iconD3, tempD3, humidityD3) {
    // replace existing date
    var replaceDate = document.getElementById("day-three-date");
    var dayThreeDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD3 = currentDate + (3 * 86400000);
    var date = moment(dateD3).format("M/D/YYYY");
    dayThreeDateEl.innerHTML = date;
    dayThreeDateEl.setAttribute("id", "day-three-date");
    dayThreeEl.replaceChild(dayThreeDateEl, replaceDate);
    // replace existing icon
    var spanEl = document.querySelector("#day-three-span");
    var replaceIcon = document.getElementById("day-three-icon");
    var iconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD3 + "@2x.png";
    iconEl.classList = "icon";
    iconEl.setAttribute("src", iconUrl);
    iconEl.setAttribute("id", "day-three-icon");
    spanEl.replaceChild(iconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("day-three-temp");
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD3 + "&#8457";
    tempEl.setAttribute("id", "day-three-temp");
    dayThreeEl.replaceChild(tempEl, replaceTemp);
    // replace existing humidity
    var replacehumidity = document.getElementById("day-three-humidity");
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD3 + "%";
    humidityEl.setAttribute("id", "day-three-humidity");
    dayThreeEl.replaceChild(humidityEl, replacehumidity);
};

displayDayFour = function(iconD4, tempD4, humidityD4) {
    // replace existing date
    var replaceDate = document.getElementById("day-four-date");
    var dayFourDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD4 = currentDate + (4 * 86400000);
    var date = moment(dateD4).format("M/D/YYYY");
    dayFourDateEl.innerHTML = date;
    dayFourDateEl.setAttribute("id", "day-four-date");
    dayFourEl.replaceChild(dayFourDateEl, replaceDate);
    // replace existing icon
    var spanEl = document.querySelector("#day-four-span");
    var replaceIcon = document.getElementById("day-four-icon");
    var iconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD4 + "@2x.png";
    iconEl.classList = "icon";
    iconEl.setAttribute("src", iconUrl);
    iconEl.setAttribute("id", "day-four-icon");
    spanEl.replaceChild(iconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("day-four-temp");
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD4 + "&#8457";
    tempEl.setAttribute("id", "day-four-temp");
    dayFourEl.replaceChild(tempEl, replaceTemp);
    // replace existing humidity
    var replacehumidity = document.getElementById("day-four-humidity");
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD4 + "%";
    humidityEl.setAttribute("id", "day-four-humidity");
    dayFourEl.replaceChild(humidityEl, replacehumidity);
};

displayDayFive = function(iconD5, tempD5, humidityD5) {
    // replace existing date
    var replaceDate = document.getElementById("day-five-date");
    var dayFiveDateEl = document.createElement("h5");
    var currentDate = moment();
    var dateD5 = currentDate + (5 * 86400000);
    var date = moment(dateD5).format("M/D/YYYY");
    dayFiveDateEl.innerHTML = date;
    dayFiveDateEl.setAttribute("id", "day-five-date");
    dayFiveEl.replaceChild(dayFiveDateEl, replaceDate);
    // replace existing icon
    var spanEl = document.querySelector("#day-five-span");
    var replaceIcon = document.getElementById("day-five-icon");
    var iconEl = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + iconD5 + "@2x.png";
    iconEl.classList = "icon";
    iconEl.setAttribute("src", iconUrl);
    iconEl.setAttribute("id", "day-five-icon");
    spanEl.replaceChild(iconEl, replaceIcon);
    // replace existing temperature
    var replaceTemp = document.getElementById("day-five-temp");
    var tempEl = document.createElement("p");
    tempEl.innerHTML = "Temp: " + tempD5 + "&#8457";
    tempEl.setAttribute("id", "day-five-temp");
    dayFiveEl.replaceChild(tempEl, replaceTemp);
    // replace existing humidity
    var replacehumidity = document.getElementById("day-five-humidity");
    var humidityEl = document.createElement("p");
    humidityEl.innerHTML = "Humidity: " + humidityD5 + "%";
    humidityEl.setAttribute("id", "day-five-humidity");
    dayFiveEl.replaceChild(humidityEl, replacehumidity);
};

saveSearch = function(city) {
    searchArr.push(city)
    localStorage.setItem("city", JSON.stringify(searchArr));
    var liEl = document.createElement("li");
    liEl.classList = "list-group-item";
    liEl.innerHTML = city;
    searchHistoryEl.appendChild(liEl);
};

removeLi = function() {
    for(var i = 0; i < searchArr.length; i++) {
        var removeLi = document.getElementById("list-group-item");
        removeLi.remove();
    }
    displayHistory();
};

displayHistory = function() {
    for(var i = 0; i < searchArr.length; i++) {
        var city = searchArr[i];
        var liEl = document.createElement("li");
        liEl.classList = "list-group-item";
        liEl.innerHTML = city;
        searchHistoryEl.appendChild(liEl);
    } 
};

displayHistory();