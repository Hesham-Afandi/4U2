import React from 'react';
import { DB } from '../../data';
import { AppState, Program } from '../../types';

interface SummaryNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentNotes: Record<string, string>;
  updateStudentNote: (key: string, text: string) => void;
  getAllAvailableLessons: () => any[];
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  setHistory: React.Dispatch<React.SetStateAction<AppState[]>>;
  showToastMsg: (msg: string) => void;
}

export const SummaryNotesModal: React.FC<SummaryNotesModalProps> = ({
  isOpen,
  onClose,
  studentNotes,
  updateStudentNote,
  getAllAvailableLessons,
  appState,
  setAppState,
  setHistory,
  showToastMsg,
}) => {
  if (!isOpen) return null;

  const activeNotes = Object.entries(studentNotes).filter(([_, text]) => text && (text as string).trim().length > 0) as [string, string][];
  const lessonsList = getAllAvailableLessons();

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      const notesHtml = activeNotes.map(([key, text]) => {
        const matched = lessonsList.find(item => `${item.curriculumKey}-U${item.unit.id}-L${item.lesson.id}` === key);
        return `
          <div style="border-bottom: 2px solid #e2e8f0; padding: 15px 0; page-break-inside: avoid; text-align: right; direction: rtl;">
            <h3 style="margin: 0 0 5px 0; color: #1e1b4b; font-family: 'Cairo', sans-serif;">${matched ? matched.lesson.title : 'درس مخصص'}</h3>
            <div style="font-size: 11px; color: #4338ca; font-weight: bold; margin-bottom: 10px; font-family: 'Cairo', sans-serif;">
              ${matched ? matched.subject.name : ''} • ${matched ? matched.unit.name : ''}
            </div>
            <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-wrap; font-family: 'Cairo', sans-serif;">${text}</p>
          </div>
        `;
      }).join('');

      printWindow.document.write(`
        <html>
          <head>
            <title>مذكرة المراجعة الشخصية - منصة 4U</title>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
            <style>
              body { font-family: 'Cairo', sans-serif; direction: rtl; padding: 30px; text-align: right; }
              h1 { color: #312e81; border-bottom: 3px double #312e81; padding-bottom: 10px; margin-bottom: 25px; font-size: 24px; text-align: center; }
            </style>
          </head>
          <body>
            <h1>📚 دفتر الملاحظات والملخصات الشخصية للمراجعة الذاتية - منصة 4U</h1>
            ${notesHtml}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-950 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>📚</span> مذكرة المراجعة الذاتية للملاحظات
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
          هنا تجد جميع التلخيصات والملاحظات التي قمت بتدوينها أثناء مذاكرتك للدروس المختلفة لتراجعها بسرعة قبل الاختبار.
        </p>

        {activeNotes.length === 0 ? (
          <div className="text-center py-12 flex-1 flex flex-col justify-center items-center">
            <span className="text-5xl block mb-3 animate-pulse">✍️</span>
            <h4 className="font-extrabold text-gray-700 dark:text-gray-300 mb-1.5 text-sm">مذكرتك الذاتية فارغة حالياً</h4>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-sm mx-auto leading-relaxed">
              ابدأ في تدوين الملاحظات، الصيغ الرياضية، أو ملخصات القوانين أثناء تصفح أي درس عبر استخدام صندوق "مذكرتي الشخصية" في جانب صفحة الدرس.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-y-auto space-y-4 flex-1 pr-1 pl-1">
              {activeNotes.map(([key, text]) => {
                const matched = lessonsList.find(item => {
                  const itemKey = `${item.curriculumKey}-U${item.unit.id}-L${item.lesson.id}`;
                  return itemKey === key;
                });

                const displayTitle = matched ? matched.lesson.title : 'درس مخصص';
                const displaySubject = matched ? `${matched.subject.icon} ${matched.subject.name}` : 'مادة دراسية';
                const displayUnit = matched ? matched.unit.name : 'الفصل التعليمي';

                return (
                  <div key={key} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-amber-500/20 rounded-2xl p-4 text-right relative group hover:border-indigo-400 dark:hover:border-amber-400 transition shadow-sm">
                    {/* Clear Note button */}
                    <button
                      onClick={() => {
                        if (confirm('هل أنت متأكد من رغبتك في حذف هذه الملاحظة؟')) {
                          updateStudentNote(key, '');
                          showToastMsg('🗑️ تم حذف الملاحظة');
                        }
                      }}
                      className="absolute top-3 left-3 text-gray-400 hover:text-rose-500 text-xs transition p-1 cursor-pointer"
                      title="حذف الملاحظة"
                    >
                      🗑️
                    </button>

                    <div className="mb-2 pl-6 text-right">
                      <span className="text-[10px] font-black text-indigo-600 dark:text-amber-400 bg-indigo-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full ml-2">
                        {displaySubject}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold">{displayUnit}</span>
                      
                      {matched && (
                        <button
                          onClick={() => {
                            const parts = matched.curriculumKey.split('-');
                            const sub = matched.subject;
                            const gr = matched.grade;
                            const tr = matched.term;
                            const str = parts[2] !== 'general' ? DB.streams.find(s => s.id === 'advanced') : DB.streams.find(s => s.id === 'general');
                            const pr = parts[2] !== 'general' ? DB.programs.find(p => p.id === parts[2]) || null : null;

                            if (str) {
                              setHistory(prev => [...prev, { ...appState }]);
                              setAppState({
                                country: appState.country || 'UAE',
                                term: tr,
                                stream: str,
                                program: pr as Program,
                                grade: gr,
                                subject: sub,
                                unit: matched.unit,
                                lesson: matched.lesson
                              });
                              onClose();
                            }
                          }}
                          className="block font-black text-base text-gray-800 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-400 text-right mt-1.5 transition underline decoration-dotted cursor-pointer"
                        >
                          {displayTitle}
                        </button>
                      )}
                    </div>

                    <textarea
                      value={text}
                      onChange={(e) => updateStudentNote(key, e.target.value)}
                      className="w-full bg-white dark:bg-amber-950/15 border border-slate-200 dark:border-amber-500/30 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 dark:focus:border-amber-400 text-gray-800 dark:text-amber-100 min-h-[80px]"
                      placeholder="اكتب ملاحظاتك الذاتية..."
                    />
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <span>🖨️</span>
                <span>طباعة وتصدير مذكرة الملاحظات</span>
              </button>
              <button
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition text-xs cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
