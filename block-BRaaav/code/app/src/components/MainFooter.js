import CompanyDescription from './CompanyDescription';
import FooterNavigation from './FooterNavigation';

function MainFooter() {
  return (
    <>
      <div className="flex align-start">
        <div className="flex-40">
          <h3>Hydro Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veniam
            autem illo recusandae sit velit adipisci ab perspiciatis voluptate.
            Eos fuga soluta necessitatibus provident ad culpa explicabo quod
            error maxime!
          </p>
        </div>
        <div className="flex-20">
          <h3>Company</h3>
          <nav>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Join our team</a>
              </li>
              <li>
                <a href="#">Read blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-20">
          <h3>Services</h3>
          <nav>
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-20">
          <h3>Find Us</h3>
          <address>
            AltCampus, Thehr, Khaniyara,
            <br />
            Kangra, Himachal Pradesh, 176218
          </address>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
