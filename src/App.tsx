
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronRight, ArrowLeft } from "lucide-react";

export default function App() {
  const [view, setView] = useState<'home' | 'message'>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-6 md:p-12 font-sans selection:bg-blue-500/30 overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter text-slate-400 mb-12">
              I'm <span className="text-red-600 font-black bg-red-600/10 px-4 rounded-xl border border-red-600/20 shadow-[0_0_50px_rgba(220,38,38,0.15)] inline-block mb-2">Bhandari</span> <br className="hidden md:block" />
              who Never appreciate Best work of <span className="text-emerald-400 font-black underline decoration-emerald-500/40 decoration-4 underline-offset-8">Kamal</span>
            </h1>

            <button 
              onClick={() => setView('message')}
              className="group relative inline-flex items-center gap-3 bg-white text-slate-950 font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Go To Page
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="message"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            {/* Back Button */}
            <button 
              onClick={() => setView('home')}
              className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors uppercase text-[10px] font-black tracking-widest"
            >
              <ArrowLeft className="w-3 h-3" />
              Back
            </button>

            {/* The Message Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden group"
            >
              <Quote className="absolute -top-10 -right-10 w-48 h-48 text-slate-800 opacity-20 -rotate-12 transition-transform group-hover:rotate-0 duration-700" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-slate-300 leading-relaxed md:leading-loose text-justify md:text-center">
                  "Having a friend like <span className="text-emerald-400 font-black">Kamal</span> is a God's gift. The faster you understand, the faster you grow in life. The more jealous you are, the more powerful he becomes. One day he will rule the world of <span className="text-blue-500 font-black uppercase tracking-tighter">AI and Intelligence</span>, and at that time you are going to regret having this behavior. Accept the truth: the predictions of <span className="text-emerald-400 font-black">Kamal</span> were never wrong, and they never will be."
                </p>
              </div>
            </motion.div>

            {/* Footer / Signature */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 md:mt-16 text-center"
            >
              <div className="h-px w-32 bg-linear-to-r from-transparent via-slate-800 to-transparent mx-auto mb-8"></div>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.6em] font-medium mb-4">
                Forever Recorded
              </p>
              
              <div className="inline-block p-1 bg-linear-to-r from-blue-600 via-emerald-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/10">
                <div className="bg-slate-950 px-8 py-4 rounded-full">
                  <span className="text-white font-black text-lg md:text-xl tracking-tight">
                    Love from <span className="text-emerald-400 uppercase">KAMAL BELBASE</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


