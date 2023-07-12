import { Head } from "$fresh/runtime.ts"
import WeatherBadge from "../islands/WeatherBadge.tsx"
// import "npm:@picocss/pico/css/pico.min.css"
// import "../styles/app.scss"

import { Handlers } from "$fresh/server.ts"


export const handler: Handlers = {
  async GET(_req, ctx) {
    
    const weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid="+Deno.env.get('OPENWEATHERMAP_API_KEY'));
    const weatherJson : JSON = await weather.json();
    return ctx.render(weatherJson);

  },
};

export default function Home(weatherJson) {

  return (
    <>
      <Head>
        <title>Weather App!</title>
      </Head>
      <div className="container">
        <div>
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <article>
            <p>Weather App!</p>
            <WeatherBadge weather={weatherJson} />
          </article>
        </div>
      </div>
    </>
  );
}
