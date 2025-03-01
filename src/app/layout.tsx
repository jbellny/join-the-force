import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="app-frame"
        className="flex flex-col min-h-screen items-center main-page bg-slate-400"
      >
        {/* <video autoPlay loop muted playsInline src="/clouds.mov">

        </video> */}
        {children}
      </body>
    </html>
  );
}
