import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const title = "CÔNG TY TNHH GIẢI PHÁP KỸ THUẬT POMES | Cải tiến, chế tạo máy và tự động hóa";
const description =
  "CÔNG TY TNHH GIẢI PHÁP KỸ THUẬT POMES tư vấn giải pháp cải tiến, thiết kế, chế tạo máy móc, hệ thống tự động và cung cấp thiết bị công nghiệp cơ khí, điện, tự động, khí nén tại TP.HCM.";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pomes-pi.vercel.app"),
  title,
  description,
  keywords: [
    "Giải pháp tự động hóa",
    "Thiết kế chế tạo máy",
    "Cải tiến máy móc",
    "Gia công cơ khí chính xác",
    "Quét 3D công nghiệp",
    "Thiết kế ngược",
    "Bảo trì máy móc",
    "Thiết bị công nghiệp",
    "Thiết bị khí nén",
    "Tự động hóa nhà máy",
    "Công ty cơ khí tại TP.HCM",
    "Giải pháp kỹ thuật tại TP.HCM",
  ],
  icons: {
    icon: "/favicon-pomes.png",
    shortcut: "/favicon-pomes.png",
    apple: "/favicon-pomes.png",
  },
  openGraph: {
    title,
    description,
    siteName: "POMES CO.,LTD",
    type: "website",
    images: [{ url: "/og.png", width: 1600, height: 900, alt: "POMES engineering and automation solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07172b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body>{children}</body>
    </html>
  );
}
