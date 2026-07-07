import React from 'react';
import { Printer } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalRead: number;
    completionRate: number;
  };
  studentName: string;
  setStudentName: (name: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  stats,
  studentName,
  setStudentName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-950 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>🏆</span> شهادة التفوق والتقدير الرقمية
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        {/* Student Name Input */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">أدخل اسم الطالب/الطالبة لإصدار الشهادة:</label>
          <input 
            type="text" 
            placeholder="مثال: محمد هشام العفندي"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-gray-800 dark:text-white focus:outline-none focus:border-amber-400 font-bold text-center"
          />
        </div>

        {/* Certificate layout block */}
        <div id="print-certificate-area" className="certificate rounded-2xl shadow-inner relative overflow-hidden mb-6 p-8 border-[6px] border-double border-amber-600/60 dark:border-amber-500/60 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="text-6xl mb-4 select-none">🏆</div>
          <h4 className="text-3xl font-black text-amber-900 dark:text-amber-300 mb-2">شهادة تقدير وإتمام مادة</h4>
          <p className="text-xs text-amber-800/80 dark:text-amber-400/85 tracking-widest font-semibold uppercase mb-6">تشهد المنصة التعليمية المتكاملة 4U بأن</p>
          
          <div className="text-2xl md:text-3xl font-black text-indigo-800 dark:text-indigo-300 border-b-2 border-amber-600/40 pb-2 inline-block px-10 mb-4 max-w-full truncate">
            {studentName.trim() || 'الطالب التفوق المتميز'}
          </div>
          
          <p className="text-amber-800/80 dark:text-amber-400/85 text-xs font-semibold mb-3">قد أتم واجتاز بنجاح كافة الأجزاء المقررة لـ</p>
          <div className="text-lg font-extrabold text-teal-800 dark:text-teal-400 mb-1">
            منهج المنهجية التفاعلية ({stats.totalRead} درس)
          </div>
          <div className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-6">
            بنسبة إنجاز تفوق إجمالية {stats.completionRate}%
          </div>

          <div className="flex justify-between items-center text-[10px] text-amber-800/60 dark:text-amber-400/50 font-bold mt-8 border-t border-amber-600/10 pt-4">
            <span>التاريخ: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>توقيع: منصة 4U الرقمية</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={() => {
              const printWindow = window.open('', '', 'width=800,height=600');
              if (printWindow) {
                printWindow.document.write(`
                  <html>
                    <head>
                      <title>شهادة إتمام - منصة 4U</title>
                      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
                      <style>
                        body { font-family: 'Cairo', sans-serif; direction: rtl; text-align: center; padding: 40px; background: #fff; }
                        .certificate { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 10px double #d97706; padding: 40px; border-radius: 20px; box-shadow: inset 0 0 40px rgba(0,0,0,0.05); }
                        h4 { font-size: 32px; color: #78350f; margin-bottom: 5px; }
                        .name { font-size: 28px; color: #4338ca; border-bottom: 2px solid #d97706; padding-bottom: 8px; display: inline-block; margin: 20px 0; }
                        p { font-size: 16px; color: #92400e; }
                        .rate { font-size: 20px; font-weight: bold; color: #047857; }
                        .date-footer { display: flex; justify-content: space-between; margin-top: 40px; font-size: 12px; color: #b45309; }
                      </style>
                    </head>
                    <body>
                      <div class="certificate">
                        <div style="font-size: 60px; margin-bottom: 10px;">🏆</div>
                        <h4>شهادة تقدير وإتمام مادة</h4>
                        <p>تشهد المنصة التعليمية المتكاملة 4U بأن</p>
                        <div class="name">${studentName.trim() || 'الطالب التفوق المتميز'}</div>
                        <p>قد أتم واجتاز بنجاح كافة الأجزاء المقررة لـ</p>
                        <div class="rate">منهج المنهجية التفاعلية (${stats.totalRead} درس) بنسبة إنجاز ${stats.completionRate}%</div>
                        <div class="date-footer">
                          <span>التاريخ: ${new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          <span>توقيع: منصة 4U الرقمية</span>
                        </div>
                      </div>
                    </body>
                  </html>
                `);
                printWindow.document.close();
                printWindow.onload = () => {
                  printWindow.print();
                };
              }
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Printer className="w-5 h-5" />
            <span>طباعة الشهادة</span>
          </button>
          
          <button 
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-slate-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
