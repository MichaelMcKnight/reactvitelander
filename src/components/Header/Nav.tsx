import { buttonVariants } from "@/components/ui/button";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6 items-center text-white font-medium m-0">
        <li>
          <a href="#features" className="hover:text-rose-500">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-rose-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-rose-500">
            FAQ
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-rose-500">
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#get-brewing"
            className={buttonVariants({ variant: "secondary" })}
          >
            Get Brewing
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
