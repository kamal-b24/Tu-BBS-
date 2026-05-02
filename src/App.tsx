/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, Question } from './data/questions';
import { 
  Trophy, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Target, 
  BarChart3,
  Award,
  Zap,
  LayoutDashboard
} from 'lucide-react';

type GameState = 'START' | 'PLAYING' | 'PHASE_COMPLETED' | 'FINAL_RESULT';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('START');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');
  const [currentPhase, setCurrentPhase] = useState(1);
  const [phaseQuestionIndex, setPhaseQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [phaseScores, setPhaseScores] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const phaseQuestions = useMemo(() => {
    let filtered = questions.filter(q => q.phase === currentPhase);
    if (selectedSubjectFilter !== 'All') {
      filtered = filtered.filter(q => q.subject === selectedSubjectFilter);
    }
    // Limit to 20 questions per phase as requested
    return filtered.slice(0, 20);
  }, [currentPhase, selectedSubjectFilter]);

  const currentQuestion = phaseQuestions[phaseQuestionIndex];
  
  // Dynamic totals based on current configuration
  const totalQuestionsInSet = useMemo(() => {
    if (selectedSubjectFilter === 'All') {
      // 20 questions per phase * 3 phases = 60 questions total for the session
      // Wait, user said 20/20 per stage. If they play one subject, it's 20.
      // Let's just use the current phaseQuestions length * 3 for a full run
      return 20 * 3; 
    }
    return 20 * 3;
  }, [selectedSubjectFilter]);

  const globalIndex = ((currentPhase - 1) * 20) + phaseQuestionIndex + 1;
  const accuracy = correctCount > 0 ? (correctCount / (globalIndex - (selectedOption === null ? 1 : 0)) * 100).toFixed(1) : '100';

  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correct;

    if (isCorrect) {
      setFeedback('CORRECT');
      setScore(s => s + 10);
      setCorrectCount(c => c + 1);
      setPhaseScores(prev => ({ ...prev, [currentPhase]: prev[currentPhase] + 1 }));
      
      setTimeout(() => {
        nextQuestion();
      }, 600);
    } else {
      setFeedback('WRONG');
      setShowCorrect(true);
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback(null);
    setShowCorrect(false);

    if (phaseQuestionIndex < phaseQuestions.length - 1) {
      setPhaseQuestionIndex(p => p + 1);
    } else {
      setGameState('PHASE_COMPLETED');
    }
  };

  const startNextPhase = () => {
    if (currentPhase < 3) {
      setCurrentPhase(p => p + 1);
      setPhaseQuestionIndex(0);
      setGameState('PLAYING');
    } else {
      setGameState('FINAL_RESULT');
    }
  };

  const startGame = () => {
    setPhaseQuestionIndex(0);
    setScore(0);
    setCorrectCount(0);
    setPhaseScores({ 1: 0, 2: 0, 3: 0 });
    setGameState('PLAYING');
  };

  const restartGame = () => {
    setCurrentPhase(1);
    setSelectedSubjectFilter('All');
    setGameState('START');
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { label: 'A+', color: 'text-emerald-400' };
    if (percentage >= 80) return { label: 'A', color: 'text-emerald-500' };
    if (percentage >= 60) return { label: 'B', color: 'text-blue-400' };
    return { label: 'C', color: 'text-orange-400' };
  };

  const totalPercentage = (correctCount / totalQuestionsInSet) * 100;
  const grade = getGrade(totalPercentage);

  const subjects = [
    'All',
    'Entrepreneurship',
    'Business Strategy and Research',
    'Foundation of Corporate Finance',
    'Fundamentals of Investment',
    'Financial Institutions'
  ];

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-50 flex flex-col ${feedback === 'CORRECT' ? 'flash-green' : ''}`}>
      
      {/* Header */}
      {gameState === 'PLAYING' && (
        <header className="px-6 md:px-12 py-6 bg-slate-800 border-b border-slate-700">
          <div className="max-w-[850px] mx-auto flex justify-between items-center">
            <button 
              onClick={restartGame}
              className="mr-6 p-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
              title="Home"
            >
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <div className="flex-1 mr-8">
              <h1 className="text-lg md:text-xl font-bold text-slate-100 mb-2 truncate">
                {selectedSubjectFilter === 'All' ? 'BBS 4th Year: Full Syllabus' : selectedSubjectFilter}
              </h1>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(globalIndex / totalQuestionsInSet) * 100}%` }}
                  className="h-full bg-linear-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 leading-none">{score}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1">Points</div>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1 flex items-center justify-center p-6 bg-slate-950">
        <AnimatePresence mode="wait">
          {/* START SCREEN */}
          {gameState === 'START' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-[850px] bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl relative"
            >
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                    BBS 4th Year Finance Major
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                    Choose Your <span className="text-blue-500">Battlefield</span>
                  </h2>
                </div>

                {/* Subject Selection */}
                <div className="mb-8">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 block">Select Subject</label>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {subjects.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setSelectedSubjectFilter(sub)}
                        className={`p-5 rounded-2xl border text-sm md:text-base font-bold text-left transition-all active:scale-[0.96] flex items-center justify-between ${
                          selectedSubjectFilter === sub 
                          ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/20' 
                          : 'bg-slate-900 border-slate-700 text-slate-400 md:hover:border-slate-500'
                        }`}
                      >
                        <span>{sub === 'All' ? 'Full Syllabus Multi-Mix' : sub}</span>
                        {selectedSubjectFilter === sub && <CheckCircle2 className="w-4 h-4 ml-2" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Phase/Level Selection */}
                <div className="mb-10">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 block">Difficulty Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: 1, n: 'Easy' },
                      { l: 2, n: 'Med' },
                      { l: 3, n: 'Hard' }
                    ].map((phase) => (
                      <button
                        key={phase.l}
                        onClick={() => setCurrentPhase(phase.l)}
                        className={`p-5 rounded-2xl border text-xs md:text-sm font-bold transition-all active:scale-[0.96] flex flex-col items-center justify-center gap-1 ${
                          currentPhase === phase.l 
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/20' 
                          : 'bg-slate-900 border-slate-700 text-slate-400 md:hover:border-slate-500'
                        }`}
                      >
                        <span className="opacity-60 text-[10px] uppercase">Lvl</span>
                        {phase.n}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={startGame}
                    className="bg-white text-slate-900 font-black px-12 py-5 rounded-2xl transition-all shadow-xl active:scale-95 text-lg w-full md:w-auto flex items-center justify-center gap-3"
                  >
                    <Zap className="w-5 h-5 fill-current" />
                    Start Examination
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* PLAYING SCREEN */}
          {gameState === 'PLAYING' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-[850px]"
            >
              <div className="bg-slate-800 p-6 md:p-12 rounded-2xl border border-slate-700 shadow-2xl relative">
                <div className="absolute -top-[15px] left-6 md:left-10 px-3 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[2px] rounded-full shadow-lg border border-blue-400 shadow-blue-600/20">
                  Phase {currentPhase}: {currentPhase === 1 ? 'Easy' : currentPhase === 2 ? 'Medium' : 'Hard'}
                </div>

                <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 block">
                  {currentQuestion?.subject}
                </span>

                <motion.h3 
                  key={currentQuestion?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-3xl font-semibold leading-snug mb-8 md:mb-10 text-slate-100"
                >
                  {currentQuestion?.question}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                  {currentQuestion?.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion?.correct;
                    const label = ['A', 'B', 'C', 'D'][idx];

                    let btnStyles = "bg-slate-700 border-slate-600 active:scale-[0.98] md:hover:bg-slate-600 md:hover:translate-y-[-2px]";
                    if (selectedOption !== null) {
                      if (isCorrect && (isSelected || showCorrect)) {
                        btnStyles = "bg-emerald-900/50 border-emerald-500 ring-2 ring-emerald-500/20";
                      } else if (isSelected && !isCorrect) {
                        btnStyles = "bg-red-900/50 border-red-500 ring-2 ring-red-500/20";
                      } else {
                        btnStyles = "bg-slate-800 border-slate-700 opacity-40";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={selectedOption !== null}
                        onClick={() => handleOptionClick(idx)}
                        className={`flex items-center p-4 md:p-5 rounded-xl md:rounded-2xl border text-left transition-all duration-200 group w-full ${btnStyles}`}
                      >
                        <span className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center font-bold text-xs md:text-sm shrink-0 mr-3 md:mr-4 transition-colors ${
                          isSelected ? (isCorrect ? 'bg-emerald-500 text-emerald-900' : 'bg-red-500 text-white') : 'bg-slate-900 text-blue-500 md:group-hover:bg-slate-800'
                        }`}>
                          {label}
                        </span>
                        <span className="text-sm md:text-base font-medium leading-tight">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* PHASE COMPLETED SCREEN */}
          {gameState === 'PHASE_COMPLETED' && (
            <motion.div 
              key="phase-result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-[850px] bg-slate-800 p-12 rounded-2xl border border-slate-700 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <Trophy className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Phase {currentPhase} Cleared</h2>
              <p className="text-xl text-slate-400 mb-10">
                Phase Accuracy: <span className="text-emerald-400 font-bold">{Math.round((phaseScores[currentPhase]/phaseQuestions.length)*100)}%</span>
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button 
                  onClick={startNextPhase}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {currentPhase < 3 ? `Enter Phase ${currentPhase + 1}` : 'Final Scoreboard'}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={restartGame}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-10 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Home
                </button>
              </div>
            </motion.div>
          )}

          {/* FINAL RESULT SCREEN */}
          {gameState === 'FINAL_RESULT' && (
            <motion.div 
              key="final-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-[850px] bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl text-center"
            >
              <h2 className="text-5xl font-black mb-6">Course Finalized</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div className="p-10 bg-slate-900 rounded-3xl border border-slate-700">
                    <div className={`text-8xl font-black ${grade.color} mb-2`}>{grade.label}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Academic Ranking</div>
                 </div>
                 <div className="p-10 bg-slate-900 rounded-3xl border border-slate-700 flex flex-col justify-center">
                    <div className="text-5xl font-black text-white">{score}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">Total Points Earned</div>
                    <div className="text-2xl font-bold text-emerald-400">{Math.round(totalPercentage)}% Accuracy</div>
                 </div>
              </div>

              <button 
                onClick={restartGame}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12 py-4 rounded-xl transition-all flex items-center gap-3 mx-auto text-lg shadow-xl shadow-blue-600/20"
              >
                <RotateCcw className="w-5 h-5" />
                Change Selection / Retry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {(gameState === 'PLAYING' || gameState === 'START' || gameState === 'PHASE_COMPLETED' || gameState === 'FINAL_RESULT') && (
        <footer className="px-6 md:px-12 py-6 bg-slate-800 border-t border-slate-700 text-slate-400 text-xs font-medium">
          <div className="max-w-[850px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            
            <div className="flex flex-col items-center md:items-end w-full md:w-auto">
              <div className="font-bold tracking-tight text-[10px] md:text-xs text-slate-500 uppercase">
                MADE BY LEGEND <span className="text-blue-500 font-black text-sm ml-1">KAMAL BELBASE</span>
              </div>
              <div className="text-[10px] text-slate-600 mt-0.5 font-bold">
                Shankar (Gaire+Bhandari) are dumb
              </div>
            </div>

            {gameState !== 'START' && (
              <button 
                onClick={restartGame}
                className="w-full md:w-auto mt-4 md:mt-0 py-4 px-6 md:py-0 md:px-0 bg-slate-900 md:bg-transparent rounded-xl border border-slate-700 md:border-none text-blue-500 hover:text-blue-400 font-bold flex items-center justify-center gap-2 uppercase tracking-wide text-[10px] active:scale-95 transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                Return Home
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}
