import { Button } from "./ui/button";
import Container from "./custom/Container";

import { HeroData } from "@/data/data";

import heroImg from "../assets/images/perfect-cup.jpg";

const Hero = () => {
  const { heading, content } = HeroData();

  return (
    <section
      className="min-h-[500px] lg:min-h-[calc(100vh-64px)] grid place-content-center bg-radial-[at_0%_0%] from-indigo-200 to-white to-75% py-12"
      id="#brew-buddy"
    >
      <Container
        size="lg"
        className="grid md:grid-cols-7 md:gap-20 gap-4 items-center"
      >
        <div className="md:col-span-4">
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
          >
            Get Started
          </Button>
        </div>
        <div className="col-span-3">
          <img
            src={heroImg}
            alt="A perfect cup of coffee in the morning sun."
            className="rounded-[2rem] shadow-blue"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
