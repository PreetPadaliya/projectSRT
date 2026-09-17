import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Reviews from "@/components/sections/Reviews";
import AboutPage from "@/components/pages/AboutPage";
import MenuPage from "@/components/pages/MenuPage";
import GalleryPage from "@/components/pages/GalleryPage";
import ReviewsPage from "@/components/pages/ReviewsPage";
import ContactPage from "@/components/pages/ContactPage";

const pages = {
  "/about": AboutPage,
  "/menu": MenuPage,
  "/gallery": GalleryPage,
  "/reviews": ReviewsPage,
  "/contact": ContactPage,
};

function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
      <div>
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-primary">
          This page does not exist
        </h1>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium text-white shadow-card"
        >
          Return home
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageContent />
      </main>
      <Footer />
    </div>
  );
}

function PageContent() {
  const Page = pages[window.location.pathname];

  if (window.location.pathname === "/") {
    return (
      <>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Contact />
      </>
    );
  }

  return Page ? <Page /> : <NotFound />;
}
