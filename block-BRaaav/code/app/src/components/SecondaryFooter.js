function SecondaryFooter() {
  return (
    <>
      <div className="flex footer-additional-info">
        <small> Copyright &copy; 2017 Your Company </small>
        <div className="flex">
          <p>Call us (+66) 010-020-0340</p>
          <nav>
            <ul className="flex">
              <li className="social-media-item">
                <a href="#a">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="#a">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="#a">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SecondaryFooter;
