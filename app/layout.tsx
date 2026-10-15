
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eid Gypsum | الجبس بورد والتشطيبات الداخلية",
  description:
    "حلول الجبس بورد والتشطيبات الداخلية من Eid Gypsum. تواصل معنا لمناقشة مشروعك.",
  applicationName: "Eid Gypsum",
  openGraph: {
    title: "Eid Gypsum | Design · Build · Install",
    description: "تفاصيل تصنع الفرق، وتشطيب يليق بمساحتك.",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
