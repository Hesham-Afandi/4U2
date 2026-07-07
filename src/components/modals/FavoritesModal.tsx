import React from 'react';
import { DB } from '../../data';
import { Lesson, Unit, AppState, Program } from '../../types';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: { key: string; title: string; icon: string; unitName: string }[];
  toggleFavorite: (lesson: Lesson, unit: Unit) => void;
  setFavorites: React.Dispatch<React.SetStateAction<{ key: string; title: string; icon: string; unitName: string }[]>>;
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  setHistory: React.Dispatch<React.SetStateAction<AppState[]>>;
  showToastMsg: (msg: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  toggleFavorite,
  setFavorites,
  appState,
  setAppState,
  setHistory,
  showToastMsg,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full max-h-[80vh] flex flex-col p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>❤️</span> الدروس المفضلة ({favorites.length})
          </h3>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12 flex-1 flex flex-col justify-center">
            <span className="text-5xl block mb-3">💔</span>
            <p className="text-gray-600 dark:text-gray-400 font-bold mb-1">لا توجد دروس مفضلة حالياً</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs">اضغط على زر ❤️ بجانب أي درس وسيظهر هنا للوصول السريع.</p>
          </div>
        ) : (
          <div className="overflow-y-auto space-y-3 pr-1 flex-1">
            {favorites.map(f => (
              <div 
                key={f.key}
                onClick={() => {
                  const parts = f.key.split('-');
                  if (parts.length >= 6) {
                    const termId = parseInt(parts[3]);
                    const gradeId = parseInt(parts[1]);
                    const subjectId = parts[0];
                    const streamId = parts[2] === 'inspire' || parts[2] === 'bridge' ? 'advanced' : 'general';
                    const programId = parts[2] === 'inspire' || parts[2] === 'bridge' ? parts[2] : null;
                    
                    const targetTerm = DB.terms.find(t => t.id === termId);
                    const targetGrade = DB.grades.find(g => g.id === gradeId);
                    const targetSubject = DB.subjects.find(s => s.id === subjectId);
                    const targetStream = DB.streams.find(s => s.id === streamId);
                    const targetProgram = programId ? DB.programs.find(p => p.id === programId) : null;
                    
                    const uPart = parts[parts.length - 2];
                    const lPart = parts[parts.length - 1];
                    const unitId = parseInt(uPart.replace('U', ''));
                    const lessonId = parseInt(lPart.replace('L', ''));

                    const keyPrefix = `${subjectId}-${gradeId}-${parts[2]}-${termId}`;
                    const curriculum = DB.curriculum[keyPrefix];
                    const targetUnit = curriculum?.units.find(u => u.id === unitId);
                    const targetLesson = targetUnit?.lessons.find(l => l.id === lessonId);

                    if (targetTerm && targetGrade && targetSubject && targetStream && targetUnit && targetLesson) {
                      setHistory(prev => [...prev, { ...appState }]);
                      setAppState({
                        country: appState.country || 'UAE',
                        term: targetTerm,
                        stream: targetStream,
                        program: targetProgram as Program,
                        grade: targetGrade,
                        subject: targetSubject,
                        unit: targetUnit,
                        lesson: targetLesson
                      });
                    }
                  }
                  onClose();
                }}
                className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 p-3 rounded-2xl cursor-pointer transition border border-transparent hover:border-indigo-500/25"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-gray-800 dark:text-white mb-0.5">{f.title}</h4>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{f.unitName}</p>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const parts = f.key.split('-');
                    const uPart = parts[parts.length - 2];
                    const lPart = parts[parts.length - 1];
                    const unitId = parseInt(uPart.replace('U', ''));
                    const lessonId = parseInt(lPart.replace('L', ''));
                    const keyPrefix = `${parts[0]}-${parts[1]}-${parts[2]}-${parts[3]}`;
                    
                    const curriculum = DB.curriculum[keyPrefix];
                    const unit = curriculum?.units.find(u => u.id === unitId);
                    const lesson = unit?.lessons.find(l => l.id === lessonId);
                    
                    if (lesson && unit) {
                      toggleFavorite(lesson, unit);
                    } else {
                      setFavorites(prev => {
                        const upd = prev.filter(item => item.key !== f.key);
                        localStorage.setItem('4u_favorites', JSON.stringify(upd));
                        return upd;
                      });
                      showToastMsg('❌ تم الإزالة من المفضلة');
                    }
                  }}
                  className="text-red-500 hover:text-red-700 p-2 cursor-pointer transition focus:outline-none"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
