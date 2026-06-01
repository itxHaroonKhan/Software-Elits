import type { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";
import Footer from "./components/Footer";
import "./globals.css";
import "./plugin.css";
import "./custom.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Design agency based in US offering a number of premium level digital services | Software Elits",
  description: "We at Software Elits offer a wide range of services to all around the globe in cost-friendly packages.",
  icons: { icon: "/images/favicon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
