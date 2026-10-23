import "./globals.css";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
const disp = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--f-disp" });
const mono = JetBrains_Mono({ weight: "500", subsets: ["latin"], variable: "--f-mono" });
export const metadata = { title: "SHARVA — More Than Average", description: "One life. Many chapters." };
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body className={`${disp.variable} ${mono.variable}`}>{children}</body></html>
  );
}
