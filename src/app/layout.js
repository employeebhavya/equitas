import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import LogoHeader from "./components/LogoHeader";
import MainHeader from "./components/MainHeader";
import TopBar from "./components/TopBar";
import "./globals.css";

export const metadata = {
  title: "Equitas Hospital",
  description: "The Most Affordable Cancer cum Multi Specialty Hospital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        <TopBar />
        <LogoHeader />
        <MainHeader />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
