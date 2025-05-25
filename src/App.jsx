import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Testimonial } from "./Components/Testimonial";
import { Contact } from "./Components/Contact";
import { Map } from "./Components/Map";

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Map />
    </>
  );
};
