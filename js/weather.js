const API_KEY = "ae397db3541b9b1ecbd20b6c87bc1861";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const citySearch = document.querySelector("#citySearch");
const tempDisplay = document.querySelector("#tempDisplay");
const weatherDisplay = document.querySelector("#weatherDisplay");
const cityName = document.querySelector("#cityName");
const defaultCity = "Краснодар";

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};
const fetchData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    // console.log(data);

    if (response.ok) {
      cityName.textContent = `Название города: ${data.name}`;
      tempDisplay.textContent = `Температура: ${data.main.temp} °C`;
      weatherDisplay.textContent = `Погода: ${data.weather[0].description}`;
      localStorage.setItem("city", city);
    }
  } catch (error) {
    console.log(error);
  }
};

const getCityByGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        const city = data.name;
        fetchData(city);
      },
      (error) => {
        fetchData(defaultCity);
      }
    );
  } else {
    fetchData(defaultCity);
  }
};

const savedCity = localStorage.getItem("city");

if (savedCity) {
  fetchData(savedCity);
} else {
  getCityByGeolocation();
}

const debouncedFetchData = debounce((event) => {
  fetchData(event.target.value);
}, 400);

citySearch.addEventListener("input", debouncedFetchData);
