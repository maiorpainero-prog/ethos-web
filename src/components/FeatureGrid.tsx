import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Radio, ShieldAlert, Dna, ArrowDown } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      
      {/* Connecting Line from Hero - Adjusted to connect perfectly to the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-lime-200" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* New Psychological Hook Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl shadow-lime-100/50 relative overflow-visible">
            
            {/* Connector Plate - Positioned to catch the line */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-2 bg-lime-500 rounded-full shadow-lg shadow-lime-500/50" />
            
            <h3 className="text-2xl md:text-4xl font-black text-slate-800 leading-snug tracking-tight">
              «Тебя учили <span className="text-lime-600 underline decoration-4 decoration-lime-300 underline-offset-4">угождать</span>, <span className="text-lime-600 underline decoration-4 decoration-lime-300 underline-offset-4">уступать</span>, <span className="text-lime-600 underline decoration-4 decoration-lime-300 underline-offset-4">отдавать</span>, чтобы заслужить любовь.»
            </h3>
            <p className="mt-6 text-xl text-slate-500 font-medium">
              Ты можешь это понимать, но ничего не можешь с этим сделать. <br/>
              Потому что это не просто привычка, это — <span className="text-black font-bold">нейронная прошивка</span>.
            </p>
          </div>
        </motion.div>

        {/* Large Visible Animated Arrow */}
        <div className="flex flex-col items-center justify-center mb-24 relative z-10 h-32">
           <motion.div 
             initial={{ opacity: 0, height: 0 }}
             whileInView={{ opacity: 1, height: "100%" }}
             transition={{ duration: 1 }}
             className="w-1 bg-lime-200 h-full relative overflow-hidden rounded-full"
           >
             <motion.div 
               className="absolute top-0 left-0 w-full h-1/2 bg-lime-500"
               animate={{ top: ["-50%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
           </motion.div>
           <div className="p-2 bg-white rounded-full border-4 border-lime-100 text-lime-600 -mt-4 z-20 shadow-lg">
             <ArrowDown className="w-6 h-6 animate-bounce" strokeWidth={3} />
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-6">
              ЧТО БЛОКИРУЕТ <br/> <span className="text-lime-500">ТВОЮ ВОЛЮ?</span>
            </h2>
            <div className="h-2 w-24 bg-lime-500 rounded-full" />
          </div>
          <p className="text-slate-500 text-lg max-w-md font-medium text-right md:text-left">
            Многие ограничения существуют только в нашей голове. Но для мозга они реальнее бетонных стен.
          </p>
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#FAFAFA] rounded-[2rem] p-8 hover:shadow-xl hover:shadow-lime-100/50 transition-all duration-300 border border-slate-100 hover:border-lime-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black mb-8 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-7 h-7 group-hover:text-lime-600 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Избыточная адаптация</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Желание избежать конфликта часто приводит к тому, что ты соглашаешься на условия, которые тебе невыгодны.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#FAFAFA] rounded-[2rem] p-8 hover:shadow-xl hover:shadow-lime-100/50 transition-all duration-300 border border-slate-100 hover:border-lime-300 md:mt-12 group"
          >
             <div className="w-14 h-14 bg-lime-500 rounded-2xl flex items-center justify-center text-black mb-8 shadow-lg shadow-lime-500/30 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Зависимость от оценки</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Когда самооценка строится на одобрении окружающих, любое несогласие воспринимается болезненно.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#FAFAFA] rounded-[2rem] p-8 hover:shadow-xl hover:shadow-lime-100/50 transition-all duration-300 border border-slate-100 hover:border-lime-300 group"
          >
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black mb-8 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
              <Radio className="w-7 h-7 group-hover:text-lime-600 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Накопленное напряжение</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Подавление эмоций не решает проблему, а консервирует её. Рано или поздно это приводит к срывам.
            </p>
          </motion.div>

          {/* Large Wide Card */}
          <motion.div 
            whileHover={{ scale: 1.005 }}
            className="md:col-span-3 bg-[#111] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden mt-6 border border-slate-800"
          >
            {/* Neural Mesh Background */}
            <div className="absolute inset-0 opacity-20">
               <svg className="w-full h-full">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <motion.circle cx="80%" cy="50%" r="100" fill="url(#grad1)" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
                  <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" style={{ stopColor: '#84cc16', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
                    </radialGradient>
                  </defs>
               </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-lime-400 text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
                  <Dna className="w-4 h-4" />
                  <span>Решение</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">Системный подход</h3>
                <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-medium">
                  Мы заменим хаотичные реакции на осознанную стратегию. Ты научишься считывать ситуацию и выбирать оптимальный сценарий поведения.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                 <button className="bg-lime-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 transition-colors shadow-[0_0_20px_rgba(132,204,22,0.3)]">
                   Узнать подробнее
                 </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
