import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Network, Dna, Activity, Lock, Eye } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  features?: string[];
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  reverse = false,
  features 
}) => {
  const isSafety = subtitle.includes("безопасности") || subtitle.includes("адаптация");
  const Icon = isSafety ? Lock : Eye;
  
  // Default features if none provided
  const displayFeatures = features || [
    "Автоматические реакции",
    "Гормональный отклик",
    "Закрепленные паттерны"
  ];

  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
          
          {/* Animated Neural Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center group">
               
               {/* Animated Neural Connections */}
               <div className="absolute inset-0 w-full h-full">
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                    {/* Neural Network Nodes */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={`${20 + i * 15}%`}
                        cy={`${20 + (i % 2) * 60}%`}
                        r="3"
                        fill="#84cc16"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2 + i, repeat: Infinity }}
                      />
                    ))}
                    
                    {/* Connecting Lines */}
                    <motion.path
                      d="M 20% 20% L 35% 80% L 50% 20% L 65% 80% L 80% 20%"
                      fill="none"
                      stroke="#84cc16"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Animated Pulses on Lines */}
                    <motion.circle 
                       r="4" 
                       fill="#84cc16"
                       className="blur-[2px]"
                    >
                      <animateMotion 
                        path="M 20 20 L 35 80 L 50 20 L 65 80 L 80 20"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                  </svg>
                  
                  {/* Glowing Core */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full ${isSafety ? 'bg-lime-200/30' : 'bg-slate-200/30'} blur-3xl`} 
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
               </div>

               {/* Central Icon */}
               <motion.div 
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 ring-1 ring-slate-50"
               >
                  <Icon className={`w-16 h-16 ${isSafety ? 'text-lime-500' : 'text-black'}`} strokeWidth={1.5} />
               </motion.div>
               
               {/* Data Stream Particles */}
               <div className="absolute inset-0 w-full h-full pointer-events-none">
                 {Array.from({ length: 3 }).map((_, i) => (
                   <motion.div
                     key={`particle-${i}`}
                     className="absolute w-1.5 h-1.5 bg-lime-500 rounded-full"
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ 
                       opacity: [0, 1, 0],
                       scale: [0, 1.5, 0],
                       x: [0, (Math.random() - 0.5) * 200],
                       y: [0, (Math.random() - 0.5) * 200]
                     }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                     style={{ left: '50%', top: '50%' }}
                   />
                 ))}
               </div>

            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-lime-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{subtitle}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8 tracking-tighter uppercase">
              {title}
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {displayFeatures.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-slate-800 font-bold"
                >
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="absolute inset-0 bg-lime-100 rounded-lg transform rotate-45" />
                    <Dna className="w-4 h-4 text-lime-600 relative z-10" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <button className="flex items-center gap-3 text-black font-bold uppercase tracking-wider hover:gap-6 transition-all group">
              Подробнее <ArrowRight className="w-5 h-5 text-lime-500 group-hover:text-black transition-colors" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
