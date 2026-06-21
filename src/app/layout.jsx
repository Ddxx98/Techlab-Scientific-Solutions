import "../index.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Poppins, Orbitron } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const chromia = localFont({
  src: "../../public/Chromia.otf",
  variable: "--font-chromia",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://techlabscientific.com"),
  title: "Techlab Scientific Solutions | Analytical & Lab Instruments Support",
  description: "Welcome to Techlab Scientific Solutions. We provide high-quality laboratory equipment and scientific solutions for research and industrial applications.",
  keywords: ["Techlab Scientific Solutions", "analytical instruments", "laboratory supplies", "scientific solutions", "research equipment", "Shimadzu service", "lab instrumentation"],
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Techlab Scientific Solutions | Analytical & Lab Instruments Support",
    description: "Welcome to Techlab Scientific Solutions. We provide high-quality laboratory equipment and scientific solutions for research and industrial applications.",
    url: "https://techlabscientific.com",
    siteName: "Techlab Scientific Solutions",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Techlab Scientific Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techlab Scientific Solutions | Analytical & Lab Instruments Support",
    description: "Welcome to Techlab Scientific Solutions. We provide high-quality laboratory equipment and scientific solutions for research and industrial applications.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable} ${chromia.variable}`}>
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="shortcut icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
