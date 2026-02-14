import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Activity, Dna, Brain } from 'lucide-react';

const NeuralGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Radial Fade for Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
};

const FloatingParticles = () => {
  const particles = useMemo(() => Array.from({ length: 15 }), []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-lime-400 rounded-full opacity-40"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white">
      
      <NeuralGrid />
      <FloatingParticles />

      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-lime-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-100 text-lime-600">
                <Dna size={16} />
              </span>
              <span className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
                Ethology & Psychology
              </span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-black mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ЭВОЛЮЦИЯ
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 text-slate-300" // Lighter color for "doesn't love"
              >
                <span className="text-4xl md:text-6xl tracking-normal font-bold italic">не любит</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-800"
              >
                ПОСЛУШНЫХ
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-lime-400/60 -skew-x-12 -z-10" />
              </motion.div>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium mb-10 pl-6 border-l-4 border-lime-400"
            >
              Социум научил тебя быть «удобным»: гасить агрессию и искать одобрения. 
              С точки зрения биологии — это <span className="font-bold text-black">сигнал слабости</span>.
              <br className="hidden md:block" />
              <span className="mt-2 block text-slate-500 text-base">
                Перестань терять возможности и начни жить по правилам природы.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button onClick={onCtaClick} className="group relative px-8 py-4 bg-black text-white font-bold text-lg rounded-none overflow-hidden transition-all hover:bg-slate-900">
                <div className="absolute inset-0 w-0 bg-lime-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-100 mix-blend-difference" />
                <span className="relative flex items-center gap-3">
                  Записаться на консультацию
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center gap-3 px-6 py-4 border border-slate-200 bg-white/50 backdrop-blur-sm">
                <Activity className="w-5 h-5 text-lime-500" />
                <span className="text-sm font-semibold text-slate-800">
                  Места ограничены
                </span>
              </div>
            </motion.div>
          </div>

          {/* Abstract Brain Visualization */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] flex items-center justify-center">
             <motion.div style={{ y: y2, rotate: rotate }} className="relative w-full h-full flex items-center justify-center">
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <motion.div 
                     className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-slate-300 rounded-full"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                   />
                   <motion.div 
                     className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-dashed border-slate-400 rounded-full"
                     animate={{ rotate: -360 }}
                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   />
                </div>

                {/* Central Brain Element (Abstract) */}
                <motion.div 
                  className="relative z-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                   <Brain size={300} strokeWidth={0.5} className="text-slate-900 opacity-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Brain size={300} strokeWidth={1} className="text-lime-500 opacity-40 blur-md w-[200px] h-[200px] md:w-[400px] md:h-[400px]" />
                   </div>
                </motion.div>

                {/* Floating "Nodes" with labels */}
                {[
                  { label: "CORTISOL", x: "20%", y: "20%" },
                  { label: "DOPAMINE", x: "80%", y: "30%" },
                  { label: "SEROTONIN", x: "50%", y: "80%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white border border-slate-200 px-3 py-1 shadow-lg flex items-center gap-2"
                    style={{ left: item.x, top: item.y }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500">{item.label}</span>
                  </motion.div>
                ))}
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
