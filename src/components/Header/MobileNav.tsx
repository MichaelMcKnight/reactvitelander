import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";

import "hamburgers/dist/hamburgers.min.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <nav className="lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className={`hamburger hamburger--squeeze ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded={isOpen ? "true" : "false"}
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
          <AnimatePresence>
            <motion.ul
              className="font-medium pb-4 px-4 text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
                { href: "#testimonials", label: "Testimonials" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  className={
                    index < 3 ? "border-b-[1px] border-zinc-700 py-1" : "py-1"
                  }
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={handleNavItemClick}
                    className="hover:text-rose-500"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a
                  href="#get-brewing"
                  onClick={handleNavItemClick}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Get Brewing
                </a>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default MobileNav;
