import React from 'react';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalRead: number;
    totalExams: number;
    totalTime: number;
    totalLessonsCount: number;
    completionRate: number;
  };
  onShowCertificate: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  stats,
  onShowCertificate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>📊</span> إحصائياتي الدراسية
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        {/* Grid of metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="gradient-primary text-white p-4 rounded-2xl text-center shadow-md">
            <span className="text-3xl block mb-1">📖</span>
            <span className="text-2xl font-black block">{stats.totalRead}</span>
            <span className="text-[10px] font-bold opacity-80 uppercase block">دروس منجزة</span>
          </div>

          <div className="gradient-secondary text-white p-4 rounded-2xl text-center shadow-md">
            <span className="text-3xl block mb-1">📝</span>
            <span className="text-2xl font-black block">{stats.totalExams}</span>
            <span className="text-[10px] font-bold opacity-80 uppercase block">اختبارات منجزة</span>
          </div>

          <div className="gradient-success text-slate-900 p-4 rounded-2xl text-center shadow-md">
            <div className="text-3xl mb-1">⏱️</div>
            <div className="text-2xl font-black">
              {Math.floor(stats.totalTime / 3600)}س {Math.floor((stats.totalTime % 3600) / 60)}د
            </div>
            <div className="text-[10px] opacity-80 font-bold">وقت الدراسة الفعلي</div>
          </div>

          <div className="gradient-warm text-slate-900 p-4 rounded-2xl text-center shadow-md">
            <span className="text-3xl block mb-1">🏆</span>
            <span className="text-2xl font-black block">{stats.completionRate}%</span>
            <span className="text-sm opacity-90 font-bold">نسبة الإنجاز الإجمالية</span>
          </div>
        </div>

        {/* Completion indicator */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-6 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm dark:text-gray-300">التقدم الإجمالي للمناهج</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">{stats.totalRead} من {stats.totalLessonsCount} درس</span>
          </div>
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all" style={{ width: `${stats.completionRate}%` }} />
          </div>
        </div>

        {/* Certificate Unlock Banner */}
        {stats.totalExams > 0 ? (
          <button 
            onClick={() => {
              onClose();
              onShowCertificate();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 py-3.5 rounded-2xl font-black transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <span>🏆</span>
            <span>عرض شهادة الإتمام والتقدير</span>
          </button>
        ) : (
          <div className="text-center text-xs text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-3 rounded-2xl">
            💡 أنجز اختباراً واحداً على الأقل لفتح شهادة تقدير المنصة الرقمية!
          </div>
        )}
      </div>
    </div>
  );
};
