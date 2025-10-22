
import './globals.css'

import { Outfit, Ovo } from "next/font/google";




const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const  ovo = Ovo({
  subsets : ["latin"],
  weight : ["400"]
});

export const metadata = {
  title: "X Lent Institute | English Speaking, Personality Development & Safety Courses in Padrauna",
  description:
    "X-Lent Institute is a leading educational center in Padrauna, offering English Speaking, Personality Development, Safety Courses, and Computer Training programs that help students build confidence, communication skills, and a successful career.",
  keywords: [
    "X-Lent Institute Padrauna",
    "xlent institute",
    "Xlent institute",
    "English Speaking Classes",
    "English Speaking ",
    "Personality Development",
    "Safety Courses",
    "Computer Training",
    "Computer Courses",
    "Spoken English Padrauna",
    "Communication Skills",
    "Career Development",
  ],
  authors: [{ name: "X-Lent Institute" }],
  creator: "X-Lent Institute",
  publisher: "X-Lent Institute",
  openGraph: {
    title: "X-Lent Institute Padrauna Kushinagar UP",
    description:
      "Join X-Lent Institute in Padrauna,for English Speaking, Personality Development, Safety, and Computer Courses. Empower your communication and career skills.",
    url: "https://xlentinstitute.com",
    siteName: "X-Lent Institute",
    // images: [
    //   {
    //     url: "/logo.png", 
    //     width: 800,
    //     height: 600,
    //     alt: "X-Lent Institute Logo",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
     icon: "/favicon.png",
  },
};



export default function RootLayout({children}) {
  return (
    <html lang="en" className='scroll-smooth '>
      <body
        className ={`${outfit.className} ${ovo.className}
         antialiased leading-8 overflow-x-hidden dark:bg-[#11001F] 
         dark:text-white 
         `}
      >
        {children}
      </body>
    </html>
  );
}
