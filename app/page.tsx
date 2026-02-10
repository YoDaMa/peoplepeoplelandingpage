import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppShowcase from "../components/AppShowcase";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
