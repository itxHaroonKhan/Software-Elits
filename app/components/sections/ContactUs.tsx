"use client";

export default function ContactUs() {
  return (
    <>
      <section className="footer-form-area contact-us-pg sec-pad">
        <div className="form-right-img">
          <img src="/images/webp/footer-form-img.webp" alt="contact-pg-image" className="img-fluid" data-aos="zoom-in" data-aos-duration="1500" />
        </div>
        <div className="container">
          <div className="row justify-content-end no-gutters contact-us-form-area">
            <div className="col-lg-4 col-md-7 col-sm-12">
              <div className="footer-form" data-form-type="signup_form" data-aos="fade-up" data-aos-duration="800">
                <h3>
                  Let&rsquo;s Build <br />
                  <span>Something Great</span>.
                </h3>
                <form className="main-footer-form leadForm" method="post" encType="multipart/form-data" action="javascript:void(0)">
                  <input type="hidden" id="formType" name="formType" />
                  <input type="hidden" id="referer" name="referer" />
                  <div className="contact-form">
                    <input type="text" className="form-control" placeholder="Your Full Name" name="name" data-validation="required" />
                    <input type="email" className="form-control" placeholder="Your Email Address" name="email" data-validation="required" />
                    <input type="tel" className="form-control" placeholder="Your Phone Number" maxLength={10} name="phone" data-validation="required" />
                    <input type="text" className="form-control" placeholder="Your Company (Optional)" name="company" />
                    <textarea name="customers_meta[message]" id="msg" placeholder="Tell us about your project..." rows={4}></textarea>
                    <div className="form-btn">
                      <div id="formResult"></div>
                      <div className="clearfix"></div>
                      <button className="default-btn btn-10" type="submit" id="signupBtn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
              <div className="footer-form-address" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <ul>
                  <li><a href="tel:+1 (510) 671-5343"><i className="fas fa-phone"></i> +1 (510) 671-5343</a></li>
                  <li><a href="mailto:info@softwareelits.com"><i className="fas fa-envelope-open-text"></i> info@softwareelits.com</a></li>
                  <li>
                    <a href="javascript:;">
                      <i className="fas fa-location-arrow"></i> 2005 EYE Street, Suite 6 - 1<br />
                      Bakersfield, California 93301
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-text-img contact-txt-img">
          <img src="/images/webp/banner-text-img.webp" alt="contact-pg-img" className="img-fluid" />
        </div>
      </section>

      <section className="map-section">
        <div className="container-fluid p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5!2d-119.0!3d35.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzAwLjAiTiAxMTnCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="industries sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="industry-heading heading" data-aos="fade-down" data-aos-duration="1500">
                <h2>
                  Trusted by Brands From <span>40+ Industries</span>
                </h2>
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
