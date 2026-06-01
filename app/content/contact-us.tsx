export default function ContactUsContent() {
  return (
    <>

      <section className="contact-hero sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="heading42" data-aos="fade-down" data-aos-duration="1500">
                Get In <span>Touch</span>
              </h2>
              <p className="sec-para mt-3" data-aos="fade-up" data-aos-duration="1500">
                Have a project in mind? We'd love to hear from you. Let's build something great together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section sec-pad pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-card" data-aos="fade-up" data-aos-duration="1500">
                <div className="row no-gutters">
                  <div className="col-lg-7">
                    <div className="contact-form-wrap">
                      <h3>Send Us a Message</h3>
                      <form className="main-footer-form leadForm" method="post" encType="multipart/form-data" action="javascript:void(0)">
                        <input type="hidden" id="formType" name="formType" />
                        <input type="hidden" id="referer" name="referer" />
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Full Name" name="name" data-validation="required" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="email" className="form-control" placeholder="Your Email Address" name="email" data-validation="required" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="tel" className="form-control" placeholder="Your Phone Number" maxLength={10} name="phone" data-validation="required" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Company (Optional)" name="company" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <textarea name="customers_meta[message]" id="msg" placeholder="Tell us about your project..." rows={5}></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <div id="formResult"></div>
                          <button className="default-btn" type="submit" id="signupBtn">Send Message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="contact-info-wrap">
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-info-text">
                          <h5>Phone</h5>
                          <a href="tel:+1 (510) 671-5343">+1 (510) 671-5343</a>
                        </div>
                      </div>
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                          <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="contact-info-text">
                          <h5>Email</h5>
                          <a href="mailto:info@softwareelits.com">info@softwareelits.com</a>
                        </div>
                      </div>
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                          <i className="fas fa-location-arrow"></i>
                        </div>
                        <div className="contact-info-text">
                          <h5>Address</h5>
                          <p>2005 EYE Street, Suite 6 - 1<br />Bakersfield, California 93301</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="industry-heading heading" data-aos="fade-down" data-aos-duration="1500">
                <h2>Trusted by Brands From <span>40+ Industries</span></h2>
              </div>
            </div>
          </div>
          <div className="row point-wrap" data-aos="zoom-in" data-aos-duration="1500">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-05"></i> Engineering</li>
                <li><i className="sprite sprite-04"></i> Construction</li>
                <li><i className="sprite sprite-03"></i> Technology</li>
                <li><i className="sprite sprite-02"></i> Automotive</li>
                <li><i className="sprite sprite-01"></i> Catalogues</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-06"></i> Religion</li>
                <li><i className="sprite sprite-07"></i> Social</li>
                <li><i className="sprite sprite-08"></i> Education</li>
                <li><i className="sprite sprite-09"></i> Resource</li>
                <li><i className="sprite sprite-10"></i> Sports</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-11"></i> Financial</li>
                <li><i className="sprite sprite-12"></i> Insurance</li>
                <li><i className="sprite sprite-12"></i> Consultation</li>
                <li><i className="sprite sprite-14"></i> Architectural</li>
                <li><i className="sprite sprite-15"></i> Food</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-16"></i> Medical</li>
                <li><i className="sprite sprite-17"></i> Health</li>
                <li><i className="sprite sprite-18"></i> Travel</li>
                <li><i className="sprite sprite-19"></i> Matrimony</li>
                <li><i className="sprite sprite-20"></i> Art</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-21"></i> Communication</li>
                <li><i className="sprite sprite-22"></i> Entertainment</li>
                <li><i className="sprite sprite-23"></i> Environmental</li>
                <li><i className="sprite sprite-24"></i> Fashion</li>
                <li><i className="sprite sprite-25"></i> Spa</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-26"></i> Children</li>
                <li><i className="sprite sprite-27"></i> Craft</li>
                <li><i className="sprite sprite-28"></i> Music</li>
                <li><i className="sprite sprite-29"></i> Navigation</li>
                <li><i className="sprite sprite-30"></i> News</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
