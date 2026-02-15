import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, Unlock, BrainCircuit } from 'lucide-react';

const StepCard = ({ icon: Icon, number, title, text, index }: { icon: any, number: string, title: string, text: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative group"
  >
    <div className="absolute top-8 left-8 w-px h-24 bg-slate-200 -z-10 last:hidden md:block hidden" />
    
    <div className="bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/10 hover:-translate-y-1 h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-black group-hover:text-lime-400 transition-colors">
          <Icon size={24} />
        </div>
        <span className="text-4xl font-black text-slate-100">{number}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{text}</p>
    </div>
  </motion.div>
);

export const MethodologySection: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-100 text-lime-700 text-xs font-bold uppercase tracking-wider mb-6">
                <BrainCircuit className="w-4 h-4" />
                <span>Нейропластичность</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-black leading-[1] mb-6 tracking-tight">
                ПЕРЕПРОШИВКА <br/>
                <span className="text-slate-400">СИСТЕМЫ БЕЗОПАСНОСТИ</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                Твой мозг не сломан. Он просто <span className="text-black font-bold">слишком хорошо тебя защищает</span>. 
                Древние структуры мозга (амигдала) воспринимают социальный риск как угрозу жизни, запуская реакцию "замри" или "беги".
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Мы работаем напрямую с системой безопасности мозга. Ты научишься перехватывать автоматический сигнал тревоги и заменять привычный паттерн страха на спокойную реакцию исследователя.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
               {/* Decorative Abstract Visualization of Rewiring */}
               <div className="aspect-square rounded-[3rem] bg-slate-50 border border-slate-100 p-8 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.15),transparent_50%)]" />
                  
                  {/* Neural Pathways Animation */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <motion.path 
                      d="M 50 350 C 150 350, 150 50, 350 50" 
                      fill="none" 
                      stroke="#e2e8f0" 
                      strokeWidth="4" 
                    />
                    <motion.path 
                      d="M 50 350 C 150 350, 150 50, 350 50" 
                      fill="none" 
                      stroke="#84cc16" 
                      strokeWidth="4" 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Pulsing Nodes */}
                    <circle cx="50" cy="350" r="8" className="fill-slate-300" />
                    <circle cx="350" cy="50" r="8" className="fill-lime-500" />
                  </svg>

                  <div className="relative z-10 text-center">
                    <div className="bg-white px-6 py-3 rounded-xl shadow-lg border border-slate-100 mb-12 inline-block transform -rotate-6">
                      <span className="text-red-400 font-bold line-through decoration-2 text-sm">Страх / Ступор</span>
                    </div>
                    <div className="block"></div>
                    <div className="bg-black text-lime-400 px-8 py-4 rounded-xl shadow-xl shadow-lime-500/20 inline-block transform rotate-3">
                      <span className="font-black tracking-wide text-lg">СПОКОЙСТВИЕ / ДЕЙСТВИЕ</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <StepCard 
              number="01"
              icon={ShieldCheck}
              title="Снятие тревоги"
              text="Учимся успокаивать 'систему безопасности', доказывая мозгу, что ситуация безопасна."
              index={0}
            />
            <StepCard 
              number="02"
              icon={Unlock}
              title="Разрыв шаблона"
              text="Останавливаем автоматическую реакцию 'угодить' или 'сбежать' в момент её появления."
              index={1}
            />
            <StepCard 
              number="03"
              icon={RefreshCw}
              title="Новый рефлекс"
              text="Закрепляем нейронную связь: «Я проявляю себя = Я в безопасности и получаю ресурсы»."
              index={2}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
