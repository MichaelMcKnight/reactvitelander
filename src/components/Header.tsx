import Logo from "./Header/Logo";
import Nav from "./Header/Nav";
import MobileNav from "./Header/MobileNav";
import Container from "./custom/Container";

const Header = () => {
  return (
    <header className="h-[64px] flex items-center sticky top-0 z-50 shadow-md bg-zinc-900">
      <Container className="flex justify-between items-center w-full">
        <a href="#brew-buddy" aria-label="Return to top">
          <Logo className="h-10 w-auto" />
        </a>
        <Nav />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
