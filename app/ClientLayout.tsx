"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import PopupForm from "./components/PopupForm";

function useOrderPackage() {
  useEffect(() => {
    function getBoxData(btn: HTMLElement) {
      const box = btn.closest("[data-package-box]");
      return {
        html_description: box?.querySelector("[data-package-scroll]")?.innerHTML ?? "",
        sku: btn.dataset.sku,
        categoryType: btn.dataset.categoryType,
        id: btn.dataset.packageId,
        promotion_id: btn.dataset.promotionId,
        title: btn.dataset.title,
        price: btn.dataset.price,
        priceText: btn.dataset.priceText,
        orderSession: 1,
      };
    }

    function handleClick(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".order-package, .view_detail");
      if (!btn) return;
      const data = getBoxData(btn);
      const redirect = btn.classList.contains("view_detail") ? "/view_detail" : "/order/order-now";
      fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).finally(() => { window.location.href = redirect; });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pluginReady, setPluginReady] = useState(false);
  useOrderPackage();

  return (
    <>
      <div className={!isHome ? "inner-page" : ""}>
        <Header />
        {children}
      </div>
      <PopupForm />

      <Script src="/js/plugin.js" strategy="afterInteractive" onLoad={() => setPluginReady(true)} />
      <Script src="/js/alert/sweetalert.min.js" strategy="afterInteractive" />
      {pluginReady && <Script src="/js/custom.js" strategy="afterInteractive" />}
    </>
  );
}
