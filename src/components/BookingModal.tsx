import React, { useState } from 'react';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GOOGLE_FORM } from '../constants/contacts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  /**
   * Handles form submission to Google Forms
   * Uses 'no-cors' mode as Google Forms doesn't allow CORS from external domains
   * This means we can't read the response, but the form data is still submitted
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Create FormData object for Google Forms submission
      const submitData = new FormData();
      submitData.append(GOOGLE_FORM.fields.name, formData.name);
      submitData.append(GOOGLE_FORM.fields.contact, formData.contact);
      
      // Submit to Google Forms
      // Note: Using 'no-cors' mode because Google Forms doesn't allow CORS
      // This means we can't read the response, but submission still works
      await fetch(GOOGLE_FORM.url, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors'
      });
      
      // Since we can't read the response with 'no-cors', we assume success
      setIsSubmitted(true);
      
      // Log for debugging (remove in production)
      console.log('Form submitted:', formData);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Ошибка отправки. Попробуйте позже или свяжитесь напрямую.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    ЗАПИСЬ НА РАЗБОР
                  </h3>
                  <p className="text-slate-500 font-medium">
                    Оставь контакты. Я свяжусь в течение 24 часов для уточнения деталей.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Как обращаться
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="Имя"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-lime-500 rounded-xl px-5 py-4 font-bold outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Telegram / WhatsApp
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="@username или телефон"
                      value={formData.contact}
                      onChange={e => setFormData({...formData, contact: e.target.value})}
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-lime-500 rounded-xl px-5 py-4 font-bold outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-lime-500 hover:bg-lime-400 text-black font-black text-lg py-5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        ОТПРАВКА...
                      </>
                    ) : (
                      <>
                        ОТПРАВИТЬ ЗАЯВКУ
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Нажимая кнопку, ты соглашаешься с правилами обработки данных.
                  </p>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center space-y-6">
                <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6 text-lime-600">
                  <Check className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    ЗАЯВКА ПРИНЯТА
                  </h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    Я свяжусь с тобой в ближайшее время по указанным контактам.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  ЗАКРЫТЬ
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
