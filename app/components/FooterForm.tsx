"use client";

import { useState, useRef } from "react";

export default function FooterForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    formData.set("formType", "signup_form");
    formData.set("referer", window.location.href);

    try {
      const res = await fetch("/api/lead", { method: "POST", body: formData });
      const data = await res.json();
      if (data.status) {
        setResult({ type: "success", text: "Congratulations! You've Signed up, redirecting please wait....." });
        formRef.current?.reset();
        setTimeout(() => { window.location.href = "/order/thankyou"; }, 2000);
      } else {
        setResult({ type: "error", text: (data.messages ?? []).join("\n") || "Something went wrong." });
      }
    } catch {
      setResult({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="footer-form-area sec-pad">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-7 col-sm-12">
            <div className="footer-form" data-aos="fade-left" data-aos-duration="1500">
              <h3>Don&apos;t Be Shy. <br /> <span>Talk To Us</span>.</h3>
              <form ref={formRef} className="main-footer-form" onSubmit={handleSubmit}>
                <div className="contact-form">
                  <input type="text" className="form-control" placeholder="Enter Your Name" name="name" required />
                  <input type="text" className="form-control" placeholder="Enter Your Email" name="email" required />
                  <input type="text" className="form-control" placeholder="Enter Phone Number" maxLength={10} name="phone" required />
                  <textarea name="customers_meta[message]" id="msg" placeholder="Enter Your Project Brief" rows={5}></textarea>
                  <div className="form-btn">
                    {result && (
                      <div className={`alert ${result.type === "success" ? "alert-success" : "alert-danger"}`}>
                        {result.text}
                      </div>
                    )}
                    <div className="clearfix"></div>
                    {loading
                      ? <img src="/order/img/loader.gif" alt="Loading, Please Wait..." />
                      : <button className="default-btn btn-10" type="submit">Submit</button>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <div className="footer-form-address" data-aos="fade-right" data-aos-duration="1500">
              <ul>
                <li><a href="tel:+1 (510) 671-5343"><i className="fas fa-phone"></i> +1 (510) 671-5343 (USA)</a></li>
                <li><a href="mailto:info@softwareelits.com"><i className="fas fa-envelope-open-text"></i> info@softwareelits.com</a></li>
                <li><a href="#"><i className="fas fa-location-arrow"></i> 2005 EYE Street, Suite 6 - 1 Bakersfield, California 93301</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form-right-img">
        <img src="/images/webp/footer-form-img.webp" alt="footer-form-img" className="img-fluid" data-aos="fade-left" data-aos-duration="1500" />
      </div>
    </section>
  );
}
