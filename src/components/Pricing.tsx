import { useState } from "react";

import { Card } from "./custom/Card";
import Container from "./custom/Container";
import Button from "./custom/Button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

import { PricingData } from "@/data/data";

const Pricing = () => {
  const frequencies = [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ];

  const [frequency, setFrequency] = useState("monthly");

  const { heading, content, plans } = PricingData();

  return (
    <section id="pricing" className="py-12">
      <Container>
        <div className="text-center">
          <h2>{heading}</h2>
          {content}
        </div>
        <div className="my-12 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onValueChange={setFrequency}
              className="grid grid-cols-2 gap-x-0 rounded-full border-[1px] border-indigo-700 overflow-hidden"
            >
              {frequencies.map((option) => (
                <div key={option.value} className="relative w-full">
                  <RadioGroupItem
                    id={option.value}
                    value={option.value}
                    className="sr-only peer"
                  />
                  <Label
                    htmlFor={option.value}
                    className="block w-full px-4 py-2 text-xs font-semibold text-center cursor-pointer bg-white text-indigo-700 peer-data-[state=checked]:bg-indigo-700 peer-data-[state=checked]:text-white"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="text-sm border-[1px] border-indigo-700 relative"
            >
              <Card.Heading className="bg-indigo-50">
                <h2 className="text-rose-700 text-base uppercase tracking-wider">
                  {plan.name}
                </h2>
                <p className="text-5xl font-semibold">
                  {frequency === "monthly"
                    ? plan.prices.monthly
                    : plan.prices.annually}
                  {plan.name !== "Basic" && (
                    <span className="text-base text-rose-700 ml-1">
                      {frequency === "monthly" ? "/month" : "/year"}
                    </span>
                  )}
                </p>
              </Card.Heading>
              <Card.Body className="pb-20">
                {plan.activeFeatures && (
                  <ul>
                    {plan.activeFeatures.map((feature) => (
                      <li className="flex gap-2 items-start mb-4">
                        <CheckCircleIcon className="text-rose-700 h-3 w-3 mt-1 block" />
                        <span className="w-full">{feature.name}</span>
                      </li>
                    ))}
                    {plan.inactiveFeatures &&
                      plan.inactiveFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex gap-2 items-start mb-4 opacity-60"
                        >
                          <CheckCircleIcon className="h-3 w-3 mt-1 block" />
                          <span className="w-full">{feature.name}</span>
                        </li>
                      ))}
                  </ul>
                )}
                {plan.name !== "Basic" && (
                  <p className="text-rose-700 italic text-xs">
                    includes features from previous tier plus all of the above.
                  </p>
                )}
                <p className="text-xs">{plan.description}</p>
                <p className="italic text-xs">
                  <span className="font-semibold">Best for: </span>{" "}
                  {plan.bestFor}
                </p>
                <Button
                  onClick={(e) => {
                    const target = e.currentTarget.getAttribute("data-target");
                    if (target) {
                      window.location.href = target;
                    }
                  }}
                  data-target="#get-brewing"
                  className="absolute bottom-4 left-12 w-[calc(100%-6rem)]"
                >
                  {plan.name === "Basic" ? "Download Now" : "Start Free Trial"}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
