import React from 'react';

interface ReminderSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  dailyReminderTime: string;
  dailyReminderActive: boolean;
  dailyReminderMsg: string;
  updateReminderSettings: (time: string, active: boolean, msg: string) => void;
  showToastMsg: (msg: string) => void;
}

export const ReminderSettingModal: React.FC<ReminderSettingModalProps> = ({
  isOpen,
  onClose,
  dailyReminderTime,
  dailyReminderActive,
  dailyReminderMsg,
  updateReminderSettings,
  showToastMsg,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-950 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>🔔</span> ضبط المنبه والتذكير اليومي
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        <div className="space-y-4 text-right">
          {/* Toggle Switch */}
          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-right">
              <span className="font-extrabold text-sm block text-gray-800 dark:text-slate-200">تفعيل التذكير التلقائي</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">سيرسل التطبيق تنبيهاً ذكياً عندما يحين الوقت المختار</span>
            </div>
            <input 
              type="checkbox" 
              checked={dailyReminderActive}
              onChange={(e) => updateReminderSettings(dailyReminderTime, e.target.checked, dailyReminderMsg)}
              className="w-10 h-6 bg-slate-200 rounded-full appearance-none checked:bg-indigo-600 relative transition-colors duration-300 cursor-pointer before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:right-0.5 checked:before:translate-x-[-16px] before:transition-transform before:duration-300 shadow-sm"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-xs font-black text-gray-700 dark:text-gray-300 mb-2">اختر وقت التنبيه اليومي:</label>
            <input 
              type="time" 
              value={dailyReminderTime}
              onChange={(e) => updateReminderSettings(e.target.value, dailyReminderActive, dailyReminderMsg)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-gray-800 dark:text-white font-mono font-black text-center text-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Message text */}
          <div>
            <label className="block text-xs font-black text-gray-700 dark:text-gray-300 mb-2">رسالة التحفيز المخصصة:</label>
            <input 
              type="text" 
              value={dailyReminderMsg}
              onChange={(e) => updateReminderSettings(dailyReminderTime, dailyReminderActive, e.target.value)}
              placeholder="مثال: حان وقت المذاكرة اليومية والتحصيل للوصول للقمة! 🚀"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 text-right"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
          <button 
            onClick={() => {
              showToastMsg('💾 تم حفظ إعدادات التذكير اليومي بنجاح');
              onClose();
            }}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition shadow-md cursor-pointer"
          >
            تم وحفظ الإعدادات
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
