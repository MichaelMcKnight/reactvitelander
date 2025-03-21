import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Button from "../custom/Button";

import "hamburgers/dist/hamburgers.min.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={`hamburger hamburger--squeeze ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[calc(100vw-4rem)] md:w-full bg-zinc-900 border-0"
        >
          <ul className="font-medium pb-4 px-4 text-center text-white">
            <li className="border-b-[1px] border-zinc-700 py-1">
              <a href="#features" className="hover:text-rose-500">
                Features
              </a>
            </li>
            <li className="border-b-[1px] border-zinc-700 py-1">
              <a href="#pricing" className="hover:text-rose-500">
                Pricing
              </a>
            </li>
            <li className="border-b-[1px] border-zinc-700 py-1">
              <a href="#faq" className="hover:text-rose-500">
                FAQ
              </a>
            </li>
            <li className="py-1">
              <a href="#testimonials" className="hover:text-rose-500">
                Testimonials
              </a>
            </li>
            <li className="mt-4">
              <Button as="a" variant="secondary" href="#get-brewing">
                Get Brewing
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default MobileNav;
