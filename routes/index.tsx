import { Head } from "$fresh/runtime.ts";
import ZipInputField from "../islands/ZipInputField.tsx";

export default function Home() {
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
            <h1>Weather Wizard!</h1>
            <p>
              Have you ever wanted to know the weather?
            </p>
            <p>
              Enter your zip code and I shall retrieve it for you
            </p>
          </div>
          <article>
            <ZipInputField />
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
