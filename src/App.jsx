import { useEffect } from 'react';
import Navbar from './components/Nav'
import Hero from './components/Hero';
import ClientsMarquee from './components/ClientsMarquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';



export default function App() {
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      <Navbar />
      <Hero/>
      <ClientsMarquee/>
      <Services/>
      <Portfolio/>
      <Process/>
      <Testimonials/>
      <FAQ/>
      <Contact/>

    </div>
  );
}
