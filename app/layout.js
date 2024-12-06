
import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
  });


export const metadata = {
    title: "Someone Special wishing you a Merry Christmas",
    description: "Celebrate the joy of Christmas with heartfelt wishes!",
    icons: {
        icon: "/favicon.png",
      },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >

        {children}
      </body>
    </html>
  );
}
