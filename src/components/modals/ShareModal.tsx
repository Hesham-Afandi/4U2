import React from 'react';
import { Clipboard } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareInfo: { title: string; url: string } | null;
  showToastMsg: (msg: string) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareInfo,
  showToastMsg,
}) => {
  if (!isOpen || !shareInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
          <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-1.5">
            <span>📤</span> مشاركة الدرس
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-5 leading-relaxed">
          شارك هذا الدرس وادعم مسيرة التفوق والتحصيل لزملائك!
        </p>

        {/* Quick Share buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <a 
            href={`https://wa.me/?text=${encodeURIComponent(`📚 ${shareInfo.title}\nمنصة 4U التعليمية: ${shareInfo.url}`)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 text-xs font-bold transition duration-300"
          >
            <span className="text-xl">💬</span>
            <span>واتساب</span>
          </a>

          <a 
            href={`https://t.me/share/url?url=${encodeURIComponent(shareInfo.url)}&text=${encodeURIComponent(`📚 ${shareInfo.title}`)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 text-xs font-bold transition duration-300"
          >
            <span className="text-xl">✈️</span>
            <span>تليجرام</span>
          </a>
        </div>

        {/* Copyable link input */}
        <div className="flex gap-2">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(shareInfo.url).then(() => {
                showToastMsg('✅ تم نسخ الرابط بنجاح');
                onClose();
              }).catch(() => {
                showToastMsg('❌ فشل النسخ');
              });
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Clipboard className="w-4 h-4" />
            <span>نسخ الرابط</span>
          </button>
          <input 
            type="text" 
            readOnly 
            value={shareInfo.url}
            className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-gray-500 dark:text-gray-400 text-xs px-3 rounded-xl focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
