import React from 'react';
import { DB } from '../../data';
import { AppState, Program } from '../../types';

interface WeeklyStudyPlannerProps {
  studyPlan: any[];
  DAYS_OF_WEEK: { key: string; name: string }[];
  setShowPlannerModal: (show: boolean) => void;
  getWeeklyProgress: () => { total: number; completed: number; percentage: number };
  removeFromSchedule: (id: string) => void;
  toggleStudyPlanItemCompletion: (id: string) => void;
  getCurriculum: (keyPrefix: string) => any;
  setHistory: React.Dispatch<React.SetStateAction<AppState[]>>;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  appState: AppState;
  progress: Record<string, any>;
  showToastMsg: (msg: string) => void;
}

export const WeeklyStudyPlanner: React.FC<WeeklyStudyPlannerProps> = ({
  studyPlan,
  DAYS_OF_WEEK,
  setShowPlannerModal,
  getWeeklyProgress,
  removeFromSchedule,
  toggleStudyPlanItemCompletion,
  getCurriculum,
  setHistory,
  setAppState,
  appState,
  progress,
  showToastMsg,
}) => {
  return (
    <div className="mt-12 bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-md text-right">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-5 text-right">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🗓️</div>
          <div className="text-right">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white">جدول المذاكرة الأسبوعي التفاعلي</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">خطط لمذاكرة دروسك بانتظام وتصفحها مباشرة من جدولك الخاص</p>
          </div>
        </div>
        
        <button
          onClick={() => setShowPlannerModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-5 rounded-2xl transition shadow-md flex items-center justify-center gap-2 self-start md:self-auto text-sm cursor-pointer"
        >
          <span>➕</span>
          <span>جدولة درس جديد</span>
        </button>
      </div>

      {studyPlan.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-950/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
          <div className="text-5xl mb-3 opacity-60">📅</div>
          <h4 className="font-extrabold text-gray-700 dark:text-gray-300 mb-1.5 text-base">جدولك الدراسي فارغ حالياً</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-5 leading-relaxed">
            قم بجدولة دروسك عبر الضغط على الزر أعلاه، أو اضغط على أيقونة الجدولة 📅 عند تصفح أي درس.
          </p>
          <button
            onClick={() => setShowPlannerModal(true)}
            className="bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-400 font-extrabold text-xs py-2 px-4 rounded-xl transition cursor-pointer"
          >
            ابدأ التخطيط الآن
          </button>
        </div>
      ) : (
        <div>
          {/* Weekly Goals Progress Tracker */}
          {(() => {
            const { total, completed, percentage } = getWeeklyProgress();
            let feedback = '';
            if (percentage === 0) feedback = 'ابدأ بمذاكرة أولى حصصك اليوم لصنع انطلاقة قوية! 🚀';
            else if (percentage < 50) feedback = 'خطوة رائعة! استمر في تحقيق تقدمك ولا تتوقف. 💪';
            else if (percentage < 100) feedback = 'رائع جداً! شارف أسبوعك الدراسي على الاكتمال بنجاح. 🔥';
            else feedback = 'إنجاز أسطوري! أكملت كامل خطتك للأسبوع الحالي بنجاح! 🏆🎉';

            return (
              <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-100 dark:border-indigo-950 rounded-2xl p-4 mb-6 text-right">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">معدل الإنجاز الأسبوعي:</span>
                  <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner flex mb-2">
                  <div 
                    className="bg-gradient-to-r from-teal-400 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center justify-between flex-wrap gap-2">
                  <span>🎯 أكملت {completed} من أصل {total} حصص مجدولة للأسبوع الحالي</span>
                  <span className="text-[11px] text-indigo-500 dark:text-indigo-400 animate-pulse">{feedback}</span>
                </p>
              </div>
            );
          })()}

          {/* Desktop Weekly Grid / Mobile Interactive Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-right">
            {DAYS_OF_WEEK.map(dayObj => {
              const dayItems = studyPlan.filter(item => item.day === dayObj.key)
                .sort((a, b) => a.time.localeCompare(b.time));
                
              return (
                <div 
                  key={dayObj.key}
                  className="bg-slate-50 dark:bg-slate-950/30 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-center pb-2 border-b border-slate-200/80 dark:border-slate-800/80 mb-3 flex items-center justify-between">
                      <span className="font-extrabold text-sm text-indigo-700 dark:text-indigo-400">
                        {dayObj.name}
                      </span>
                      <span className="text-[10px] bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold px-2 py-0.5 rounded-full">
                        {dayItems.length}
                      </span>
                    </div>
                    
                    {dayItems.length === 0 ? (
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center py-4 italic">لا يوجد حصص</p>
                    ) : (
                      <div className="space-y-2.5">
                        {dayItems.map(item => (
                          <div 
                            key={item.id}
                            className="bg-white dark:bg-gray-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm relative group hover:border-indigo-400 dark:hover:border-indigo-900 transition flex flex-col justify-between text-right"
                          >
                            {/* Delete Button */}
                            <button
                              onClick={() => removeFromSchedule(item.id)}
                              className="absolute top-1 left-1 text-gray-400 hover:text-red-500 text-xs p-1 cursor-pointer"
                              title="إزالة"
                            >
                              ✕
                            </button>
                            
                            <div className="pr-1 pl-3.5">
                              <div className="flex items-center gap-1 mb-1 flex-wrap">
                                <span className="text-xs">{item.subjectIcon || '📖'}</span>
                                <span className="text-[9px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-tight">
                                  {item.subjectName || 'درس'}
                                </span>
                              </div>
                              
                              {item.lessonId ? (
                                <button
                                  onClick={() => {
                                    const parts = item.curriculumKey?.split('-');
                                    if (parts) {
                                      let countryVal = 'UAE';
                                      let offset = 0;
                                      if (['UAE', 'Saudi', 'Egypt', 'Oman', 'Qatar', 'Bahrain'].includes(parts[0])) {
                                        countryVal = parts[0];
                                        offset = 1;
                                      }
                                      const sub = DB.subjects.find(s => s.id === parts[0 + offset]);
                                      const gr = DB.grades.find(g => parseInt(g.id.toString()) === parseInt(parts[1 + offset]));
                                      const tr = DB.terms.find(t => parseInt(t.id.toString()) === parseInt(parts[3 + offset]));
                                      let str = DB.streams.find(s => s.id === 'general');
                                      let pr = null;
                                      if (parts[2 + offset] !== 'general') {
                                        str = DB.streams.find(s => s.id === 'advanced');
                                        pr = DB.programs.find(p => p.id === parts[2 + offset]) || null;
                                      }
                                      
                                      const curriculum = getCurriculum(item.curriculumKey);
                                      const unit = curriculum?.units.find(u => u.id === item.unitId);
                                      const lesson = unit?.lessons.find(l => l.id === item.lessonId);
                                      
                                      if (lesson && unit && sub && gr && tr && str) {
                                        setHistory(prev => [...prev, { ...appState }]);
                                        setAppState({
                                          country: countryVal,
                                          term: tr,
                                          stream: str,
                                          program: pr as Program,
                                          grade: gr,
                                          subject: sub,
                                          unit,
                                          lesson
                                        });
                                      } else {
                                        showToastMsg('⚠️ عذراً، لم نتمكن من فتح هذا الدرس');
                                      }
                                    }
                                  }}
                                  className="text-right font-black text-xs text-gray-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 block line-clamp-2 leading-snug mb-1 cursor-pointer"
                                >
                                  {item.lessonTitle}
                                </button>
                              ) : (
                                <span className="font-bold text-xs text-gray-800 dark:text-slate-200 block mb-1">
                                  {item.lessonTitle}
                                </span>
                              )}
                              
                              {item.notes && (
                                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight mb-1">{item.notes}</p>
                              )}
                            </div>
                            
                            {(() => {
                              let isRead = false;
                              if (item.unitId && item.lessonId && item.subjectId && item.gradeId && item.termId) {
                                const streamPart = item.programId ? item.programId : (item.streamId || 'general');
                                const key = `${item.subjectId}-${item.gradeId}-${streamPart}-${item.termId}-U${item.unitId}-L${item.lessonId}`;
                                isRead = progress[key]?.read || item.completed;
                              } else {
                                isRead = item.completed;
                              }

                              return (
                                <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-bold">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleStudyPlanItemCompletion(item.id);
                                    }}
                                    className={`px-1.5 py-0.5 rounded transition flex items-center gap-1 cursor-pointer font-bold ${isRead ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/25' : 'text-gray-400 dark:text-gray-500 hover:text-indigo-600'}`}
                                    title={isRead ? 'إلغاء التحديد كمكتمل' : 'تحديد كمكتمل'}
                                  >
                                    <span>{isRead ? '✓ منجز' : '○ غير منجز'}</span>
                                  </button>
                                  <span className="text-gray-400 dark:text-gray-500 font-mono text-[9px]">⏱️ {item.time}</span>
                                </div>
                              );
                            })()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
