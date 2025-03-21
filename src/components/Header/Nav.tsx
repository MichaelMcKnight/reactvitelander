import Button from "../custom/Button";

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
          <Button as="a" variant="secondary" href="#get-brewing">
            Get Brewing
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
