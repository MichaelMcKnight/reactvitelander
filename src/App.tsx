import { LazyMotion, domAnimation } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content.
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </LazyMotion>
  );
};

export default App;
