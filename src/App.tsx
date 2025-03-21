import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content.
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default App;
