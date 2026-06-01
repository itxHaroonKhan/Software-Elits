import PricingPackages from './pricing-packages';

export default function PricingContent() {
  return (
    <>
      
      
          
          {PricingPackages()}
      
       
       
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
                   <a href="javascript:void(0)" className="default-btn chat">Live Chat</a>
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
       
      </>
    );
}
