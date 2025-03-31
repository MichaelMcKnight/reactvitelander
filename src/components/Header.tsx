import Logo from "@/components/Header/Logo";
import Nav from "@/components/Header/Nav";
import MobileNav from "@/components/Header/MobileNav";
import Container from "@/components/custom/Container";

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
