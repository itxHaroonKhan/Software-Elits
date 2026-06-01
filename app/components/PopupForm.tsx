"use client";

import { useState, useEffect, useRef } from "react";

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const open = () => setVisible(true);
    const close = () => setVisible(false);
    document.querySelectorAll(".popup-open").forEach((el) => el.addEventListener("click", open));
    document.querySelectorAll(".cross").forEach((el) => el.addEventListener("click", close));
    return () => {
      document.querySelectorAll(".popup-open").forEach((el) => el.removeEventListener("click", open));
      document.querySelectorAll(".cross").forEach((el) => el.removeEventListener("click", close));
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    formData.set("formType", "popup_form");
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

  if (!visible) return null;

  return (
    <div className="popup-main-wrap entry-box1" id="popup_form" style={{ display: "block" }}>
      <div className="position-relative">
        <button type="button" className="close cross" data-dismiss="modal">&times;</button>
      </div>
      <div className="">
        <div className="row">
          <div className="col-lg-6">
            <article className="form-left-art">
              <figure>
                <img src="/Logoo.png" alt="Software Elits" />
              </figure>
              <h3>Get Jaw - Dropping</h3>
              <h2>DESIGNS AT</h2>
              <h4>
                <sup>Up To</sup>
                70%
                <sup className="sup2">Off</sup>
              </h4>
            </article>
          </div>
          <div className="col-lg-6">
            <article className="form-right-art">
              <h3>Fill Out Your Details</h3>
              <h2>To Seal The Deal</h2>
              <form ref={formRef} className="ftr-frm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Enter Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="email" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="phone" maxLength={10} placeholder="Phone Number" required />
                </div>
                <div className="mb-3">
                  {result && (
                    <div className={`alert ${result.type === "success" ? "alert-success" : "alert-danger"}`}>
                      {result.text}
                    </div>
                  )}
                  <div className="clearfix"></div>
                  {loading
                    ? <img src="/order/img/loader.gif" alt="Loading, Please Wait..." />
                    : <button type="submit">RESERVE YOUR DISCOUNT</button>
                  }
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
