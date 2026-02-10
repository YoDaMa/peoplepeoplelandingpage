import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import AppShowcase from "../components/AppShowcase";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <AppShowcase />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
