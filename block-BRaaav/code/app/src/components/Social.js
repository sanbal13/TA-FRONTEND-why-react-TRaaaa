function Social() {
  return (
    <div>
      <nav>
        <ul className="flex nav-menu nav-menu-secondary">
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
          <li>
            <a className="btn btn-primary" href="#a">
              {' '}
              Sign in / Join{' '}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Social;
