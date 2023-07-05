let date = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
let inputBox = document.getElementById("input-box");
let temp = document.querySelector("#temp");
let tempMax=document.getElementById("max");
let tempMin=document.getElementById("min");
let cityname=document.querySelector(".location");
let box=document.getElementById("box");
let nature=document.getElementById("natures");
const tempStatus = "clouds";

var weekDay = [7];
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";
const getCurrDate = () => {
  let currentTime = new Date();
  console.log(weekDay[currentTime.getDay()]);
  let day = weekDay[currentTime.getDay()];
  return day;
};
console.log(getCurrDate());
const getCurrentMonth = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var now = new Date();
  var month = months[now.getMonth()];
  var date = now.getDate();
  let hrs = now.getHours();
  let mins = now.getMinutes();

  let period = "AM";
  if (hrs > 11) {
    period = "PM";
    if (hrs > 12) {
      hrs -= 12;
    }
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  console.log(month + "/" + date);

  return `${month} ${date} |  ${hrs}:${mins}${period}`;
};
console.log(getCurrentMonth());

date.innerHTML = getCurrDate() + "|" + getCurrentMonth();

// axios({
//     method: 'get',
//     url: 'https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=3de0a4be3b7e160300ece64a429e84a0',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

inputBox.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    console.log(inputBox.value);
    let city = inputBox.value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3de0a4be3b7e160300ece64a429e84a0`
      )
      .then(function (weather) {
        console.log(weather);
        console.log(weather.data.name);
        temp.textContent=Math.floor(weather.data.main.temp-273);
        tempMax.textContent=Math.floor(weather.data.main.temp_max-273);
        tempMin.textContent=Math.floor(weather.data.main.temp_min-273);
        cityname.textContent=weather.data.name;
        if(weather.data.weather[0].main=="Clouds"){
          nature.textContent="Cloudy";
           box.style.backgroundImage="url(./images/clouds.jpg)";
           document.body.style.backgroundImage="url(./images/clouds.jpg)"
        }
        if(weather.data.weather[0].main=="Haze"){
          nature.textContent="Haze";
            box.style.backgroundImage="url(./images/haze.jpg)";
            document.body.style.backgroundImage="url(./images/haze.jpg)"
         }
         if(weather.data.weather[0].main=="Rainy"){
          nature.textContent="Rainy";
            box.style.backgroundImage="url(./images/rainy.jpg)";
            document.body.style.backgroundImage="url(./images/rainy.jpg)"
         }
         if(weather.data.weather[0].main=="Sunny"){
          nature.textContent="Sunny";
            box.style.backgroundImage="url(./images/sunny.jpg)";
            document.body.style.backgroundImage="url(./images/sunny.jpg)"
         }
         if(weather.data.weather[0].main=="Thunder"){
          nature.textContent="Thunder";
            box.style.backgroundImage="url(./images/thunder.jpg)";
            document.body.style.backgroundImage="url(./images/thunder.jpg)"
         }
         if(weather.data.weather[0].main=="Winter"){
          nature.textContent="Winter";
            box.style.backgroundImage="url(./images/winter.jpg)";
            document.body.style.backgroundImage="url(./images/winter.jpg)"
         }
         if(weather.data.weather[0].main=="Clear"){
          nature.textContent="Clear";
            box.style.backgroundImage="url(./images/clear.jpg)";
            document.body.style.backgroundImage="url(./images/clear.jpg)"
         }
      });
  };
});
