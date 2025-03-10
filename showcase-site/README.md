# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Weather Widget Creation

## 1. API Key Creation
To create this widget we would need to establish a connection to another website via an API call. Application Program Interface(API) is the connection between 2 computer programs (ours and the website we're taking the services from). To establish this connection we would need to make an API call, however we can't establish a call without having an API key, its like trying to go inside a house without preparing a key to the lock. 

And so we would need to obtain the API key, to do this we would need to create an account to the source of the API, in the weather widget we are using Open Weather (https://openweathermap.org/) as our API so create an account, and click on the API tab and obtain the API Key.

## 2 API Request 
Once we have our API Keys we need to send in the request to obtain information from the website. thefetchWeather function uses  `async()`  up establish a connection with OpenWeatherMap, it does this by making a fetch and response. We do a try catch for any errors. and inside we do a fetch (basically to send a request) and response (receiving the response and utilize information taken from it)

```
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b8279dfc39ab75388c015b4b4c184be&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data");
    }
  };
```

## 3 State Management

When we're fetching we also need to establish states inside the program, basically it acts as a getter and setter it stores whatever value is provided from the API 
