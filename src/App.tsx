import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
const Features = lazy(() => import("@/components/Features"));
const Pricing = lazy(() => import("@/components/Pricing"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const GetStarted = lazy(() => import("@/components/GetStarted"));
const Footer = lazy(() => import("@/components/Footer"));

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content.
      </a>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
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
      </Suspense>
    </LazyMotion>
  );
};

export default App;
