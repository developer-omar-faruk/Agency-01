import { useEffect } from 'react';
import Navbar from './components/Nav'
import Hero from './components/Hero';



export default function App() {
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      <Navbar />
      <Hero/>

    </div>
  );
}
