import Footer from "./Pages/ProjectThree/Footer";
import Galery from "./Pages/ProjectThree/Galery";
import Hero from "./Pages/ProjectThree/Hero";
import SectionOne from "./Pages/ProjectThree/SectionOne";
import SectionThree from "./Pages/ProjectThree/SectionThree";
import SectionTwo from "./Pages/ProjectThree/SectionTwo";
import Testimonial from "./Pages/ProjectThree/Testimonial";

export default function App() {
  return (
    <div>
      <Hero />

      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <Testimonial />
      <Galery />
      <Footer />
    </div>
  );
}
