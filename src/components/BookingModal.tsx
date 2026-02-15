import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
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
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 bg-white/90 backdrop-blur-sm"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <div className="w-full h-[600px] md:h-[700px]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdq3hF-58atqLueljtso8ofawh7_-OF_uMxQHulSBqoGINT3A/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-full"
                title="Форма записи на консультацию"
              >
                Загрузка…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
