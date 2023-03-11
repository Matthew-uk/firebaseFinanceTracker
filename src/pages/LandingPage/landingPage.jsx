import Navbar from "./Navbar/navbar";
import "./landingPage.css";
import Stats from "./Stats/stats";
import Hero from "./hero/hero";
import Tools from "./tools/tools";
import MoreFeatures from "./MoreFeatures/moreFeatures";
import Slider from "./slider/slider";
import StartTeaching from "./startTeaching/startTeaching";
import Footer from "./footer/footer";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Tools />
      <MoreFeatures />
      <Slider />
      <StartTeaching />
      <Footer />
    </div>
  );
}
