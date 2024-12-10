

import "./globals.css";
import { Poppins } from "next/font/google";
// import Head from "next/head";


const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "500", "600", "700"],
display: "swap",
});

export const metadata = {
title: "Someone Special has a surprise for youuu!",
description: "Take this chance to see what they have for you!!!",
icons: {
    icon: "/logo.png",
},
};

export default function RootLayout({ children }) {

return (
<html lang="en">
<head>
{/* Add monetag script and meta tag */}
<script
    dangerouslySetInnerHTML={{
            __html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('cimtaiphos.com',8634107,document.createElement('script'))`,
    }}
/>
{/* <script
    dangerouslySetInnerHTML={{
            __html: ``,
    }}
/> */}

<meta name="monetag" content="b5ead84b3bbf0975bfd1279582b8b44c" />
</head>

<body className={poppins.className}>
{children}
</body>

</html>

);

}
