import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/ui/styles/base.css";
import { css } from "../../styled-system/css";
import { WipBanner } from "@/ui/common/wip-banner/wip-banner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Won Games",
  description: "WON is the best and most complete gaming platform.",
};

type RootLayoutProps = Readonly<React.PropsWithChildren>;

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={css({ fontFamily: "poppins" })}>
        <WipBanner />
        {props.children}
      </body>
    </html>
  );
}
