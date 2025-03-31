import Container from "./custom/Container";
import { Card, CardContent } from "./ui/card";
import { FeaturesData } from "@/data/data";
import StaggerContainer from "./animation/StaggerContainer";
import StaggerItem from "./animation/StaggerItem";
import FadeIn from "./animation/FadeIn";

const Features = () => {
  const { heading, content, features } = FeaturesData();
  return (
    <section
      id="features"
      className="py-12 bg-gradient-to-t from-indigo-700 to-indigo-900"
    >
      <Container size="xxl">
        <FadeIn className="text-white mb-12 text-center">
          <h2>{heading}</h2>
          {content}
        </FadeIn>
        <StaggerContainer className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index} className="md:w-[calc(50%-1rem)]">
              <Card className="h-full">
                <CardContent className="xl:flex gap-12 items-center">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.heading}
                    className="h-20 w-auto my-4"
                  />
                  <div>
                    <h3 className="text-rose-700 mb-2">{feature.heading}</h3>
                    {feature.content}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default Features;
