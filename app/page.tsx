import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppShowcase from "../components/AppShowcase";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
