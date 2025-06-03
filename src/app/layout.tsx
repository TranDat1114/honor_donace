import type { Metadata } from "next";
import { Lobster, Inter } from "next/font/google";
import "./globals.css";

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["vietnamese"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Honor Donace - Vinh Danh Đội Ngũ Phát Triển",
  description: "Trang vinh danh những thành viên xuất sắc đã cống hiến cho dự án Donace - Event Management and Tickets Platform",
  keywords: "Donace, event management, tickets platform, team honor, vinh danh",
  authors: [{ name: "Donace Team" }],
  openGraph: {
    title: "Honor Donace - Vinh Danh Đội Ngũ Phát Triển",
    description: "Ghi nhận những đóng góp quý báu của đội ngũ phát triển Donace",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honor Donace - Vinh Danh Đội Ngũ Phát Triển",
    description: "Ghi nhận những đóng góp quý báu của đội ngũ phát triển Donace",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Donace",
  "description": "Event Management and Tickets Platform",
  "url": "https://donace.com",
  "foundingDate": "2025",
  "employee": [
    {
      "@type": "Person",
      "name": "Trần Phú Đạt",
      "jobTitle": "Developer"
    },
    {
      "@type": "Person",
      "name": "Nguyễn Hoàng Tùng",
      "jobTitle": "Developer"
    },
    {
      "@type": "Person",
      "name": "Trần Văn Tiếp",
      "jobTitle": "Developer"
    },
    {
      "@type": "Person",
      "name": "Nguyễn Hiển Gia Bảo",
      "jobTitle": "Developer"
    },
    {
      "@type": "Person",
      "name": "Nguyễn Đình Hướng",
      "jobTitle": "Developer"
    },
    {
      "@type": "Person",
      "name": "Trương Thị Kiều An",
      "jobTitle": "Developer"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${lobster.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
