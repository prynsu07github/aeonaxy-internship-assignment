import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
function App() {
  return (
    <div className="font-serif">
      <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <Footer />
    </div>
  );
}

export default App;
