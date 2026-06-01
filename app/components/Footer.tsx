const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="ft__nav">
                <img className="mw-60" src="/Logoo.png" alt="footer-logo" />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3">
                  <div className="ft__nav">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="/"> Home</a></li>
                      <li><a href="/about-us"> About Us</a></li>
                      <li><a href="/pricing"> Packages</a></li>
                      <li><a href="/combo-package"> Combo Packages </a></li>
                      <li><a href="/portfolio">Our Portfolio</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ft__nav">
                    <h4>Services</h4>
                    <ul>
                      <li><a href="/website">Website Development</a></li>
                      <li><a href="/logo">Logo Design</a></li>
                      <li><a href="/ecommerce">Ecommerce Solutions</a></li>
                      <li><a href="/animation">Video Animation</a></li>
                      <li><a href="/illustration">Illustration</a></li>
                      <li><a href="/marketing-collateral">Marketing Collateral</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ft__nav">
                    <h4>More Services</h4>
                    <ul>
                      <li><a href="/digital-marketing">Digital Marketing</a></li>
                      <li><a href="/creative-copywriting">Creative Copywriting</a></li>
                      <li><a href="/mobile-app">Mobile Apps</a></li>
                      <li><a href="/seo">SEO Services</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 p-0 footer-cta">
                  <div className="ft__nav">
                    <h4>Get in Touch Now!</h4>
                    <ul>
                      <li><a href="tel:+1 (510) 671-5343"><i className="fas fa-phone"></i> +1 (510) 671-5343</a></li>
                      <li><a href="mailto:info@softwareelits.com"><i className="fas fa-envelope-open-text"></i> info@softwareelits.com</a></li>
                      <li><a href="javascript:;"><i className="fas fa-location-arrow"></i>2005 EYE Street, Suite 6 - 1 Bakersfield, California 93301</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a className="social-box" href="https://www.facebook.com/softwareelits" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a className="social-box" href="https://www.instagram.com/softwareelits/"><i className="fab fa-instagram"></i></a>
        <a className="social-box" href="https://www.linkedin.com/company/software-elits/"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-8 copy-rights">
              <p>© 2024 Software Elits All Rights Reserved.</p>
            </div>
            <div className="col-lg-2 col-md-4 copy-rights">
              <ul className="inline-block">
                <li><a href="/order/privacy">Privacy</a> |</li>
                <li><a href="/order/terms">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
