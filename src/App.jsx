import { useEffect } from 'react';
import Navbar from './components/Nav'



export default function App() {
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      <Navbar />

    </div>
  );
}
