import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button-container" id="btn-container">
        <Link to='destination' className="btn">Explore</Link>
      </div>
    </div>
  );
};

export default Home;
