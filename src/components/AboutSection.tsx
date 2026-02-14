import React from 'react';
import userPhoto from 'figma:asset/6f3ae8b915504a58c320800c7fbff125ddb3e7c9.png';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor - very subtle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">
            Кто ведет?
          </h2>
          <div className="w-20 h-2 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/3">
             {/* Avatar Area */}
            <div className="aspect-[3/4] rounded-[2rem] bg-slate-50 border-2 border-slate-100 overflow-hidden relative group">
               <img 
                 src={userPhoto} 
                 alt="Александр Гришин"
                 className="w-full h-full object-cover transition-all duration-500"
               />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-black mb-2">Александр Гришин</h3>
            <p className="text-lime-600 font-bold uppercase tracking-wider text-sm mb-6">Консультант по социальным стратегиям</p>
            
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p>
                Более 9 лет я изучаю, как работает человеческая "стая". Я не психолог в классическом понимании. Я практик, который анализирует поведение через призму этологии и эволюционных механизмов.
              </p>
              <p>
                Мой подход лишен эзотерики и пустых обещаний "успешного успеха". Мы работаем с фактами: стимул — реакция — результат.
              </p>
              <p>
                 Я помогаю перенастроить ваши реакции так, чтобы они работали на вас, а не против вас.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#FAFAFA] p-4 rounded-xl border border-slate-100">
                <div className="text-3xl font-black text-black mb-1">9+</div>
                <div className="text-xs text-slate-400 font-bold uppercase">Лет практики</div>
              </div>
              <div className="bg-[#FAFAFA] p-4 rounded-xl border border-slate-100">
                <div className="text-3xl font-black text-black mb-1">200+</div>
                <div className="text-xs text-slate-400 font-bold uppercase">Кейсов</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
