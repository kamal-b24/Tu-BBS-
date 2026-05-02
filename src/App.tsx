
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-8 text-center font-sans selection:bg-red-500/30">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-400">
          I'm <span className="text-red-600 font-black bg-red-600/10 px-3 rounded-2xl border border-red-600/20 shadow-[0_0_40px_rgba(220,38,38,0.1)]">Bhandari</span> who Never appreciate Best work of <span className="text-blue-500 font-black underline decoration-blue-500/40 italic decoration-4 underline-offset-8">Kamal</span>
        </h1>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="h-px w-20 bg-slate-800"></div>
          <p className="text-slate-600 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
            Truth Witnessed & Verified
          </p>
          <div className="h-px w-20 bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
}
