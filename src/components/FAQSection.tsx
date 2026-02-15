import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Сколько длится консультация?',
    answer: 'Стандартная консультация длится 60-90 минут. За это время мы успеваем разобрать конкретную ситуацию, выявить паттерны поведения и наметить план действий. Для сложных случаев может потребоваться серия встреч.'
  },
  {
    question: 'В каком формате проходит разбор?',
    answer: 'Работаем удаленно через видеосвязь (Zoom, Google Meet или Telegram). Это позволяет работать из любой точки мира в комфортной для тебя обстановке. Также возможны личные встречи по договоренности.'
  },
  {
    question: 'Нужна ли предварительная подготовка?',
    answer: 'Желательно заранее сформулировать запрос: что конкретно не работает в твоих отношениях или взаимодействии. Можешь подготовить примеры ситуаций, которые хочешь разобрать. Это поможет использовать время максимально эффективно.'
  },
  {
    question: 'Какие методы используются?',
    answer: 'В основе — этологический подход и эволюционная психология. Разбираем поведение через биологические механизмы: иерархию, территориальность, сигналы доминирования и подчинения. Используем когнитивно-поведенческие техники для изменения реакций. Никакой эзотерики — только прикладная наука.'
  },
  {
    question: 'Сколько стоит консультация?',
    answer: 'Стоимость первичной консультации — от 5000₽. Точная цена зависит от сложности запроса и формата работы. Обсуждаем индивидуально после предварительного разговора. Возможна оплата пакетами со скидкой.'
  },
  {
    question: 'Как происходит запись?',
    answer: 'Оставь заявку через форму на сайте или напиши напрямую в Telegram/WhatsApp. Я свяжусь в течение 24 часов, обсудим твой запрос и подберем удобное время для консультации. Предоплата 50% для подтверждения записи.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Частые вопросы
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Ответы на основные вопросы о формате работы
          </p>
          <div className="w-20 h-2 bg-lime-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-2 border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-colors"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-black pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-lime-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 font-medium leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
