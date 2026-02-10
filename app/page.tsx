import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import CommunityImage from "../components/CommunityImage";
import AppShowcase from "../components/AppShowcase";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar showBanner />
      <main>
        <Hero />
        <Mission />
        <CommunityImage />
        <AppShowcase />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
