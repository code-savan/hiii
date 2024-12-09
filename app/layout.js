import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

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
      <Head>
        {/* Add monetag script and meta tag */}
        <script
          type="text/javascript"
          src="https://alwingulla.com/88/tag.min.js"
          data-zone="118765"
          async
          data-cfasync="false"
        ></script>
        <meta name="monetag" content="b5ead84b3bbf0975bfd1279582b8b44c" />
      </Head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
