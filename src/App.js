import "./App.css";
import NavigationBar from "./component/NavigationBar";
import "./style/LandingPage.css";
import Intro from "./component/Intro";
import Trending from "./component/Trending";
import Hero from "./component/Hero";
import TesApi from "./component/TesApi";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <TesApi />
      </div>
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default App;
