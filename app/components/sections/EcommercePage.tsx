"use client"

export default function EcommercePage() {
  return (
    <>
      {/* main banner section */}
      <section className="main-banner inner-banner">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="banner-content ecom-content">
                <h3 className="heading70" data-aos="fade-right" data-aos-duration="1500"><span>Professional & Custom </span><br />eCommerce Platform <span>That Build & Transform Brands</span></h3>
                <p className="sec-para" data-aos="fade-right" data-aos-duration="1500">Software Elits designs & develops easy-to-navigate, conversion-oriented sites that have<br /> streamlined 100s of businesses globally</p>
                <div className="banner-btn" data-aos="fade-right" data-aos-duration="1500">
                  <a href="Javascript:;" className="default-btn popup-open">Let's Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 ecom-ban banner-right-wrap">
              <img src="/images/webp/ecom-pg/banner-right-img.webp" alt="ecom-pg-image" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="ecom-ban-text banner-text-img">
          <img src="/images/webp/ecom-pg/banner-text-img.webp" alt="ecom-pg-image" className="img-fluid" />
        </div>
      </section>

      {/* digital logo sec start */}
      <section className="digital-logos">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 logo-content">
              <p data-aos="fade-right" data-aos-duration="1500">Digital Branding Par <br /> Excellence for Visionary Businesses</p>
            </div>
            <div className="col-lg-8 logos">
              <div className="logos-marquee">
                <div className="logos-track">
                  <img src="/images/webp/digital-logos.webp" alt="ecom-pg-image" className="img-fluid" />
                  <img src="/images/webp/digital-logos.webp" alt="ecom-pg-image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand identities sec start */}
      <section className="brand-identities">
        <h2 className="left-text">CREATIVE</h2>
        <h2 className="right-text">DESIGNS</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="heading42" data-aos="fade-down" data-aos-duration="1500">eCommerce with <br />ROI Driven Solutions</h2>
              <p className="sec-para" data-aos="fade-up" data-aos-duration="1500">We help to make your business process more effective by the providion of required services including communication management, data and information management, content management. We provide high quality B2C solutions for clients belonging to different industries.</p>
            </div>
          </div>
          <div className="brand-verticale-tabs-wrapper">
            <div className="row tabs-area">
              <div className="col-3">
                <div className="vertical-tabs nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="iconic-tab" data-toggle="pill" href="#iconic" role="tab" aria-controls="iconic" aria-selected="true">Custom Website</a>
                  <a className="nav-link" id="3d-logo-tab" data-toggle="pill" href="#threeD-logo" role="tab" aria-controls="threeD-logo" aria-selected="false">Payment Integration</a>
                  <a className="nav-link" id="animated-tab" data-toggle="pill" href="#animated" role="tab" aria-controls="animated" aria-selected="false">Responsive</a>
                  <a className="nav-link" id="typo-tab" data-toggle="pill" href="#typo" role="tab" aria-controls="typo" aria-selected="false">SEO Optimized</a>
                </div>
              </div>
              <div className="col-9">
                <div className="vertical-tabs-content tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="iconic" role="tabpanel" aria-labelledby="iconic-tab">
                    <div className="row">
                      <div className="offset-3 col-lg-5">
                        <div className="icon-text">
                          <h3>Custom Website</h3>
                          <p>If you need an eCommerce website design & development, all you need is to give us your details and requirements, and we will exclusively integrate them into your eCommerce website. If your requirement is a complex design with eCommerce, payment integration, multilingual website, SEO-friendly and custom tiers, you can rely on us. </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-logos">
                      <img src="/images/webp/ecom-pg/tabs-img/custom/1.webp" alt="ecom-pg-image" className="image1 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/custom/2.webp" alt="ecom-pg-image" className="image2 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/custom/3.webp" alt="ecom-pg-image" className="image3 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/custom/4.webp" alt="ecom-pg-image" className="image4 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/custom/5.webp" alt="ecom-pg-image" className="image5 img-fluid" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="threeD-logo" role="tabpanel" aria-labelledby="3d-logo-tab">
                    <div className="row">
                      <div className="offset-3 col-lg-5">
                        <div className="icon-text">
                          <h3>Payment Integration</h3>
                          <p>Every good eCommerce website needs a way for its customers to be able to pay for the goods or services safely and secure. Software Elits' eCommerce service eases the process because our payment integration module supports multi-currency that makes the process smooth for both you and your customers resulting in a high conversion rate. </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-logos">
                      <img src="/images/webp/ecom-pg/tabs-img/payment/1.webp" alt="ecom-pg-image" className="image1 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/payment/2.webp" alt="ecom-pg-image" className="image2 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/payment/3.webp" alt="ecom-pg-image" className="image3 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/payment/4.webp" alt="ecom-pg-image" className="image4 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/payment/5.webp" alt="ecom-pg-image" className="image5 img-fluid" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="animated" role="tabpanel" aria-labelledby="animated-tab">
                    <div className=" row">
                      <div className="offset-3 col-lg-5">
                        <div className="icon-text">
                          <h3>Responsive eCommerce</h3>
                          <p>When our designers and developers are working on your eCommerce website they make sure that it looks flawless, regardless of the device the customers are viewing it on. Our team is expert in utilizing responsive technology to regulate your website to all mobile devices. </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-logos">
                      <img src="/images/webp/ecom-pg/tabs-img/resp/1.webp" alt="ecom-pg-image" className="image1 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/resp/2.webp" alt="ecom-pg-image" className="image2 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/resp/3.webp" alt="ecom-pg-image" className="image3 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/resp/4.webp" alt="ecom-pg-image" className="image4 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/resp/5.webp" alt="ecom-pg-image" className="image5 img-fluid" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="typo" role="tabpanel" aria-labelledby="typo-tab">
                    <div className="row ">
                      <div className="offset-3 col-lg-5">
                        <div className="icon-text">
                          <h3>SEO Optimized</h3>
                          <p>Our team utilizes SEO (Search Engine Optimization) and other website marketing techniques, we make effective marketing strategies to deliver success. Software Elits drives traffic and conversions to increase sales and leads up to 300%.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-logos">
                      <img src="/images/webp/ecom-pg/tabs-img/seo/1.webp" alt="ecom-pg-image" className="image1 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/seo/2.webp" alt="ecom-pg-image" className="image2 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/seo/3.webp" alt="ecom-pg-image" className="image3 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/seo/4.webp" alt="ecom-pg-image" className="image4 img-fluid" />
                      <img src="/images/webp/ecom-pg/tabs-img/seo/5.webp" alt="ecom-pg-image" className="image5 img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <div className="design-logos-content">
                <h4>We Are Reliable</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="design-logos">
                <div className="logos-marquee">
                  <div className="logos-track">
                    <img src="/images/webp/design-sol-logos.webp" alt="ecom-pg-image" className="img-fluid" />
                    <img src="/images/webp/design-sol-logos.webp" alt="ecom-pg-image" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio sec start */}
      <section className="portfolio sec-pad">
        <div className="container-fluid">
          <h2 className="heading42">What We Deliver</h2>
          <div className="row no-gutters inner-pg-portfolio">
            <div className="col">
              <a className="port-img" href="/images/portfolio/website/01.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/1.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/02.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/2.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/03.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/3.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col">
              <a className="port-img" href="/images/portfolio/website/04.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/4.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/05.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/5.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col">
              <a className="port-img" href="/images/portfolio/website/06.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/6.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/07.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/7.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col">
              <a className="port-img" href="/images/portfolio/website/08.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/8.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/09.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/9.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/010.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/10.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col">
              <a className="port-img" href="/images/portfolio/website/011.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/11.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/012.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/12.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
              <a className="port-img" href="/images/portfolio/website/013.webp" data-fancybox="allportfolio">
                <img src="/images/webp/portfolio/website/13.webp" />
                <div className="portfolio-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="banner-btn port-btn">
            <a href="Javascript:;" className="default-btn popup-open">Let's Get Started</a>
          </div>
        </div>
      </section>

      {/* packages sec start */}
      <section className="packages sec-pad">
        <div className="container">
          <h2 className="heading42">What We Charge</h2>
          <div className="package-carousel owl-carousel owl-theme">
            <div className="item">
              <div className="package-box" data-package-box>
                <h4>Basic</h4>
                <span></span>
                <div className="pack-detail" data-package-scroll>
                  <ul>
                    <li>E-Commerce Website Design and Development</li>
                    <li>High-end Theme Based Design</li>
                    <li>5 Banner Designs</li>
                    <li>Sliding Banner</li>
                    <li>5 Stock Photos</li>
                    <li>12 Revisions</li>
                    <li>Hover Effects</li>
                    <li>Up to 50 Products</li>
                    <li>Up to 5 Categories</li>
                    <li>Content/Inventory Management System</li>
                    <li>Easy Product Search Bar</li>
                    <li>Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Direct Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Tax calculator Integration</li>
                    <li>Shipping calculator Integration</li>
                    <li>Wishlist</li>
                    <li>Search Engine Submission</li>
                    <li>Social Media Pages Integration</li>
                    <li>Facebook Like Plugin integration</li>
                    <li>Sitemap</li>
                    <li>Complete W3C Validation</li>
                    <li>Dedicated Team of Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li className="prd_second_he">Value Added Services</li>
                    <li>Complete Source Files</li>
                    <li>Dedicated Project Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Money Back Guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                  </ul>
                </div>
                <h4 className="pack-price">$1099</h4>
                <div className="pack-btn">
                  <a href="Javascript:;" className="default-btn order-package" data-sku="ECOMMERCE_BASIC"
                    data-promotion-id="0"
                    data-price="1099"
                    data-price-text="$1099.00"
                    data-title="Basic"
                    data-package-id="4425">Let's Get Started</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="package-box" data-package-box>
                <h4>Professional</h4>
                <span></span>
                <div className="pack-detail" data-package-scroll>
                  <ul>
                    <li>E-Commerce Website Design and Development</li>
                    <li>Customized Theme Based Design</li>
                    <li>7 Banner Designs</li>
                    <li>Sliding Banner</li>
                    <li>7 Stock Photos</li>
                    <li>Unlimited Revisions</li>
                    <li>Hover Effects</li>
                    <li>Up to 100 Products</li>
                    <li>Up to 10 Categories</li>
                    <li>Content/Inventory Management System</li>
                    <li>Mobile Responsive</li>
                    <li>Easy Product Search Bar</li>
                    <li>Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Direct Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Tax calculator Integration</li>
                    <li>Shipping calculator Integration</li>
                    <li>Wishlist</li>
                    <li>Import/Export Order</li>
                    <li>Bulk Import/export of Order information</li>
                    <li>Search Engine Submission</li>
                    <li>SEO Friendly</li>
                    <li>Web Analytics Integration</li>
                    <li>Monthly Traffic Reporting</li>
                    <li>Facebook Like Plugin integration</li>
                    <li>Sitemap</li>
                    <li>Complete W3C Validation</li>
                    <li>Dedicated Team of Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li className="prd_second_he">Value Added Services</li>
                    <li>Complete Source Files</li>
                    <li>Dedicated Project Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Money Back Guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                  </ul>
                </div>
                <h4 className="pack-price">$1599</h4>
                <div className="pack-btn">
                  <a href="Javascript:;" className="default-btn order-package" data-sku="ECOMMERCE_STARUP"
                    data-promotion-id="0"
                    data-price="1599"
                    data-price-text="$1599.00"
                    data-title="Professional"
                    data-package-id="4426">Let's Get Started</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="package-box" data-package-box>
                <h4>Identity</h4>
                <span></span>
                <div className="pack-detail" data-package-scroll>
                  <ul>
                    <li>E-Commerce Website Design and Development</li>
                    <li>Customized Tailor-Made Design</li>
                    <li>Professional, Modern, Unique Design</li>
                    <li>10 Banner Designs</li>
                    <li>Sliding Banner</li>
                    <li>10 Stock Photos</li>
                    <li>Unlimited Revisions</li>
                    <li>Special Hover Effects</li>
                    <li>Up to 500 Products</li>
                    <li>Up to 25 Categories</li>
                    <li>Product Reviews &amp; Ratings</li>
                    <li>Content/Inventory Management System</li>
                    <li>Mobile Responsive</li>
                    <li>User Signup Area</li>
                    <li>User Sign-in Area</li>
                    <li>User Dashboard Area</li>
                    <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                    <li>Easy Product Search Bar</li>
                    <li>Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Direct Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Tax calculator Integration</li>
                    <li>Shipping calculator Integration</li>
                    <li>Wishlist</li>
                    <li>Import/Export Order</li>
                    <li>Bulk Import/export of Order information</li>
                    <li>Search Engine Submission</li>
                    <li>SEO Friendly</li>
                    <li>Web Analytics Integration</li>
                    <li>Monthly Traffic Reporting</li>
                    <li>Social Media Pages Integration</li>
                    <li>Facebook Like Plugin integration</li>
                    <li>Blog page (If Required)</li>
                    <li>Sitemap</li>
                    <li>Complete W3C Validation</li>
                    <li>Dedicated Team of Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li className="prd_second_he">Value Added Services</li>
                    <li>Complete Source Files</li>
                    <li>Dedicated Project Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Money Back Guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                  </ul>
                </div>
                <h4 className="pack-price">$2525</h4>
                <div className="pack-btn">
                  <a href="Javascript:;" className="default-btn order-package" data-sku="ECOMMERCE_PROFESSIONAL"
                    data-promotion-id="0"
                    data-price="2525"
                    data-price-text="$2525.00"
                    data-title="Identity"
                    data-package-id="4427">Let's Get Started</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="package-box" data-package-box>
                <h4>Corporate</h4>
                <span></span>
                <div className="pack-detail" data-package-scroll>
                  <ul>
                    <li>E-Commerce Website Design and Development</li>
                    <li>Customized Tailor-Made Design</li>
                    <li>Professional, Modern, Interactive, Dynamic, Unique Design</li>
                    <li>User-friendly Navigation</li>
                    <li>20 Banner Designs</li>
                    <li>Sliding Banner</li>
                    <li>20 Stock Photos</li>
                    <li>Unlimited Revisions</li>
                    <li>Special Hover Effects</li>
                    <li>Content/Inventory Management System</li>
                    <li>Mobile Responsive</li>
                    <li>Unlimited Products</li>
                    <li>Unlimited Categories</li>
                    <li>Product Reviews &amp; Ratings</li>
                    <li>Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date</li>
                    <li>Multiple Filtrations Option</li>
                    <li>Multiple Shorting Options (Newest / Price / Alphabetical / Rating)</li>
                    <li>Product View with Multiple Views</li>
                    <li>Product Rating</li>
                    <li>Product Detail with Similar Product Range</li>
                    <li>Coupon Code Generation (by category and product)</li>
                    <li>Product Comparison</li>
                    <li>User Signup Area</li>
                    <li>User Sign-in Area</li>
                    <li>User Dashboard Area</li>
                    <li>Distributor / Vendor Signup Area</li>
                    <li>Distributor / Vendor Sign-in Area</li>
                    <li>Distributor / Vendor Dashboard Area</li>
                    <li>Per sale commission from the vendor</li>
                    <li>Number of Product Upload (multiple packages can be created)</li>
                    <li>Product Catalog</li>
                    <li>Brand page</li>
                    <li>Distributor Based Individual Store Page</li>
                    <li>Distributor Track Record Management</li>
                    <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                    <li>Last Purchase Order Details (download invoice)</li>
                    <li>Customer Login / Registration via Social Login Facebook</li>
                    <li>Customer profile management (From Backend and Frontend)</li>
                    <li>Discounted Products Showcase</li>
                    <li>New Arrival Products Showcase</li>
                    <li>Discount Coupons</li>
                    <li>Easy Product Search Bar</li>
                    <li>Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Cash On Delivery Option</li>
                    <li>Multiple Currency Integration</li>
                    <li>Direct Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Tax calculator Integration</li>
                    <li>Shipping calculator Integration</li>
                    <li>ZIP/Postal Code Checker Integration</li>
                    <li>Location Wise Shipping Checker Integration</li>
                    <li>Wishlist</li>
                    <li>SMS Integration</li>
                    <li>Email Marketing Integration</li>
                    <li>Newsletter Signup Area</li>
                    <li>Import/Export Order</li>
                    <li>Bulk Import/export of Order information</li>
                    <li>Bulk Product Upload From Excel Sheet</li>
                    <li>Export Product List into Excel Sheet</li>
                    <li>Export order into excel sheet</li>
                    <li>Live Chat Integration</li>
                    <li>Search Engine Submission</li>
                    <li>SEO Friendly</li>
                    <li>Web Analytics Integration</li>
                    <li>Monthly Traffic Reporting</li>
                    <li>Social Media Pages Integration</li>
                    <li>Facebook Shop Setup</li>
                    <li>Facebook Like Plugin integration</li>
                    <li>Blog page (If Required)</li>
                    <li>Sitemap</li>
                    <li>Complete W3C Validation</li>
                    <li>Dedicated Team of Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li className="prd_second_he">Value added Services</li>
                    <li>Complete Source Files</li>
                    <li>Dedicated Project Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Money Back Guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                  </ul>
                </div>
                <h4 className="pack-price">$3525</h4>
                <div className="pack-btn">
                  <a href="Javascript:;" className="default-btn order-package" data-sku="ECOMMERCE_ELITE"
                    data-promotion-id="0"
                    data-price="3525"
                    data-price-text="$3525.00"
                    data-title="Corporate"
                    data-package-id="4428">Let's Get Started</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="package-box" data-package-box>
                <h4>Elite</h4>
                <span></span>
                <div className="pack-detail" data-package-scroll>
                  <ul>
                    <li>E-Commerce Website Design and Development</li>
                    <li>Customized Tailor-Made Design</li>
                    <li>Professional, Modern, Interactive, Dynamic, Unique Design</li>
                    <li>User-friendly Navigation</li>
                    <li>20 Banner Designs</li>
                    <li>Sliding Banner</li>
                    <li>20 Stock Photos</li>
                    <li>Unlimited Revisions</li>
                    <li>Content/Inventory Management System</li>
                    <li>Mobile Responsive</li>
                    <li>Unlimited Products</li>
                    <li>Unlimited Categories</li>
                    <li>Product Reviews &amp; Ratings</li>
                    <li>Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date</li>
                    <li>Multiple Filtrations Option</li>
                    <li>Multiple Shorting Options (Newest / Price / Alphabetical / Rating)</li>
                    <li>Product View with Multiple Views</li>
                    <li>Product Rating</li>
                    <li>Product Detail with Similar Product Range</li>
                    <li>Coupon Code Generation (by category and product)</li>
                    <li>Product Comparison</li>
                    <li>User Signup Area</li>
                    <li>User Sign-in Area</li>
                    <li>User Dashboard Area</li>
                    <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                    <li>Last Purchase Order Details (download invoice)</li>
                    <li>Customer Login / Registration via Social Login Facebook</li>
                    <li>Customer profile management (From Backend and Frontend)</li>
                    <li>Discounted Products Showcase</li>
                    <li>New Arrival Products Showcase</li>
                    <li>Discount Coupons</li>
                    <li>Easy Product Search Bar</li>
                    <li>Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Multiple Currency Integration</li>
                    <li>Direct Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Sign up Checkout</li>
                    <li>Shipping calculator Integration</li>
                    <li>Wishlist</li>
                    <li>Import/Export Order</li>
                    <li>Bulk Import/export of Order information</li>
                    <li>Bulk Product Upload From Excel Sheet</li>
                    <li>Export order into excel sheet</li>
                    <li>Live Chat Integration</li>
                    <li>Live Chat Integration</li>
                    <li>SEO Friendly</li>
                    <li>Web Analytics Integration</li>
                    <li>Monthly Traffic Reporting</li>
                    <li>Social Media Pages Integration</li>
                    <li>Facebook Shop Setup</li>
                    <li>Facebook Like Plugin integration</li>
                    <li>Blog page (If Required)</li>
                    <li>Sitemap</li>
                    <li>Complete W3C Validation</li>
                    <li>Dedicated Team of Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li className="prd_second_he">Value Added Services</li>
                    <li>Complete Source Files</li>
                    <li>Dedicated Project Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Money Back Guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                  </ul>
                </div>
                <h4 className="pack-price">$4988</h4>
                <div className="pack-btn">
                  <a href="Javascript:;" className="default-btn order-package" data-sku="ECOMMERCE_IDENTITY"
                    data-promotion-id="0"
                    data-price="4988"
                    data-price-text="$4988.00"
                    data-title="Elite"
                    data-package-id="4429">Let's Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta sec start */}
      <section className="cta">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 cta-content" data-aos="fade-up" data-aos-duration="1500">
              <h2 className="heading42">Avail Web Design <br /> <span>Packages At</span></h2>
            </div>
            <div className="center-img hvr-pulse" >
              <img src="/images/webp/cta-center-img.webp" alt="cta-image" className="img-fluid" data-aos="zoom-in" data-aos-duration="1500" />
            </div>
            <div className="col-lg-5 cta-btns" data-aos="fade-up" data-aos-duration="1500">
              <p>Get In Touch With Our Support Agent Or</p>
              <a href="tel:+1 (510) 671-5343" className="default-btn">+1 (510) 671-5343</a>
              <a href="Javascript:;" className="default-btn chat">Live Chat</a>
            </div>
          </div>
        </div>
        <div className="cta-img1">
          <img src="/images/webp/cta-1.webp" alt="cta-image" className="img-fluid" />
        </div>
        <div className="cta-img2">
          <img src="/images/webp/cta-2.webp" alt="cta-image" className="img-fluid" />
        </div>
      </section>

      {/* process sec start */}
      <section className="process sec-pad">
        <div className="container">
          <h2 className="heading42" data-aos="fade-down" data-aos-duration="1500">Our Process</h2>
          <div className="row process-slider">
            <div className="col-lg-3">
              <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="1500">
                <h4>Brief<span>01.</span></h4>
                <p>We begin the process by identifying the requirements and goals of the website. A review is then done on analytics and research which helps our content strategy and site design. Our project managers then create Wireframes for all templates.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="process-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                <h4>Design<span>02.</span></h4>
                <p>Our design process begins by exploring many creative trends. During a series of review rounds, the selected design is then optimized and applied to templates.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="1500">
                <h4>Development<span>03.</span></h4>
                <p>Website Development starts on a secure server where you can see the progress in real time. Following the agreement on the final design/development.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="process-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                <h4>Finalization & Deployment<span>04.</span></h4>
                <p>Q/A & rigorous testing is done on beta servers, the website is deployed and ready for business. Our commitment does not end once your website is live and launched, we remain on support for a pre-set time with the client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* secret wrok sec start */}
      <section className="secret sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="secret-content" data-aos="fade-left" data-aos-duration="1500">
                <h3 className="heading70">The Secret<br />To Doing <br /><span>Great Work.</span></h3>
                <p>We're a creative company. And that's a whole lot different from your average digital agency.</p>
                <a href="tel:+1 (510) 671-5343" className="default-btn">+1 (510) 671-5343</a>
                <a href="Javascript:;" className="default-btn chat">Live Chat</a>
              </div>
            </div>
            <div className="col-lg-7 right-img">
              <div className="secret-right-img">
                <img src="/images/webp/secret-img.webp" alt="copywriting-pg-image" className="img-fluid" data-aos="fade-right" data-aos-duration="1500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clique sec-pad">
        <div className="container">
          <h2 className="heading42">Our Clique</h2>
          <ul className="index-slider1">
            <li>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 client-wrapper">
                  <h3>Satisfied Work</h3>
                  <p>Very attentive and responsive service. I am overall happy with my logo designs. Thanks for the impressive service. </p>
                  <div className="client-deatial-wrap">
                    <div className="client-deatail">
                      <h5 className="client-name">Rachel Zack</h5>
                      <p className="client-de">Business Owner</p>
                    </div>
                    <div className="client-sign">
                      <img src="/images/webp/logo-pg/sign1.webp" alt="ecom-pg-image" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 testi-img">
                  <img src="/images/webp/logo-pg/testi-1.webp" alt="ecom-pg-image" className="testi-main-img img-fluid" />
                  <img src="/images/webp/logo-pg/curv.webp" alt="ecom-pg-image" className="circle-img img-fluid" />
                </div>
              </div>
            </li>
            <li>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 client-wrapper">
                  <h3>Impressive Work</h3>
                  <p>We at NurtureHomeFood are very happy with the quality work we received from Macro Logo Design. Their designers did an outclass job with the logo design. I will highly recommend these people for their extraordinary creativity.   </p>
                  <div className="client-deatial-wrap">
                    <div className="client-deatail">
                      <h5 className="client-name">Darryl-Nick</h5>
                      <p className="client-de">Business Owner</p>
                    </div>
                    <div className="client-sign">
                      <img src="/images/webp/logo-pg/sign2.webp" alt="ecom-pg-image" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 testi-img">
                  <img src="/images/webp/logo-pg/testi-2.webp" alt="ecom-pg-image" className="testi-main-img img-fluid" />
                  <img src="/images/webp/logo-pg/curv.webp" alt="ecom-pg-image" className="circle-img img-fluid" />
                </div>
              </div>
            </li>
            <li>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 client-wrapper">
                  <h3>New Look</h3>
                  <p>II am well satisfied with the work I received from Macro Logo Design. I personally want to thank their designers for doing an outclass job on my logo design. The logo designers were very polite and understanding. Delivered what I asked them. Thumbs up.  </p>
                  <div className="client-deatial-wrap">
                    <div className="client-deatail">
                      <h5 className="client-name">Kimberly-Vik</h5>
                      <p className="client-de">Business Owner</p>
                    </div>
                    <div className="client-sign">
                      <img src="/images/webp/logo-pg/sign3.webp" alt="ecom-pg-image" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 testi-img">
                  <img src="/images/webp/logo-pg/testi-3.webp" alt="ecom-pg-image" className="testi-main-img img-fluid" />
                  <img src="/images/webp/logo-pg/curv.webp" alt="ecom-pg-image" className="circle-img img-fluid" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* industries sec start */}
      <section className="industries sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="industry-heading heading" data-aos="fade-down" data-aos-duration="1500">
                <h2>We work with Bold Brands from <span>40+ Industries </span>and That's what we believe in.</h2>
              </div>
            </div>
          </div>
          <div className="row point-wrap" data-aos="zoom-in" data-aos-duration="1500">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <ul className="industrie-point">
                <li><i className="sprite sprite-05"></i> Engineering</li>
                <li><i className="sprite sprite-04"></i> Construcation</li>
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
