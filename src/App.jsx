import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Transformations from "./components/Transformations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050816]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Transformations />
      <Pricing />
              <Testimonials />
<FAQ />
<Contact />
      <Footer />

    </div>
  );
}