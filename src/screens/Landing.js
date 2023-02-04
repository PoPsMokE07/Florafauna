import Navbar from "../components/Navbar";
import bgImg from "../assets/bgimg.webp";
import Main from "../components/Main";
function Landing() {
  return (
    <div className="App font-poppins">
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default Landing;