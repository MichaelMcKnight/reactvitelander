import { lazy, Suspense } from "react";
import { TierProvider } from "@/context/PricingTierContext";
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
    <TierProvider>
      <LazyMotion features={domAnimation}>
        <a className="sr-only focus:not-sr-only" href="#main">
          Skip to content.
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Suspense
            fallback={<div className="p-8 text-center">Loading...</div>}
          >
            <Features />
            <Pricing />
            <FAQ />
            <Testimonials />
            <GetStarted />
          </Suspense>
        </main>
        <Footer />
      </LazyMotion>
    </TierProvider>
  );
};

export default App;
