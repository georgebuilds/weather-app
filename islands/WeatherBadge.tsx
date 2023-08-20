import Spinner from "../components/Spinner.tsx";

function kelvinToFahrenheit(valNum: number) {
  return ((valNum - 273.15) * 1.8) + 32;
}

export default function WeatherBadge(props) {
  console.log(props.weatherApiResponse);
  return (
    <div class="p-2">
      <ul className="weather-info-items-list">
        <h1>{props.weatherApiResponse.name} Weather</h1>
        <h2>{props.weatherApiResponse.weather[0].description}</h2>

        <li style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <h4>Temperature</h4>
          <h4>
            {props.weatherApiResponse.main
              ? Math.round(kelvinToFahrenheit(
                props.weatherApiResponse.main.temp,
              ))
              : <Spinner />}
          </h4>
        </li>
        <li style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <h4>Feels Like</h4>
          <h4>
            {props.weatherApiResponse.main
              ? Math.round(kelvinToFahrenheit(
                props.weatherApiResponse.main.feels_like,
              ))
              : <Spinner />}
          </h4>
        </li>
      </ul>
    </div>
  );
}
