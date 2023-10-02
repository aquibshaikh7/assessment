import Container from "react-bootstrap/Container";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
    </div>
  );
};

export default App;
