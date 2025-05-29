function  changeTime() {
  let lagos = document.querySelector("#lagos");
  let lagosDate = lagos.querySelector(".date");
  let lagosTime = lagos.querySelector(".time");
  let LagosTime = moment().tz("Africa/Lagos");
  lagosDate.innerHTML = LagosTime.format("MMMM Do YYYY");
  lagosTime.innerHTML = LagosTime.format("h:mm:ss [<small>]A[</small>]");
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = SydneyTime.format("MMMM Do YYYY");
  sydneyTime.innerHTML = SydneyTime.format("h:mm:ss [<small>]A[</small>]");
  let accra = document.querySelector("#accra");
  let accraDate = accra.querySelector(".date");
  let accraTime = accra.querySelector(".time");
  let AccraTime = moment().tz("Africa/Accra");
  accraDate.innerHTML = AccraTime.format("MMMM Do YYYY");
  accraTime.innerHTML = AccraTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "myLocation") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">Show cities</a>
  `;
}

changeTime();
setInterval(changeTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);