
import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
  });


export const metadata = {
    title: "Someone Special has a surprise for youuu!",
    description: "Celebrate the joy of Christmas with heartfelt wishes!",
    icons: {
        icon: "/logo.png",
      },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
         <meta name="monetag" content="b5ead84b3bbf0975bfd1279582b8b44c" />
      </head>
      <body
        className={poppins.className}
      >

        {children}
      </body>
    </html>
  );
}
