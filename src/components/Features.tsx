import Container from "./custom/Container";
import { Card, CardContent } from "./ui/card";
import { FeaturesData } from "@/data/data";

const Features = () => {
  const { heading, content, features } = FeaturesData();
  return (
    <section
      id="features"
      className="py-12 bg-gradient-to-t from-indigo-700 to-indigo-900"
    >
      <Container size="xxl">
        <div className="text-white mb-12 text-center">
          <h2>{heading}</h2>
          {content}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="md:w-[calc(50%-1rem)]">
              <CardContent className="xl:flex gap-12 items-center">
                <img
                  src={feature.icon}
                  alt={feature.heading}
                  className="h-20 w-auto my-4"
                />
                <div>
                  <h3 className="text-rose-700 mb-2">{feature.heading}</h3>
                  {feature.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
