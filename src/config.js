const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const getCurrentDate = () => new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
const getCurrentTime = () => new Date().toLocaleTimeString('en-GB', { minute: '2-digit', hour: '2-digit' });
let API_URL = '';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

export {
  API_URL,
  getCurrentDate,
  getCurrentTime
}