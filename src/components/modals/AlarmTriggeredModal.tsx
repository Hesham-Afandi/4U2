import React from 'react';

interface AlarmTriggeredModalProps {
  isOpen: boolean;
  onClose: () => void;
  dailyReminderTime: string;
  dailyReminderMsg: string;
  goHome: () => void;
  showToastMsg: (msg: string) => void;
}

export const AlarmTriggeredModal: React.FC<AlarmTriggeredModalProps> = ({
  isOpen,
  onClose,
  dailyReminderTime,
  dailyReminderMsg,
  goHome,
  showToastMsg,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-8 shadow-2xl border-4 border-indigo-500 dark:border-indigo-600 text-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsing ring graphic background */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full animate-ping pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full animate-ping pointer-events-none" />

        <div className="text-6xl mb-4 select-none animate-bounce inline-block">🔔</div>
        
        <h3 className="text-2xl font-black text-indigo-900 dark:text-indigo-400 mb-2">منبه المذاكرة اليومي! ⏰</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 font-bold">الوقت الحالي: {dailyReminderTime}</p>

        <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800 p-5 rounded-2xl mb-6">
          <p className="text-sm font-black text-gray-800 dark:text-slate-100 leading-relaxed italic">
            "{dailyReminderMsg}"
          </p>
        </div>

        <div className="space-y-3">
          <button 
            onClick={() => {
              onClose();
              goHome();
              showToastMsg('🚀 بالتوفيق! ابدأ جلسة دراسة مميزة الآن');
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-2xl transition shadow-lg transform hover:scale-[1.02] cursor-pointer"
          >
            📖 البدء بالدراسة الآن!
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 py-2.5 rounded-2xl font-bold transition text-xs cursor-pointer"
          >
            تذكيري لاحقاً (إغلاق التنبيه)
          </button>
        </div>
      </div>
    </div>
  );
};
