import React, { useState } from 'react';

interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  DAYS_OF_WEEK: { key: string; name: string }[];
  getAllAvailableLessons: () => any[];
  addToSchedule: (item: any) => void;
  showToastMsg: (msg: string) => void;
  initialLessonKey?: string;
}

export const PlannerModal: React.FC<PlannerModalProps> = ({
  isOpen,
  onClose,
  DAYS_OF_WEEK,
  getAllAvailableLessons,
  addToSchedule,
  showToastMsg,
  initialLessonKey = '',
}) => {
  const [plannerDay, setPlannerDay] = useState('Saturday');
  const [plannerTime, setPlannerTime] = useState('16:00');
  const [plannerLessonKey, setPlannerLessonKey] = useState(initialLessonKey);
  const [plannerNotes, setPlannerNotes] = useState('');
  const [customLessonTitle, setCustomLessonTitle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let lessonTitle = '';
    let subjectName = 'مذاكرة عامة';
    let subjectIcon = '📖';
    let unitId: number | undefined = undefined;
    let lessonId: number | undefined = undefined;

    if (plannerLessonKey && plannerLessonKey !== 'custom') {
      const lessonsList = getAllAvailableLessons();
      const matched = lessonsList.find(l => `${l.curriculumKey}-U${l.unit.id}-L${l.lesson.id}` === plannerLessonKey);
      if (matched) {
        lessonTitle = matched.lesson.title;
        subjectName = matched.subject.name;
        subjectIcon = matched.subject.icon;
        unitId = matched.unit.id;
        lessonId = matched.lesson.id;
      }
    }

    if (!lessonTitle) {
      if (!customLessonTitle.trim()) {
        showToastMsg('⚠️ يرجى اختيار درس أو كتابة عنوان مخصص');
        return;
      }
      lessonTitle = customLessonTitle;
    }

    addToSchedule({
      day: plannerDay,
      time: plannerTime,
      notes: plannerNotes,
      curriculumKey: plannerLessonKey !== 'custom' ? plannerLessonKey.split('-').slice(0, 4).join('-') : undefined,
      termId: plannerLessonKey !== 'custom' ? parseInt(plannerLessonKey.split('-')[3]) : undefined,
      streamId: plannerLessonKey !== 'custom' ? (plannerLessonKey.split('-')[2] === 'general' ? 'general' : 'advanced') : undefined,
      programId: plannerLessonKey !== 'custom' ? (plannerLessonKey.split('-')[2] !== 'general' ? plannerLessonKey.split('-')[2] : undefined) : undefined,
      gradeId: plannerLessonKey !== 'custom' ? parseInt(plannerLessonKey.split('-')[1]) : undefined,
      subjectId: plannerLessonKey !== 'custom' ? plannerLessonKey.split('-')[0] : undefined,
      unitId,
      lessonId,
      lessonTitle,
      subjectName,
      subjectIcon
    });

    // Reset local states & close
    setPlannerLessonKey('');
    setPlannerNotes('');
    setCustomLessonTitle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-950 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>📅</span> جدولة حصة مذاكرة أسبوعية
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Day Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">اليوم:</label>
            <select
              value={plannerDay}
              onChange={(e) => setPlannerDay(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            >
              {DAYS_OF_WEEK.map(d => (
                <option key={d.key} value={d.key}>{d.name}</option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">الوقت:</label>
            <input
              type="time"
              value={plannerTime}
              onChange={(e) => setPlannerTime(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 font-medium text-center"
              required
            />
          </div>

          {/* Lesson Selection from curriculum */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">اختر درس من المناهج:</label>
            <select
              value={plannerLessonKey}
              onChange={(e) => setPlannerLessonKey(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            >
              <option value="">-- اختر من القائمة أو اختر موضوعاً مخصصاً --</option>
              <option value="custom">✍️ مذاكرة موضوع أو مادة مخصصة</option>
              
              {(() => {
                const lessons = getAllAvailableLessons();
                return lessons.map(item => {
                  const key = `${item.curriculumKey}-U${item.unit.id}-L${item.lesson.id}`;
                  return (
                    <option key={key} value={key}>
                      [{item.subject.name} - {item.grade.name}] {item.lesson.title}
                    </option>
                  );
                });
              })()}
            </select>
          </div>

          {/* If custom is selected or no lesson is selected, show custom input */}
          {(!plannerLessonKey || plannerLessonKey === 'custom') && (
            <div className="fade-in">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">عنوان الدرس المخصص أو المادة:</label>
              <input
                type="text"
                placeholder="مثال: مراجعة الوحدة الأولى في التربية الإسلامية"
                value={customLessonTitle}
                onChange={(e) => setCustomLessonTitle(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-4 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 font-bold text-right"
              />
            </div>
          )}

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">ملاحظات مخصصة (اختياري):</label>
            <textarea
              placeholder="مثال: حل صفحة 12 من كتاب الطالب والتركيز على القواعد"
              value={plannerNotes}
              onChange={(e) => setPlannerNotes(e.target.value)}
              rows={2}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-bold transition shadow-md"
            >
              حفظ الجدولة الأسبوعية
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
