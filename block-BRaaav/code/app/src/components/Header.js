import Logo from './Logo';
import Navigation from './Navigation';
import Social from './Social';

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="container flex">
          <div className="flex">
            <Logo />
            <Navigation />
          </div>
          <Social />
        </div>
      </header>
    </>
  );
}

export default Header;
