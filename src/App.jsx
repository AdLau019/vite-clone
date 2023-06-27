import "./App.css";
import Cards from "./componentes/Cards";

export default function App() {
  return (
    <body>
      <div className="container-body">
        <div className="container-texto">
          <h1>Vite</h1>
          <h2>
            Next Generation <br /> Frontend Tooling
          </h2>
          <br />
          <h3>
            Get ready for a development environment that <br /> can finally
            catch up with you.
          </h3>
          <div className="buttons">
            <a className="buttons_1" href="#">
              Get Started
            </a>
            <a className="buttons_2" href="#">
              Why Vite?
            </a>
            <a className="buttons_2" href="#">
              View on GitHub
            </a>
          </div>
        </div>
        <img
          className="logo"
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="Logo-Vite"
        />
      </div>
      <div className="container-cards">
        <Cards
          icon="💡"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />

        <Cards
          icon="⚡️"
          title="Lightning Fast HMR"
          text="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <Cards
          icon="🛠️"
          title="Rich Features"
          text="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <Cards
          icon="📦"
          title="Optimized Build"
          text="Pre-configured Rollup build with multi-page and library mode support."
        />
        <Cards
          icon="🔩"
          title="Universal Plugins"
          text="Rollup-superset plugin interface shared between dev and build."
        />
        <Cards
          icon="🔑"
          title="Fully Typed APIs"
          text="Flexible programmatic APIs with full TypeScript typing."
        />
      </div>
    </body>
  );
}
