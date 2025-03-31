import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

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
        <FadeIn className="text-center">
          <h2>{heading}</h2>
          {content}
        </FadeIn>
        <FadeIn delay={0.2} className="my-12 flex justify-center">
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
        </FadeIn>
        <StaggerContainer className="grid xl:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <StaggerItem key={index} className="h-full">
              <Card className="h-full text-sm border-[1px] border-rose-700 relative shadow-blue md:max-w-xl md:mx-auto">
                <CardHeader className="border-b-[1px] border-rose-700 px-8">
                  <h2 className="text-rose-700 text-base uppercase tracking-wider mb-1">
                    {plan.name}
                  </h2>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={frequency}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-semibold"
                    >
                      {frequency === "monthly"
                        ? plan.prices.monthly
                        : plan.prices.annually}
                      {plan.name !== "Basic" && (
                        <span
                          className="text-base text-rose-700 ml-1"
                          key={plan.name}
                        >
                          {frequency === "monthly" ? "/month" : "/year"}
                        </span>
                      )}
                    </motion.p>
                  </AnimatePresence>
                </CardHeader>
                <CardContent className="pb-12 px-8">
                  {plan.activeFeatures && (
                    <ul>
                      {plan.activeFeatures.map((feature, index) => (
                        <motion.li
                          className="flex gap-2 items-start mb-4"
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <CheckCircleIcon className="text-rose-700 h-3 w-3 mt-1 block" />
                          <span className="w-full">{feature.name}</span>
                        </motion.li>
                      ))}
                      {plan.inactiveFeatures &&
                        plan.inactiveFeatures.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex gap-2 items-start mb-4 opacity-30"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 0.3, x: 0 }}
                            transition={{
                              delay:
                                0.1 *
                                (index + (plan.activeFeatures?.length || 0)),
                              duration: 0.3,
                            }}
                          >
                            <CheckCircleIcon className="h-3 w-3 mt-1 block" />
                            <span className="w-full">{feature.name}</span>
                          </motion.li>
                        ))}
                    </ul>
                  )}
                  {plan.name !== "Basic" && (
                    <p className="text-rose-700 italic text-xs">
                      includes features from previous tier plus all of the
                      above.
                    </p>
                  )}
                  <p className="text-xs">{plan.description}</p>
                  <p className="italic text-xs">
                    <span className="font-semibold">Best for: </span>{" "}
                    {plan.bestFor}
                  </p>
                  <Button
                    onClick={(e) => {
                      const target =
                        e.currentTarget.getAttribute("data-target");
                      if (target) {
                        window.location.href = target;
                      }
                    }}
                    data-target="#get-brewing"
                    className="absolute bottom-6 left-8 w-[calc(100%-4rem)]"
                  >
                    {plan.name === "Basic"
                      ? "Download Now"
                      : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default Pricing;
