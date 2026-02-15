import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { MethodologySection } from './components/MethodologySection';
import { Section } from './components/Section';
import { FeatureGrid } from './components/FeatureGrid';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { ArrowUpRight, Zap, Send, Mail, Instagram, MessageCircle } from 'lucide-react';
import { CONTACTS } from './constants/contacts';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-lime-300 selection:text-black">
      
      <Hero onCtaClick={() => setIsModalOpen(true)} />

      <ProblemSection />

      <MethodologySection />

      <FeatureGrid />

      <Section 
        title="Иллюзия безопасности"
        subtitle="Анализ стратегии"
        description="Быть «удобным» кажется безопасным — так меньше рисков столкнуться с агрессией. Но в долгосрочной перспективе эта стратегия проигрышна. Окружающие считывают твою готовность уступать и перестают учитывать твои интересы."
        features={[
          "Страх отвержения и конфликта",
          "Постоянный поиск одобрения",
          "Отказ от собственных желаний"
        ]}
      />

      <Section 
        title="Скрытые сигналы"
        subtitle="Невербалика"
        description="Уверенность — это не то, что ты говоришь, а то, как ты это транслируешь. Микровыражения, поза, интонации выдают твое внутреннее состояние быстрее, чем ты успеваешь открыть рот. Работать нужно не над словами, а над состоянием."
        reverse={true}
        features={[
          "Мимика и зрительный контакт",
          "Закрытые позы и сутулость",
          "Неуверенный тон голоса"
        ]}
      />

      <AboutSection />

      <FAQSection />

      <TestimonialsSection />

      {/* Modern Acid CTA */}
      <div className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-black rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden text-white ring-1 ring-slate-100 shadow-2xl">
            
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-500/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-900/40 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-block mb-6 p-3 bg-lime-500 rounded-2xl rotate-3 shadow-[0_0_15px_rgba(132,204,22,0.5)]">
                 <Zap className="w-8 h-8 text-black" fill="black" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                Переходи на <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200 italic">новый уровень</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
                Построй персональную стратегию социального взаимодействия. <br/>Запишись на разбор ситуации.
              </p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 px-12 py-6 bg-lime-500 text-black rounded-full font-black text-xl hover:bg-lime-400 transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(132,204,22,0.4)]"
              >
                ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-16 text-slate-500 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="font-black text-black text-2xl tracking-tighter flex items-center gap-1 mb-4">
                <div className="w-2 h-2 bg-lime-500" />
                ETHOS.
              </div>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                Консультации по этологии и психологии отношений. Построй персональную стратегию социального взаимодействия.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-black text-sm uppercase tracking-wider mb-4">
                Контакты
              </h3>
              <div className="space-y-3">
                <a 
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-lime-600 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  {CONTACTS.email}
                </a>
                <a 
                  href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-lime-600 transition-colors font-medium"
                >
                  <Send className="w-5 h-5" />
                  {CONTACTS.telegram}
                </a>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-lime-600 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="font-bold text-black text-sm uppercase tracking-wider mb-4">
                Социальные сети
              </h3>
              <div className="space-y-3 mb-6">
                <a 
                  href={`https://instagram.com/${CONTACTS.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-lime-600 transition-colors font-medium"
                >
                  <Instagram className="w-5 h-5" />
                  {CONTACTS.instagram}
                </a>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <a 
                  href="#privacy"
                  className="text-sm text-slate-500 hover:text-lime-600 transition-colors font-medium"
                >
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 text-center text-slate-400 font-medium text-sm">
            © 2026 Александр Гришин. Все права защищены.
          </div>
        </div>
      </footer>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
