import coffee from "../assets/images/coffee.svg";
import alert from "../assets/images/alert.svg";
import brewing from "../assets/images/brewing.svg";
import integration from "../assets/images/integration.svg";
import recommendation from "../assets/images/recommendation.svg";

import { CheckCircleIcon } from "@heroicons/react/16/solid";

export const HeroData = () => {
  return {
    heading: (
      <h1>
        The Smartest Way to Brew Your{" "}
        <span className="text-rose-700">Perfect Cup</span>.
      </h1>
    ),
    content: (
      <p>
        BrewBuddy is your personal coffee companion, learning your taste
        preferences to craft the perfect cup every time. With smart brewing
        technology and a tailored coffee subscription, you’ll never run out of
        fresh beans or settle for a mediocre brew again. Wake up to coffee made
        just for you—effortless, fresh, and exactly how you like it.
      </p>
    ),
  };
};

export const FeaturesData = () => {
  return {
    heading: "All the Features You Could Ask For",
    content: (
      <p>
        The app tracks your coffee consumption trends, offering insights into
        your habits and suggestions to elevate your coffee experience.
      </p>
    ),
    features: [
      {
        icon: recommendation,
        heading: "Personalized Recommendations",
        content: (
          <p>
            BrewBuddy uses AI to learn your coffee preferences over time.
            Whether you like a bold espresso, smooth cold brew, or creamy latte,
            it fine-tunes recommendations based on factors like flavor notes,
            strength, and roast level. With every cup, BrewBuddy adapts to
            suggest the perfect beans and brewing settings for your taste.
          </p>
        ),
      },
      {
        icon: integration,
        heading: "Seamless Integration",
        content: (
          <p>
            No need to replace your current setup—BrewBuddy works with popular
            coffee machines, grinders, and smart home systems like Alexa and
            Google Assistant. It syncs effortlessly with drip brewers, espresso
            machines, French presses, and even pod systems, allowing you to
            optimize your brewing process without extra hardware.
          </p>
        ),
      },
      {
        icon: coffee,
        heading: "Coffee Subscription, Tailored to You",
        content: (
          <p>
            Say goodbye to running out of coffee! BrewBuddy monitors your coffee
            consumption and automatically reorders beans before you run low.
            You’ll receive handpicked, high-quality beans from top roasters,
            ensuring freshness and variety. Choose from weekly, bi-weekly, or
            monthly deliveries—fully customizable to your needs.
          </p>
        ),
      },
      {
        icon: brewing,
        heading: "Remote Brewing & Smart Scheduling",
        content: (
          <p>
            Mornings just got easier. With the BrewBuddy app, you can start your
            coffee from anywhere—whether you’re still in bed or on your way
            home. Set brewing schedules for different days of the week, and let
            BrewBuddy pre-warm your machine, grind your beans, and start the
            perfect brew before you even step into the kitchen.
          </p>
        ),
      },
      {
        icon: alert,
        heading: "Smart Alerts & Insights",
        content: (
          <>
            <p>
              BrewBuddy keeps you informed with real-time notifications and
              coffee insights. Get alerts when:
            </p>
            <ul>
              <li className="flex gap-2 items-start">
                <CheckCircleIcon className="text-rose-700 h-4 w-auto mt-2" />{" "}
                Your coffee is ready to drink
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircleIcon className="text-rose-700 h-4 w-auto mt-2" />{" "}
                Water or beans are running low
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircleIcon className="text-rose-700 h-4 w-auto mt-2" />{" "}
                Your machine needs cleaning
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircleIcon className="text-rose-700 h-4 w-auto mt-2" />{" "}
                New, limited-edition blends are available
              </li>
            </ul>
          </>
        ),
      },
    ],
  };
};

export const PricingData = () => {
  return {
    heading: "Choose Your BrewBuddy Plan",
    content: (
      <p>
        Find the perfect plan to match your coffee routine. Whether you're a
        casual drinker or a coffee connoisseur, we have a plan for you.
      </p>
    ),
    plans: [
      {
        name: "Basic",
        prices: { monthly: "Free", annually: "Free" },
        description:
          "Perfect for those who want personalized coffee recommendations without extra automation.",
        activeFeatures: [
          { name: "AI-powered coffee matching" },
          { name: "Manual brew settings & suggestions" },
          { name: "Access to community coffee reviews" },
          { name: "Basic brew tracking & consumption insights" },
        ],
        inactiveFeatures: [
          { name: "All Premium tier features" },
          { name: "All Pro tier features" },
        ],
        bestFor:
          "Coffee enthusiasts who like to experiment but prefer to manage their own brewing.",
      },
      {
        name: "Premium",
        prices: { monthly: "$9.99", annually: "$99.99" },
        description:
          "For those who want a seamless coffee experience with smart tracking and ordering.",
        activeFeatures: [
          { name: "Smart machine integration (connect to supported brewers)" },
          { name: "Automated bean reordering based on consumption" },
          { name: "Early access to exclusive coffee blends" },
          { name: "Advanced brew tracking with personalized flavor insights" },
          { name: "Customizable brew schedules & notifications" },
        ],
        inactiveFeatures: [{ name: "All Pro tier features" }],
        bestFor:
          "Busy coffee lovers who want fresh beans and smart brewing without the hassle.",
      },
      {
        name: "Pro",
        prices: { monthly: "$19.99", annually: "199.99" },
        description:
          "The ultimate coffee experience—fully automated brewing and premium perks.",
        activeFeatures: [
          { name: "Remote brew control from the app" },
          {
            name: "AI-driven brew optimization based on weather, time of day, & mood tracking",
          },
          { name: "Priority access to limited-edition, hand-selected beans" },
          { name: "Monthly free sample from top roasters" },
          { name: "Extended customer support & dedicated coffee concierge" },
        ],
        bestFor:
          "Coffee aficionados who demand the absolute best, with a coffee experience tailored to every sip.",
      },
    ],
  };
};
