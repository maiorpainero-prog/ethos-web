import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Layers, Activity } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 -right-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
         <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-lime-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="mb-20 text-center md:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6"
                >
                  <AlertTriangle className="w-3 h-3" />
                  <span>Ошибка адаптации</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black text-black leading-tight mb-8"
                >
                  ТЫ ПРОБОВАЛ МЕНЯТЬСЯ, <br/>
                  <span className="text-slate-300">НО СТРАХ ОСТАВАЛСЯ?</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-slate-600 leading-relaxed font-medium"
                    >
                      <p className="mb-6">
                        Ты учил скрипты общения, пытался выглядеть уверенно, копировал поведение успешных людей. 
                        В моменте это могло работать, но внутри тебя все равно сжимала тревога.
                      </p>
                      <p>
                        Голос дрожал, ладони потели, а мозг лихорадочно искал «правильный» ответ. 
                        Это происходило потому, что ты пытался переписать программу поведения, не изменив 
                        <span className="text-black font-bold bg-lime-200/50 px-1 rounded mx-1">операционную систему</span>.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Layers size={80} />
                        </div>
                        
                        <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                            <Activity className="text-lime-500" />
                            БАЗОВЫЕ СОСТОЯНИЯ
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Это гормональный и нейробиологический фундамент. Пока твоя амигдала (центр страха) 
                            сигналит об опасности, никакие «техники общения» не сработают.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100 opacity-50 grayscale">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="font-semibold text-slate-400">Внешнее поведение (Скрипты)</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100 opacity-70 grayscale">
                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                <span className="font-semibold text-slate-500">Убеждения и установки</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-black text-white rounded-xl shadow-lg shadow-lime-500/20 transform scale-105">
                                <div className="w-3 h-3 rounded-full bg-lime-500 animate-pulse" />
                                <span className="font-bold tracking-wide">БАЗОВОЕ СОСТОЯНИЕ (ИНСТИНКТЫ)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
