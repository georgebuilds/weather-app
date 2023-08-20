import WeatherBadge from "../islands/WeatherBadge.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const weather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=&zip=" +
        ctx.params.zip + "&appid=" +
        Deno.env.get("OPENWEATHERMAP_API_KEY"),
    );
    const weatherJson: JSON = await weather.json();
    return ctx.render(weatherJson);
  },
};

export default function Zip(props: PageProps) {
  return (
    <>
      <Head>
        <title>Weather Wizard</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <main>
        <div className="wizard-card">
          <div>
            <img
              src="/weather-wizard.png"
              width="128"
              height="128"
              alt="A powerful wizard who is knowledgeable about the weather"
            />
            <h1>
              <a href="/">Weather Wizard!</a>
            </h1>
            <p>
              Have you ever wanted to know the weather?
            </p>
            <p>
              Like a magical wizard, I have fetched the weather for you
              server-side, then delivered it to your browser. This has never
              been done before JavaScript.
            </p>
          </div>
          <article>
            <WeatherBadge weatherApiResponse={props.data} />
          </article>
        </div>
        <div className="footer">
          <div className="tech-links">
            <nobr>
              <a href={"https://deno.land/"}>
                <img src={"/deno.svg"} width="20" height="20" /> Deno{" "}
                {Deno.version.deno}
              </a>
            </nobr>
            <nobr>
              <a href={"https://www.typescriptlang.org/"}>
                <img src={"/typescript.png"} width="20" height="20" />{" "}
                TypeScript
              </a>
            </nobr>
          </div>
          <div id="right-column">
            <a href="//github.com/georgebuilds/weather-app">
              <img src="/github-mark-white.svg" width="20" height="20" /> GitHub
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
