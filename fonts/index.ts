import { Oswald, Pontano_Sans, Ramabhadra, Poppins } from "next/font/google";

const unbounded = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
  variable: "--passionOne",
});

const acme = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--passionOne",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const SedaN = acme.className;
export const Rancher = unbounded.className;
export const OswaldFont = oswald.className;
export const PoppinsFont = poppins.className;
