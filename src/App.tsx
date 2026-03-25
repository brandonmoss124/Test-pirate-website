/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Anchor, Compass, Map, Skull, Sword, Waves } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F27D26] font-sans selection:bg-[#F27D26] selection:text-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter uppercase">
          <Skull className="w-8 h-8" />
          <span>Pirate's Cove</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity">The Fleet</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Treasure Maps</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Bounty</a>
          <a href="#" className="hover:opacity-100 transition-opacity">The Code</a>
        </div>
        <button className="border border-[#F27D26] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-[#050505] transition-all">
          Join the Crew
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 2, y: -100, skewX: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0, skewX: -10 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-50 mb-4 block">
            Est. 1720 — The Golden Age
          </span>
          <h1 className="text-[18vw] leading-[0.82] font-black uppercase tracking-tighter select-none">
            Dead Men<br />Tell No Tales
          </h1>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-20 -left-20 opacity-10"
          >
            <Compass className="w-[600px] h-[600px]" />
          </motion.div>
          
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent z-0" />
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 opacity-20"
          >
            <Anchor className="w-64 h-64" />
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6 group">
          <div className="w-12 h-12 border border-[#F27D26] flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] group-hover:text-[#050505] transition-colors">
            <Map className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">Uncharted Maps</h3>
          <p className="text-sm leading-relaxed opacity-70">
            Discover islands lost to time. Our cartographers have charted the most dangerous waters to bring you the ultimate treasure hunt.
          </p>
        </div>

        <div className="space-y-6 group">
          <div className="w-12 h-12 border border-[#F27D26] flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] group-hover:text-[#050505] transition-colors">
            <Sword className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">The Duelists</h3>
          <p className="text-sm leading-relaxed opacity-70">
            Master the blade with the finest swashbucklers in the Caribbean. Honor is for the weak; victory is for the bold.
          </p>
        </div>

        <div className="space-y-6 group">
          <div className="w-12 h-12 border border-[#F27D26] flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] group-hover:text-[#050505] transition-colors">
            <Waves className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">The Seven Seas</h3>
          <p className="text-sm leading-relaxed opacity-70">
            From the Tortuga to the edge of the world, our fleet dominates the horizon. No merchant ship is safe from our cannons.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 border-t border-[#F27D26]/20 text-center">
        <div className="flex justify-center gap-8 mb-8 opacity-50">
          <Skull className="w-6 h-6" />
          <Anchor className="w-6 h-6" />
          <Compass className="w-6 h-6" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
          &copy; 1720 Pirate's Cove — All Rights Reserved by the Brethren
        </p>
      </footer>
    </div>
  );
}

