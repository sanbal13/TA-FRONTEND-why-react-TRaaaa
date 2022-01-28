import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';

function Footer() {
  return (
    <>
      <footer className="footer padding">
        <div className="container">
          <MainFooter />
          <hr />
          <SecondaryFooter />
        </div>
      </footer>
    </>
  );
}

export default Footer;
