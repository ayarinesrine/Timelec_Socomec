import type { Metadata } from "next";
import "./globals.scss";
import SlideBar from "@/shared/SlideBar/SlideBar";

export const metadata: Metadata = {
  title: "Socomec_Timelec",
  manifest: "@/app/manifest.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <div className="lg:flex mt-5">
          <div className="xl:basis-[7%] lg:basis-[10%] basis-[15%] hidden lg:block">
            <SlideBar />
          </div>
          {children}
=======
        <div className="flex mt-5">
          <div className="basis-[7%]">
            <SlideBar />
          </div>
          {children}

>>>>>>> 7f6944b1c339a5c3a6b86dfa2014a140a5a6d73a
        </div>
      </body>
    </html>
  );
}
