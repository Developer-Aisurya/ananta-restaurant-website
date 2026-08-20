import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import PageTransition from "./PageTransition";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <div className="grain-overlay" />
      <Navbar />
      <PageTransition>
        <main id="main-content">{children}</main>
      </PageTransition>
      <Footer />
      <BackToTop />
    </div>
  );
}
