import { Button } from "@/components/ui/button";
import Container from "@/components/custom/Container";
import FadeIn from "@/components/animation/FadeIn";

import { HeroData } from "@/data/data";

import heroImg from "@/assets/images/perfect-cup.jpg";

const Hero = () => {
  const { heading, content } = HeroData();

  return (
    <section
      className="min-h-[500px] lg:min-h-[calc(100vh-64px)] grid place-content-center bg-radial-[at_0%_0%] from-indigo-200 to-white to-75% py-12"
      id="brew-buddy"
    >
      <Container
        size="lg"
        className="grid md:grid-cols-7 md:gap-20 gap-4 items-center"
      >
        <FadeIn direction="left" className="md:col-span-4 order-2 md:order-1">
          {heading}
          {content}
          <Button
            onClick={(e) => {
              const target = e.currentTarget.getAttribute("data-target");
              if (target) {
                window.location.href = target;
              }
            }}
            data-target="#get-brewing"
            className="mt-4"
          >
            Get Started
          </Button>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.2}
          className="col-span-3 order-1 md:order-2 mb-4"
        >
          <img
            src={heroImg}
            alt="A perfect cup of coffee in the morning sun."
            className="rounded-[2rem] shadow-blue"
          />
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
