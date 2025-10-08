import NavBar from "./Components/NavBar";
import Hero from "./Sections/Hero";
import FeatureCards from "./Sections/FeatureCards";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Skills from "./Sections/Skills";

export default function App() {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Work />
        <Skills />
        <FeatureCards />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
