import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";

// Homepage: pure composition, no styling/logic here — each section owns its own.
export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Services />

        {/* Process */}
        <Process />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}