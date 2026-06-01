"use client";

import { useEffect } from "react";

export default function ClientStyles() {
  useEffect(() => {
    const links = [
      { rel: "stylesheet", type: "text/css", href: "/css/plugin.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/custom.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/responsive.css" },
    ];
    links.forEach((attrs) => {
      const link = document.createElement("link");
      Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
      document.head.appendChild(link);
    });
  }, []);
  return null;
}
