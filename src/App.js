
import "../src/css/style.css";

function App() {
  return (
    <>
      <div className="landing-page">
        <div className="nav-menu">
          <div className="logo" src="" alt="logo" />
          <div className="menu-items">
            <a href="#contact">Contact</a>
            <a href="#project">Project</a>
            <a href="#menu">About</a>
          </div>
        </div>

        <div className="content">
          <span>
            <p>Hi my name is</p>
            <p>Guilherme Emerick</p>
            <p>I build things for the Web</p>
            <p>
              I've always been passionate about technology and nowadays my
              hobbie and profession is to give life to websites. Welcome to my
              personal website and feel free to get in touch.
            </p>
          </span>

          <button type="button">Check out My Projects</button>
        </div>
          <div className="back-image">
          </div>
          <div className="back-image2"></div>
      </div>
    </>
  );
}

export default App;
