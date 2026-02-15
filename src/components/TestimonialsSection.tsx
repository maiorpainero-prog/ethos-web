import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  problem: string;
  result: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Дмитрий, 32 года',
    problem: 'Постоянно избегал конфликтов на работе, соглашался на невыгодные условия.',
    result: 'Научился отстаивать границы без агрессии. За 2 месяца получил повышение и уважение коллег. Просто изменил невербальные сигналы и перестал извиняться за свои решения.',
    avatar: 'https://ui-avatars.com/api/?name=DM&background=84cc16&color=000&size=120&bold=true'
  },
  {
    name: 'Анна, 28 лет',
    problem: 'В отношениях постоянно играла роль "спасателя", притягивала инфантильных партнеров.',
    result: 'Разобрали мой паттерн поведения. Поняла, что сама создаю динамику "мать-ребенок". Изменила стратегию — сейчас в здоровых отношениях с равным партнером.',
    avatar: 'https://ui-avatars.com/api/?name=AN&background=84cc16&color=000&size=120&bold=true'
  },
  {
    name: 'Максим, 35 лет',
    problem: 'Боялся публичных выступлений, переживал из-за чужого мнения.',
    result: 'Проработали источник тревоги через иерархическую модель. Понял, что пытался угодить всем из-за страха исключения из "стаи". Теперь веду корпоративные тренинги и получаю от этого кайф.',
    avatar: 'https://ui-avatars.com/api/?name=MK&background=84cc16&color=000&size=120&bold=true'
  },
  {
    name: 'Елена, 41 год',
    problem: 'Не могла выстроить авторитет в команде, подчиненные игнорировали указания.',
    result: 'Изменили язык тела и тон голоса. Добавили четкость в коммуникации. За месяц ситуация развернулась на 180 градусов — команда начала реагировать и выполнять задачи вовремя.',
    avatar: 'https://ui-avatars.com/api/?name=EL&background=84cc16&color=000&size=120&bold=true'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Кейсы клиентов
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Реальные истории людей, которые изменили свою стратегию взаимодействия
          </p>
          <div className="w-20 h-2 bg-lime-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-lime-600" fill="currentColor" />
                </div>
              </div>

              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-lime-500"
                />
                <div>
                  <h3 className="font-black text-black text-lg">{testimonial.name}</h3>
                  <p className="text-xs text-lime-600 font-bold uppercase tracking-wider">Клиент</p>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Запрос:
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {testimonial.problem}
                </p>
              </div>

              {/* Result */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Результат:
                </h4>
                <p className="text-black font-bold leading-relaxed">
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
