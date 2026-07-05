import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Search, RotateCcw, Heart, BarChart2, Sun, Moon, 
  Home, ChevronRight, Share2, Clipboard, Award, Printer, CheckCircle, Clock,
  Download
} from 'lucide-react';
import { DB } from './data';
import { Term, Stream, Program, Grade, Subject, Unit, Lesson, AppState } from './types';

const DAYS_OF_WEEK = [
  { key: 'Saturday', name: 'السبت' },
  { key: 'Sunday', name: 'الأحد' },
  { key: 'Monday', name: 'الإثنين' },
  { key: 'Tuesday', name: 'الثلاثاء' },
  { key: 'Wednesday', name: 'الأربعاء' },
  { key: 'Thursday', name: 'الخميس' },
  { key: 'Friday', name: 'الجمعة' },
];

export default function App() {
  // App Navigation State
  const [appState, setAppState] = useState<AppState>({
    term: null,
    stream: null,
    program: null,
    grade: null,
    subject: null,
    unit: null,
    lesson: null,
  });

  // Navigation History for Back Button
  const [history, setHistory] = useState<AppState[]>([]);

  // UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [studentName, setStudentName] = useState('');
  
  // Modals
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState<{ title: string; url: string } | null>(null);
  const [plannerDay, setPlannerDay] = useState('Saturday');
  const [plannerTime, setPlannerTime] = useState('16:00');
  const [plannerLessonKey, setPlannerLessonKey] = useState('');
  const [plannerNotes, setPlannerNotes] = useState('');

  // Persistence States
  const [favorites, setFavorites] = useState<{ key: string; title: string; icon: string; unitName: string }[]>([]);
  const [progress, setProgress] = useState<Record<string, { read: boolean; examDone: boolean; totalTime: number }>>({});
  const [studyPlan, setStudyPlan] = useState<any[]>([]);
  const [showPlannerModal, setShowPlannerModal] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [loaderError, setLoaderError] = useState(false);
  const [loaderSrc, setLoaderSrc] = useState('/loader.png');
  const [toast, setToast] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstallInstructionsModal, setShowInstallInstructionsModal] = useState(false);

  // Focus Mode & Personal Student Notes
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [showSummaryNotesModal, setShowSummaryNotesModal] = useState(false);

  // Daily Reminder States
  const [dailyReminderTime, setDailyReminderTime] = useState('17:00');
  const [dailyReminderActive, setDailyReminderActive] = useState(false);
  const [dailyReminderMsg, setDailyReminderMsg] = useState('حان وقت المذاكرة اليومي! فلنجتهد معاً لنصنع التفوق 📚✨');
  const [showReminderSettingModal, setShowReminderSettingModal] = useState(false);
  const [showAlarmTriggeredModal, setShowAlarmTriggeredModal] = useState(false);

  // Pomodoro Timer States (Inside Active Lesson)
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500); // 25 mins = 1500 secs
  const [pomodoroIsActive, setPomodoroIsActive] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<'study' | 'break'>('study');
  const [pomodoroTotalMinutesUsed, setPomodoroTotalMinutesUsed] = useState(0);

  // Time tracker ref
  const lessonStartTimeRef = useRef<number | null>(null);

  // 1. Initial Setup: Load theme, favorites, progress, and handle PWA install prompt
  useEffect(() => {
    // Theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Favorites
    try {
      const favs = JSON.parse(localStorage.getItem('4u_favorites') || '[]');
      setFavorites(favs);
    } catch {
      setFavorites([]);
    }

    // Progress
    try {
      const prog = JSON.parse(localStorage.getItem('4u_progress') || '{}');
      setProgress(prog);
    } catch {
      setProgress({});
    }

    // Study Plan
    try {
      const plan = JSON.parse(localStorage.getItem('4u_study_plan') || '[]');
      setStudyPlan(plan);
    } catch {
      setStudyPlan([]);
    }

    // Loader fadeout
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    // PWA Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Sync theme changes
  const toggleTheme = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // 2. Track Study Time for Active Lesson
  useEffect(() => {
    if (appState.lesson && appState.unit) {
      lessonStartTimeRef.current = Date.now();
    }

    return () => {
      if (lessonStartTimeRef.current && appState.lesson && appState.unit) {
        const elapsed = Math.floor((Date.now() - lessonStartTimeRef.current) / 1000);
        if (elapsed > 0) {
          const key = getLessonKey(appState.lesson, appState.unit);
          if (key) {
            updateProgressTime(key, elapsed);
          }
        }
        lessonStartTimeRef.current = null;
      }
    };
  }, [appState.lesson, appState.unit]);

  const updateProgressTime = (key: string, elapsedSeconds: number) => {
    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, totalTime: 0 };
      const updated = {
        ...prev,
        [key]: {
          ...current,
          totalTime: (current.totalTime || 0) + elapsedSeconds
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      return updated;
    });
  };

  // Daily Reminder & Notes Load effect
  useEffect(() => {
    try {
      const savedRem = localStorage.getItem('4u_daily_reminder');
      if (savedRem) {
        const parsed = JSON.parse(savedRem);
        setDailyReminderTime(parsed.time || '17:00');
        setDailyReminderActive(!!parsed.active);
        setDailyReminderMsg(parsed.msg || 'حان وقت المذاكرة اليومي! فلنجتهد معاً لنصنع التفوق 📚✨');
      }
    } catch (e) {
      console.error(e);
    }

    try {
      const savedNotes = localStorage.getItem('4u_student_notes');
      if (savedNotes) {
        setStudentNotes(JSON.parse(savedNotes));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Daily Reminder Interval Checker
  useEffect(() => {
    if (!dailyReminderActive) return;
    let alarmCheckedHourMin = '';

    const checkAlarm = () => {
      const now = new Date();
      const currentHourMin = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      if (currentHourMin === dailyReminderTime && alarmCheckedHourMin !== currentHourMin) {
        alarmCheckedHourMin = currentHourMin;
        setShowAlarmTriggeredModal(true);
        // Play notification sound
        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
          osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15); // A5
          osc.frequency.setValueAtTime(1174.66, audioCtx.currentTime + 0.3); // D6
          
          gain.gain.setValueAtTime(0, audioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
          gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.4);
          gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.5);
        } catch (e) {
          console.warn("Audio Context sound failed:", e);
        }
      }
    };

    const interval = setInterval(checkAlarm, 30000); // Check every 30 seconds
    checkAlarm(); // Instant initial check

    return () => clearInterval(interval);
  }, [dailyReminderActive, dailyReminderTime]);

  // Pomodoro timer effect
  useEffect(() => {
    let timerId: any = null;
    if (pomodoroIsActive && pomodoroSeconds > 0) {
      timerId = setInterval(() => {
        setPomodoroSeconds(prev => {
          if (prev <= 1) {
            setPomodoroIsActive(false);
            
            // Handle completion
            showToastMsg(pomodoroMode === 'study' ? '🏆 برافو! أنهيت 25 دقيقة من المذاكرة المركزة' : '☕ انتهت الاستراحة، فلنعد للمذاكرة بنشاط!');
            
            // Play alert sound
            try {
              const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
              const osc = audioCtx.createOscillator();
              const gain = audioCtx.createGain();
              osc.connect(gain);
              gain.connect(audioCtx.destination);
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
              osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); // E5
              osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.4); // G5
              gain.gain.setValueAtTime(0, audioCtx.currentTime);
              gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
              gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.5);
              gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.6);
              osc.start();
              osc.stop(audioCtx.currentTime + 0.6);
            } catch (e) {
              console.warn(e);
            }

            if (pomodoroMode === 'study') {
              // Add 25 minutes to statistics!
              if (appState.lesson && appState.unit) {
                const activeLessonKey = getLessonKey(appState.lesson, appState.unit);
                if (activeLessonKey) {
                  updateProgressTime(activeLessonKey, 1500);
                }
              }
              setPomodoroTotalMinutesUsed(prev => prev + 25);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [pomodoroIsActive, pomodoroSeconds, pomodoroMode, appState.lesson, appState.unit]);

  // Helper to save student note
  const updateStudentNote = (lessonKey: string, noteText: string) => {
    setStudentNotes(prev => {
      const updated = {
        ...prev,
        [lessonKey]: noteText
      };
      localStorage.setItem('4u_student_notes', JSON.stringify(updated));
      return updated;
    });
  };

  // Helper to save reminder settings
  const updateReminderSettings = (time: string, active: boolean, msg: string) => {
    setDailyReminderTime(time);
    setDailyReminderActive(active);
    setDailyReminderMsg(msg);
    localStorage.setItem('4u_daily_reminder', JSON.stringify({ time, active, msg }));
    showToastMsg('💾 تم حفظ إعدادات التذكير اليومي');
  };

  // Keys helper
  const getCurriculumKey = (stateVal = appState) => {
    if (!stateVal.subject || !stateVal.grade || !stateVal.term || !stateVal.stream) return null;
    let streamPart = 'general';
    if (stateVal.stream.id === 'advanced') {
      streamPart = stateVal.program ? stateVal.program.id : 'advanced';
    }
    return `${stateVal.subject.id}-${stateVal.grade.id}-${streamPart}-${stateVal.term.id}`;
  };

  const getLessonKey = (lesson: Lesson, unit: Unit) => {
    const currKey = getCurriculumKey();
    if (!currKey) return null;
    return `${currKey}-U${unit.id}-L${lesson.id}`;
  };

  // Toast Helper
  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  // Install App Action
  const handleInstallApp = async () => {
    if (!installPrompt) {
      setShowInstallInstructionsModal(true);
      return;
    }
    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        showToastMsg('🎉 شكراً لتثبيت التطبيق! نتمنى لك دراسة ممتعة.');
        setInstallPrompt(null);
      } else {
        showToastMsg('⚠️ تم إلغاء عملية التثبيت.');
      }
    } catch (e) {
      console.error(e);
      setShowInstallInstructionsModal(true);
    }
  };

  // Keyboard Shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showFavoritesModal) setShowFavoritesModal(false);
        else if (showStatsModal) setShowStatsModal(false);
        else if (showCertificateModal) setShowCertificateModal(false);
        else if (showShareModal) setShowShareModal(null);
        else if (showPlannerModal) setShowPlannerModal(false);
        else handleBack();
      }
      
      // Ctrl+D / Cmd+D for favorite current lesson
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        if (appState.lesson && appState.unit) {
          e.preventDefault();
          toggleFavorite(appState.lesson, appState.unit);
        }
      }

      // Ctrl+S / Cmd+S to share current lesson
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        if (appState.lesson) {
          e.preventDefault();
          const shareUrl = appState.lesson.lessonUrl || window.location.href;
          setShowShareModal({ title: appState.lesson.title, url: shareUrl });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appState, showFavoritesModal, showStatsModal, showCertificateModal, showShareModal, showPlannerModal, favorites, history]);

  // Push to history when state changes
  const navigateTo = (updater: Partial<AppState>) => {
    setHistory(prev => [...prev, { ...appState }]);
    setAppState(prev => {
      const next = { ...prev, ...updater };
      // Clear lower selections if higher selection changes
      if (updater.term !== undefined) {
        next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.stream !== undefined) {
        next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.program !== undefined) {
        next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.grade !== undefined) {
        next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.subject !== undefined) {
        next.unit = null; next.lesson = null;
      } else if (updater.unit !== undefined) {
        next.lesson = null;
      }
      return next;
    });
    setSearchQuery('');
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(prevHist => prevHist.slice(0, -1));
      setAppState(prev);
      setSearchQuery('');
    } else {
      goHome();
    }
  };

  const goHome = () => {
    setHistory([]);
    setAppState({
      term: null,
      stream: null,
      program: null,
      grade: null,
      subject: null,
      unit: null,
      lesson: null,
    });
    setSearchQuery('');
  };

  // Breadcrumbs jump logic
  const jumpToBreadcrumb = (level: keyof AppState) => {
    setAppState(prev => {
      const next = { ...prev };
      if (level === 'term') {
        next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'stream') {
        next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'program') {
        next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'grade') {
        next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'subject') {
        next.unit = null; next.lesson = null;
      } else if (level === 'unit') {
        next.lesson = null;
      }
      return next;
    });
    setSearchQuery('');
  };

  // Favorite toggle handler
  const toggleFavorite = (lesson: Lesson, unit: Unit) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setFavorites(prev => {
      const isFav = prev.some(f => f.key === key);
      let updated;
      if (isFav) {
        updated = prev.filter(f => f.key !== key);
        showToastMsg('❌ تم الإزالة من المفضلة');
      } else {
        updated = [...prev, {
          key,
          title: lesson.title,
          icon: lesson.icon,
          unitName: unit.name
        }];
        showToastMsg('❤️ تم الإضافة للمفضلة');
      }
      localStorage.setItem('4u_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle lesson read status
  const toggleLessonRead = (lesson: Lesson, unit: Unit, forceRead?: boolean) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, totalTime: 0 };
      const newReadStatus = forceRead !== undefined ? forceRead : !current.read;
      const updated = {
        ...prev,
        [key]: {
          ...current,
          read: newReadStatus
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      
      // Only show toast notifications on manual toggle
      if (forceRead === undefined) {
        if (newReadStatus) {
          showToastMsg('✅ تم تحديد الدرس كمقروء');
        } else {
          showToastMsg('↩️ تم إلغاء تحديد الدرس كمقروء');
        }
      }
      return updated;
    });
  };

  // Study Planner actions
  const addToSchedule = (item: {
    day: string;
    time: string;
    notes?: string;
    curriculumKey?: string;
    termId?: number;
    streamId?: string;
    programId?: string;
    gradeId?: number;
    subjectId?: string;
    unitId?: number;
    lessonId?: number;
    lessonTitle?: string;
    subjectName?: string;
    subjectIcon?: string;
  }) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9)
    };
    setStudyPlan(prev => {
      const updated = [...prev, newItem];
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
    showToastMsg('📅 تم إضافة الدرس لجدولك الأسبوعي');
  };

  const removeFromSchedule = (id: string) => {
    setStudyPlan(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
    showToastMsg('🗑️ تم إزالة الدرس من جدولك');
  };

  const toggleStudyPlanItemCompletion = (id: string) => {
    setStudyPlan(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const newStatus = !item.completed;
          showToastMsg(newStatus ? '🎯 تم إنجاز الحصة المجدولة بنجاح! أحسنت' : '↩️ تم التراجع عن إنجاز الحصة');
          return { ...item, completed: newStatus };
        }
        return item;
      });
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
  };

  const getWeeklyProgress = () => {
    if (studyPlan.length === 0) return { total: 0, completed: 0, percentage: 0 };
    let completed = 0;
    studyPlan.forEach(item => {
      if (item.unitId && item.lessonId) {
        let reconstructedKey = '';
        if (item.subjectId && item.gradeId && item.termId) {
          const streamPart = item.programId ? item.programId : (item.streamId || 'general');
          reconstructedKey = `${item.subjectId}-${item.gradeId}-${streamPart}-${item.termId}-U${item.unitId}-L${item.lessonId}`;
        }
        if (reconstructedKey && progress[reconstructedKey]?.read) {
          completed++;
        } else if (item.completed) {
          completed++;
        }
      } else {
        if (item.completed) {
          completed++;
        }
      }
    });

    const total = studyPlan.length;
    const percentage = Math.round((completed / total) * 100);
    return { total, completed, percentage };
  };

  const getAllAvailableLessons = () => {
    const list: any[] = [];
    Object.entries(DB.curriculum).forEach(([key, curr]) => {
      const parts = key.split('-');
      if (parts.length < 4) return;
      
      const subjectId = parts[0];
      const gradeId = parseInt(parts[1]);
      const streamPart = parts[2];
      const termId = parseInt(parts[3]);
      
      const subject = DB.subjects.find(s => s.id === subjectId);
      const grade = DB.grades.find(g => g.id === gradeId);
      const term = DB.terms.find(t => t.id === termId);
      
      let stream: Stream | undefined;
      let program: Program | null = null;
      
      if (streamPart === 'general') {
        stream = DB.streams.find(s => s.id === 'general');
      } else {
        stream = DB.streams.find(s => s.id === 'advanced');
        program = DB.programs.find(p => p.id === streamPart) || null;
      }
      
      if (!subject || !grade || !term || !stream) return;
      
      curr.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          list.push({
            curriculumKey: key,
            term,
            stream,
            program,
            grade,
            subject,
            unit,
            lesson
          });
        });
      });
    });
    return list;
  };

  // Mark exam done
  const markExamDone = (lesson: Lesson, unit: Unit) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, startTime: null, totalTime: 0 };
      const updated = {
        ...prev,
        [key]: {
          ...current,
          examDone: true
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      showToastMsg('🎉 أحسنت! تم تسجيل إنجاز الاختبار');
      return updated;
    });

    // Check if all exams in current unit are done to trigger certificate preview
    const currKey = getCurriculumKey();
    const curriculum = DB.curriculum[currKey || ''];
    if (curriculum && unit) {
      let allDone = true;
      unit.lessons.forEach(l => {
        const lk = `${currKey}-U${unit.id}-L${l.id}`;
        // Since setProgress is async, check both current and previous state
        if (l.id !== lesson.id && (!progress[lk] || !progress[lk].examDone)) {
          allDone = false;
        }
      });
      if (allDone) {
        setTimeout(() => {
          setShowCertificateModal(true);
        }, 1500);
      }
    }
  };

  // Search Logic (Global scanner with navigation jump context!)
  const searchLessons = (query: string) => {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return [];

    const results: {
      lesson: Lesson;
      unit: Unit;
      subject: Subject;
      grade: Grade;
      stream: Stream;
      program: Program | null;
      term: Term;
      key: string;
    }[] = [];

    DB.terms.forEach(term => {
      DB.streams.forEach(stream => {
        const programsToLoop = stream.id === 'advanced' ? DB.programs : [null];
        programsToLoop.forEach(program => {
          DB.grades.forEach(grade => {
            DB.subjects.forEach(subject => {
              let streamPart = 'general';
              if (stream.id === 'advanced') {
                streamPart = program ? program.id : 'advanced';
              }
              const key = `${subject.id}-${grade.id}-${streamPart}-${term.id}`;
              const curriculum = DB.curriculum[key];
              if (curriculum) {
                curriculum.units.forEach(unit => {
                  unit.lessons.forEach(lesson => {
                    const matchesTitle = lesson.title.toLowerCase().includes(lowercaseQuery);
                    const matchesContent = lesson.content?.intro?.toLowerCase().includes(lowercaseQuery) || false;
                    const matchesIntro = lesson.content?.sections?.some(s => 
                      typeof s.content === 'string' && s.content.toLowerCase().includes(lowercaseQuery)
                    ) || false;
                    
                    if (matchesTitle || matchesContent || matchesIntro) {
                      results.push({
                        lesson,
                        unit,
                        subject,
                        grade,
                        stream,
                        program,
                        term,
                        key
                      });
                    }
                  });
                });
              }
            });
          });
        });
      });
    });

    return results;
  };

  const matchingSearchResults = searchLessons(searchQuery);

  // Statistics calculation helpers
  const getStatsMetrics = () => {
    let totalRead = 0;
    let totalExams = 0;
    let totalTime = 0;
    Object.values(progress).forEach((item: any) => {
      if (item.read) totalRead++;
      if (item.examDone) totalExams++;
      totalTime += item.totalTime || 0;
    });

    // Count total lessons available in entire DB
    let totalLessonsCount = 0;
    Object.values(DB.curriculum).forEach(curr => {
      curr.units.forEach(u => {
        totalLessonsCount += u.lessons.length;
      });
    });

    const completionRate = totalLessonsCount > 0 ? Math.round((totalRead / totalLessonsCount) * 100) : 0;
    return { totalRead, totalExams, totalTime, totalLessonsCount, completionRate };
  };

  const stats = getStatsMetrics();

  const getUnitCompletionRate = (unitKeyPrefix: string, totalLessons: number) => {
    let completed = 0;
    for (let i = 1; i <= totalLessons; i++) {
      const key = `${unitKeyPrefix}-L${i}`;
      if (progress[key]?.read) completed++;
    }
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  };

  const getSubjectUnitKeys = (subjectId: string) => {
    const streamPart = appState.stream?.id === 'advanced' ? (appState.program?.id || 'advanced') : 'general';
    return `${subjectId}-${appState.grade?.id}-${streamPart}-${appState.term?.id}`;
  };

  const openLesson = () => {
    if (appState.lesson?.lessonUrl) {
      window.open(appState.lesson.lessonUrl, '_blank');
      toggleLessonRead(appState.lesson, appState.unit!, true);
    }
  };

  const openExam = () => {
    if (appState.lesson?.examUrl) {
      window.open(appState.lesson.examUrl, '_blank');
      markExamDone(appState.lesson, appState.unit!);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-950 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300 antialiased" dir="rtl">
      
      {/* 1. STARTUP LOADER */}
      <AnimatePresence>
        {showLoader && (
          <motion.div 
            id="page-loader"
            className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden bg-slate-900 text-white cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            onClick={() => setShowLoader(false)}
          >
            {/* Ambient blurring background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Custom Loader Image or Spinner Fallback */}
              {!loaderError ? (
                <img 
                  src={loaderSrc} 
                  onError={() => {
                    if (loaderSrc === '/loader.png') {
                      setLoaderSrc('/loader.gif');
                    } else {
                      setLoaderError(true);
                    }
                  }} 
                  className="w-36 h-36 object-contain mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" 
                  alt="Loading..." 
                />
              ) : (
                <div className="w-20 h-20 border-4 border-white/20 border-t-amber-400 border-r-teal-400 rounded-full animate-spin mb-8 shadow-[0_0_30px_rgba(251,191,36,0.3)]" />
              )}
              
              {/* Text */}
              <h2 className="text-3xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-teal-400">
                منصة 4U التعليمية
              </h2>
              <p className="text-sm text-slate-300/80 mb-6 font-medium">جاري تهيئة المناهج والتكامل التفاعلي...</p>
              
              {/* Progress bar simulation */}
              <div className="loader-progress">
                <div className="loader-progress-bar" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN HEADER & TOP NAVIGATION BAR */}
      <header className="gradient-primary text-white py-4 px-4 md:px-8 shadow-lg sticky top-0 z-40 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={goHome}>
            {!logoError ? (
              <img 
                src="/logo.png" 
                onError={() => setLogoError(true)} 
                className="h-12 w-auto object-contain rounded-xl border border-white/10 p-0.5 bg-slate-900/40" 
                alt="4U Logo" 
              />
            ) : (
              <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 shadow-md">
                <span className="text-2xl font-black tracking-tighter text-amber-300">4U</span>
              </div>
            )}
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-none mb-1">المنصة التعليمية المتكاملة 4U</h1>
              <p className="text-[11px] opacity-75 tracking-wider">منهج متكامل • تفاعلي • احترافي</p>
            </div>
          </div>

          {/* Desktop Global Search Input */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <input 
              type="text" 
              placeholder="ابحث عن درس، وحدة أو موضوع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl py-2 px-4 pr-11 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 focus:border-amber-300 focus:ring-1 focus:ring-amber-300 transition duration-300"
            />
            <Search className="w-5 h-5 absolute right-3.5 top-2.5 text-white/60 pointer-events-none" />
          </div>

          {/* Top Bar Action Rail */}
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            
            {/* Back button */}
            {history.length > 0 && (
              <button 
                onClick={handleBack}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
                title="رجوع (Esc)"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">رجوع</span>
              </button>
            )}

            {/* Bookmarks */}
            <button 
              onClick={() => setShowFavoritesModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold relative cursor-pointer"
              title="المفضلة"
            >
              <Heart className="w-4 h-4 text-red-300 fill-red-300" />
              <span className="hidden sm:inline">المفضلة</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Dashboard Statistics */}
            <button 
              onClick={() => setShowStatsModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="إحصائياتي"
            >
              <BarChart2 className="w-4 h-4 text-emerald-300" />
              <span className="hidden sm:inline">إحصائياتي</span>
            </button>

            {/* Weekly Study Planner Button */}
            <button 
              onClick={() => setShowPlannerModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer relative"
              title="جدول المذاكرة الأسبوعي"
            >
              <span>📅</span>
              <span className="hidden sm:inline">جدول المذاكرة</span>
              {studyPlan.length > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-amber-500 text-slate-950 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-extrabold shadow-md">
                  {studyPlan.length}
                </span>
              )}
            </button>

            {/* Dafter Khana external link */}
            <a 
              href="https://hesham-afandi.github.io/DafterKhana/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold"
              title="مكتبة دفتر خانة"
            >
              <span>📓</span>
              <span className="hidden sm:inline">دفتر خانة</span>
            </a>

            {/* Daily Reminder Button */}
            <button 
              onClick={() => setShowReminderSettingModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="التذكير اليومي"
            >
              <span>{dailyReminderActive ? '⏰' : '🔕'}</span>
              <span className="hidden sm:inline">التذكير اليومي</span>
            </button>

            {/* Summary Review Notes Button */}
            <button 
              onClick={() => setShowSummaryNotesModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="مذكرة مراجعة الامتحان"
            >
              <span>📝</span>
              <span className="hidden sm:inline">مراجعة الامتحان</span>
            </button>

            {/* Theme toggler */}
            <button 
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center justify-center cursor-pointer"
              title="تبديل الوضع"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            {/* Home button */}
            <button 
              onClick={goHome}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 text-sm font-bold shadow-md cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 px-2 w-full relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="mobileSearchInput" 
            placeholder="ابحث عن درس، وحدة أو موضوع..."
            className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg py-2 px-4 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition text-sm text-right pr-9"
          />
          <Search className="w-4 h-4 absolute right-5 top-3 text-white/75 pointer-events-none" />
        </div>

        {/* Global Progress Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500" 
            style={{ width: `${stats.totalLessonsCount > 0 ? (stats.totalRead / stats.totalLessonsCount) * 100 : 0}%` }}
          ></div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {(appState.term || appState.stream || appState.grade || appState.subject || appState.unit || appState.lesson) && (
        <div id="breadcrumbs" className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
            <button onClick={goHome} className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer">
              <span>🎓</span> الرئيسية
            </button>
            
            {appState.term && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('term')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.term.icon} {appState.term.name}
                </button>
              </>
            )}

            {appState.stream && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('stream')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.stream.name}
                </button>
              </>
            )}

            {appState.program && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('program')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.program.name}
                </button>
              </>
            )}

            {appState.grade && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('grade')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.grade.name}
                </button>
              </>
            )}

            {appState.subject && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('subject')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.subject.name}
                </button>
              </>
            )}

            {appState.unit && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('unit')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.unit.name}
                </button>
              </>
            )}

            {appState.lesson && (
              <>
                <span className="text-gray-400">‹</span>
                <span className="text-gray-400 dark:text-gray-500 font-semibold max-w-[200px] truncate">{appState.lesson.title}</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* 3. APPLICATION WORKSPACE CONTAINER */}
      <main id="app" className="max-w-7xl mx-auto px-4 md:px-6 pb-16 flex-1 w-full">
        
        {/* If search query is active, override standard flow with global responsive search interface! */}
        {searchQuery.trim() !== '' ? (
          <div className="fade-in py-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-950/40 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-800 dark:text-white">نتائج البحث عن: "{searchQuery}"</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">تم العثور على {matchingSearchResults.length} تطابق في كافة المناهج والمواد</p>
              </div>
            </div>

            {matchingSearchResults.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">لا توجد نتائج مطابقة</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
                  جرب البحث بكلمات مختلفة مثل "تكامل"، "سرعة"، "فيزياء"، "تفاضل"، "متجهات" أو "Bohr".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchingSearchResults.map((result, idx) => {
                  const lessonKey = `${result.key}-U${result.unit.id}-L${result.lesson.id}`;
                  const isRead = progress[lessonKey]?.read;
                  const isDone = progress[lessonKey]?.examDone;
                  
                  return (
                    <div 
                      key={lessonKey}
                      onClick={() => {
                        setHistory(prev => [...prev, { ...appState }]);
                        setAppState({
                          term: result.term,
                          stream: result.stream,
                          program: result.program,
                          grade: result.grade,
                          subject: result.subject,
                          unit: result.unit,
                          lesson: result.lesson
                        });
                        setSearchQuery('');
                      }}
                      className="card-hover bg-white dark:bg-gray-900/60 p-5 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 cursor-pointer flex flex-col justify-between text-right"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-2xl">{result.lesson.icon}</span>
                          <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-1 px-2.5 rounded-full">
                            {result.subject.name} • {result.grade.name}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-base text-gray-800 dark:text-white mb-2 line-clamp-2">
                          {result.lesson.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                          {result.unit.name}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-3 text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                        <div className="flex items-center gap-1.5">
                          {isRead && <span className="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">✓ مقروء</span>}
                          {isDone && <span className="bg-amber-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">🏆 اختبار</span>}
                        </div>
                        <span className="flex items-center gap-1">انتقل الآن ←</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* STANDARD APPLICATION STATE ROUTER */
          <div className="py-2">
            
            {/* VIEW 1: HOME (SELECT TERM) */}
            {!appState.term && (
              <div className="fade-in">
                {/* Hero Card Banner */}
                <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white mb-8 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
                  <div className="text-center md:text-right relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight text-amber-300">
                      مرحباً بك في مكتبة المناهج التفاعلية
                    </h2>
                    <p className="text-lg opacity-90 mb-5 font-medium">رحلة تعلم ذكية ومبسطة للصفوف (9 - 12)</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">📚 المنهج كاملاً دون حذف</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">🌟 خطة دراسية متكاملة</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">⏱️ تتبع ذكي لوقت الدراسة</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span>📅</span> اختر الترم الدراسي
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {DB.terms.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => navigateTo({ term: t })}
                      className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 text-right cursor-pointer"
                    >
                      <div className="text-5xl mb-4">{t.icon}</div>
                      <h4 className="font-extrabold text-xl mb-1 text-gray-800 dark:text-white">{t.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">اضغط لاستعراض كافة الفصول والمواد</p>
                      
                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold">استعرض الآن ←</span>
                        <span className="bg-slate-100 dark:bg-slate-800 text-[10px] px-2.5 py-1 rounded-full text-gray-600 dark:text-gray-300 font-semibold">عام + متقدم</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* 📅 SECTION: WEEKLY STUDY PLANNER */}
                <div className="mt-12 bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-5 text-right">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">🗓️</div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white">جدول المذاكرة الأسبوعي التفاعلي</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">خطط لمذاكرة دروسك بانتظام وتصفحها مباشرة من جدولك الخاص</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setShowPlannerModal(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-5 rounded-2xl transition shadow-md flex items-center justify-center gap-2 self-start md:self-auto text-sm"
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
                        className="bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-400 font-extrabold text-xs py-2 px-4 rounded-xl transition"
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
                                          className="absolute top-1 left-1 text-gray-400 hover:text-red-500 text-xs p-1"
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
                                                // Navigate directly to scheduled lesson
                                                const parts = item.curriculumKey?.split('-');
                                                if (parts) {
                                                  const sub = DB.subjects.find(s => s.id === parts[0]);
                                                  const gr = DB.grades.find(g => parseInt(g.id.toString()) === parseInt(parts[1]));
                                                  const tr = DB.terms.find(t => parseInt(t.id.toString()) === parseInt(parts[3]));
                                                  let str = DB.streams.find(s => s.id === 'general');
                                                  let pr = null;
                                                  if (parts[2] !== 'general') {
                                                    str = DB.streams.find(s => s.id === 'advanced');
                                                    pr = DB.programs.find(p => p.id === parts[2]) || null;
                                                  }
                                                  
                                                  const curriculum = DB.curriculum[item.curriculumKey || ''];
                                                  const unit = curriculum?.units.find(u => u.id === item.unitId);
                                                  const lesson = unit?.lessons.find(l => l.id === item.lessonId);
                                                  
                                                  if (lesson && unit && sub && gr && tr && str) {
                                                    setHistory(prev => [...prev, { ...appState }]);
                                                    setAppState({
                                                      term: tr,
                                                      stream: str,
                                                      program: pr,
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

              </div>
            )}

            {/* VIEW 2: STREAMS (GENERAL vs ADVANCED) */}
            {appState.term && !appState.stream && (
              <div className="fade-in">
                <div className="gradient-secondary rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.term.icon} {appState.term.name}</h2>
                  <p className="opacity-90 text-sm font-medium">اختر المسار الأكاديمي المناسب لك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {DB.streams.map(s => (
                    <button 
                      key={s.id}
                      onClick={() => navigateTo({ stream: s })}
                      className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-pink-500 text-right cursor-pointer"
                    >
                      <div className="text-6xl mb-4">{s.icon}</div>
                      <h4 className="font-extrabold text-2xl mb-2 text-gray-800 dark:text-white">{s.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">{s.desc}</p>
                      
                      <div className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400 font-bold text-sm">
                        <span>اضغط للدخول</span>
                        <span>←</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: PROGRAMS (INSPIRE vs BRIDGE for Advanced) */}
            {appState.term && appState.stream?.id === 'advanced' && !appState.program && (
              <div className="fade-in">
                <div className="gradient-warm rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.term.icon} {appState.term.name} - مسار {appState.stream.name}</h2>
                  <p className="opacity-90 text-sm font-medium">اختر البرنامج الدراسي التخصصي لصفك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {DB.programs.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => navigateTo({ program: p })}
                      className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-amber-500 text-right cursor-pointer relative overflow-hidden"
                    >
                      {p.isEnglish && (
                        <div className="absolute top-4 left-4 bg-blue-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                          🇬🇧 English Content
                        </div>
                      )}
                      <div className="text-6xl mb-4">{p.icon}</div>
                      <h4 className="font-extrabold text-2xl mb-2 text-gray-800 dark:text-white">{p.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                      
                      <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-sm">
                        <span>اضغط للاختيار</span>
                        <span>←</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 4: GRADES (9, 10, 11, 12) */}
            {appState.term && appState.stream && (appState.stream.id !== 'advanced' || appState.program) && !appState.grade && (
              <div className="fade-in">
                <div className="gradient-success rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">
                    {appState.term.name} • {appState.stream.name} {appState.program ? `(${appState.program.name})` : ''}
                  </h2>
                  <p className="opacity-90 text-sm font-medium">اختر الصف الدراسي المناسب</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {DB.grades.map(g => (
                    <button 
                      key={g.id}
                      onClick={() => navigateTo({ grade: g })}
                      className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-blue-500 text-center cursor-pointer"
                    >
                      <div className="text-5xl mb-3">{g.icon}</div>
                      <h4 className="font-extrabold text-lg text-gray-800 dark:text-white">{g.name}</h4>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 5: SUBJECTS (PHYSICS, MATH, CHEMISTRY, BIOLOGY) */}
            {appState.term && appState.stream && (appState.stream.id !== 'advanced' || appState.program) && appState.grade && !appState.subject && (
              <div className="fade-in">
                <div className="gradient-warm rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.grade.icon} {appState.grade.name}</h2>
                  <p className="opacity-90 text-sm font-medium">
                    {appState.term.name} • {appState.stream.name} {appState.program ? `• ${appState.program.name}` : ''}
                  </p>
                </div>

                <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span>⚛️</span> اختر المادة العلمية
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {DB.subjects.map(s => {
                    // Temporarily check if subject has contents in curriculum
                    const key = getSubjectUnitKeys(s.id);
                    const isAvailable = DB.curriculum[key] ? true : false;
                    
                    return (
                      <button 
                        key={s.id}
                        onClick={() => navigateTo({ subject: s })}
                        className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-purple-500 text-center cursor-pointer flex flex-col items-center justify-between"
                      >
                        <div className="text-5xl mb-3">{s.icon}</div>
                        <h4 className="font-extrabold text-lg text-gray-800 dark:text-white mb-2">{s.name}</h4>
                        
                        <span className={`text-[10px] font-bold py-1 px-3 rounded-full ${isAvailable ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'}`}>
                          {isAvailable ? '✅ متاح حالياً' : '🚧 قريباً'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 6: UNITS LIST */}
            {appState.term && appState.stream && appState.grade && appState.subject && !appState.unit && (
              <div className="fade-in">
                {(() => {
                  const key = getCurriculumKey();
                  const curriculum = DB.curriculum[key || ''];
                  
                  if (!curriculum) {
                    return (
                      <div>
                        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl p-8 text-white mb-8 shadow-md">
                          <h2 className="text-3xl font-black mb-1">{appState.subject.icon} {appState.subject.name}</h2>
                          <p className="opacity-95 text-sm font-medium">
                            {appState.grade.name} • {appState.term.name} • {appState.stream.name}
                          </p>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-900/60 rounded-2xl p-8 text-center shadow-sm">
                          <div className="text-5xl mb-4">🚧</div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-amber-300 mb-2">المحتوى قيد التحضير</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">سيتم توفير الوحدات والدروس الخاصة بهذا الاختيار قريباً جداً.</p>
                        </div>
                      </div>
                    );
                  }

                  const isEnglish = curriculum.isEnglish;
                  
                  return (
                    <div>
                      <div className="gradient-primary text-white rounded-3xl p-8 mb-8 shadow-xl">
                        <h2 className="text-3xl font-black mb-1">{appState.subject.icon} {appState.subject.name}</h2>
                        <p className="opacity-90 text-sm font-medium">
                          {appState.grade.name} • {appState.term.name} • {appState.stream.name} {appState.program ? `• ${appState.program.name}` : ''}
                        </p>
                      </div>

                      <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                        <span>📚</span> الوحدات الدراسية
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {curriculum.units.map(unit => {
                          const lessonCount = unit.lessons.length;
                          const compRate = getUnitCompletionRate(`${key}-U${unit.id}`, lessonCount);
                          
                          return (
                            <button 
                              key={unit.id}
                              onClick={() => navigateTo({ unit })}
                              className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 text-right cursor-pointer flex flex-col justify-between"
                            >
                              <div className="flex gap-4 mb-4 items-start w-full">
                                <div className={`bg-gradient-to-br ${unit.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                                  {unit.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                    <h3 className="font-extrabold text-lg dark:text-white">{unit.name}</h3>
                                    {compRate === 100 && <span className="completed-badge">✓ مكتمل</span>}
                                  </div>
                                  {unit.description && <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{unit.description}</p>}
                                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                    📖 {lessonCount} {isEnglish ? 'lessons' : 'دروس'} {compRate > 0 && `• انجاز ${compRate}%`}
                                  </span>
                                  {compRate > 0 && (
                                    <div className="lesson-progress-bar mt-2">
                                      <div className="lesson-progress-fill" style={{ width: `${compRate}%` }}></div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-bold text-xs border-t border-slate-100 dark:border-slate-800/80 pt-3">
                                <span>{isEnglish ? 'Browse Lessons' : 'استعراض الدروس'}</span>
                                <span>{isEnglish ? '←' : '←'}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* VIEW 7: LESSONS LIST */}
            {appState.term && appState.stream && appState.grade && appState.subject && appState.unit && !appState.lesson && (
              <div className="fade-in">
                {(() => {
                  const key = getCurriculumKey();
                  const curriculum = DB.curriculum[key || ''];
                  const isEnglish = curriculum?.isEnglish;
                  
                  return (
                    <div>
                      <div className="gradient-violet rounded-3xl p-8 text-white mb-8 shadow-md">
                        <h2 className="text-3xl font-black mb-1">{appState.unit.icon} {appState.unit.name}</h2>
                        <p className="opacity-90 text-sm font-medium">
                          {appState.subject.name} • {appState.grade.name} • {appState.term.name}
                        </p>
                      </div>

                      <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                        <span>📖</span> الدروس والاجزاء العلمية
                      </h3>

                      <div className="space-y-4">
                        {appState.unit.lessons.map((l, index) => {
                          const lessonKey = `${key}-U${appState.unit!.id}-L${l.id}`;
                          const isRead = progress[lessonKey]?.read;
                          const isDone = progress[lessonKey]?.examDone;
                          const isFav = favorites.some(f => f.key === lessonKey);
                          
                          return (
                            <div 
                              key={l.id}
                              onClick={() => navigateTo({ lesson: l })}
                              className="card-hover bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md flex items-center justify-between border-2 border-transparent hover:border-violet-500 cursor-pointer text-right"
                            >
                              <div className="flex items-center gap-4 flex-1">
                                <div className="bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-xl w-12 h-14 flex items-center justify-center text-xl font-extrabold flex-shrink-0 relative">
                                  {l.icon}
                                  {isRead && <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">✓</span>}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h4 className="font-extrabold text-base text-gray-800 dark:text-white">
                                      {index + 1}. {l.title}
                                    </h4>
                                    {isDone && <span className="completed-badge">🏆 تم الاختبار</span>}
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">⏱️ {l.duration}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(l, appState.unit!);
                                  }}
                                  className="favorite-btn text-2xl p-2 focus:outline-none hover:scale-110 active:scale-95 transition"
                                  title="المفضلة"
                                >
                                  {isFav ? '❤️' : '🤍'}
                                </button>
                                <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400 rotate-180" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* VIEW 8: LESSON DETAILS VIEW */}
            {appState.term && appState.stream && appState.grade && appState.subject && appState.unit && appState.lesson && (
              <div className="fade-in">
                {(() => {
                  const isEnglish = DB.curriculum[getCurriculumKey() || '']?.isEnglish;
                  const lessonKey = getLessonKey(appState.lesson, appState.unit);
                  const isFav = favorites.some(f => f.key === lessonKey);
                  const isRead = progress[lessonKey || '']?.read;
                  const isDone = progress[lessonKey || '']?.examDone;
                  const timeSpent = progress[lessonKey || '']?.totalTime || 0;
                  const durationMinutes = Math.floor(timeSpent / 60);
                  const c = appState.lesson.content;
                  const shareUrl = appState.lesson.lessonUrl || window.location.href;

                  // Render mathematical sections
                  const sectionsHTML = c?.sections.map((s, idx) => {
                    if (s.type === 'formula') {
                      return (
                        <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-amber-950/20 dark:to-yellow-950/15 rounded-2xl p-6 my-5 border-2 border-indigo-200 dark:border-amber-500/40 text-center shadow-sm">
                          <div className="text-xs text-indigo-600 dark:text-amber-400 mb-2.5 font-bold uppercase tracking-wider">{s.title}</div>
                          <div className="formula text-2xl md:text-4xl font-extrabold text-indigo-800 dark:text-amber-300">{s.content as string}</div>
                        </div>
                      );
                    } else if (s.type === 'table') {
                      return (
                        <div key={idx} className="my-6">
                          <h4 className="font-extrabold text-lg mb-3 text-gray-800 dark:text-amber-300">{s.title}</h4>
                          <div className="overflow-x-auto shadow-sm rounded-xl">
                            <table className="comparison min-w-full">
                              <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                  {s.headers?.map((h, hIdx) => (
                                    <th key={hIdx} className="px-4 py-3 text-right text-xs font-bold text-gray-700 dark:text-amber-400 border-b border-gray-200 dark:border-gray-700">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {s.rows?.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-4 py-3 text-sm text-gray-600 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    } else if (s.type === 'bullets') {
                      return (
                        <div key={idx} className="my-5 bg-blue-50/60 dark:bg-amber-950/10 rounded-2xl p-5 border-l-4 border-indigo-500 dark:border-amber-500 shadow-sm text-right">
                          <h4 className="font-extrabold text-lg mb-3 text-indigo-800 dark:text-amber-300">{s.title}</h4>
                          <ul className="space-y-3">
                            {(s.content as string[]).map((item, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5">
                                <span className="text-indigo-600 dark:text-amber-400 mt-1 flex-shrink-0">✓</span>
                                <span className="text-gray-700 dark:text-amber-100 text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    } else {
                      return (
                        <div key={idx} className="my-4">
                          <h4 className="font-bold text-base mb-1.5 text-gray-800 dark:text-amber-300">{s.title}</h4>
                          <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed">{s.content as string}</p>
                        </div>
                      );
                    }
                  });

                  if (isFocusMode) {
                    return (
                      <div className="max-w-3xl mx-auto py-8 px-4 md:px-8 bg-amber-50/55 dark:bg-gray-950 border border-amber-200/60 dark:border-slate-800 rounded-3xl shadow-xl text-right transition-colors duration-500">
                        {/* Focus Mode Top Header */}
                        <div className="flex items-center justify-between border-b border-amber-200/50 dark:border-slate-800 pb-4 mb-6">
                          <button 
                            onClick={() => setIsFocusMode(false)}
                            className="bg-amber-100 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1"
                          >
                            <span>🚪</span>
                            <span>خروج من وضع التركيز</span>
                          </button>
                          
                          <div className="text-center">
                            <span className="text-2xl">{appState.lesson.icon}</span>
                            <h2 className="font-extrabold text-lg text-amber-950 dark:text-amber-300 mr-2 inline-block leading-tight">{appState.lesson.title}</h2>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-amber-200/50 dark:bg-slate-800 text-amber-900 dark:text-gray-300 px-2.5 py-1 rounded-full font-bold">👁️ وضع التركيز مفعل</span>
                          </div>
                        </div>

                        {/* Distraction-free Pomodoro inside Focus Mode */}
                        <div className="bg-amber-100/40 dark:bg-slate-900/40 p-4 rounded-2xl mb-6 border border-amber-200/30 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-right">
                            <span className="text-[10px] text-amber-700 dark:text-amber-400 font-extrabold block uppercase tracking-wider mb-0.5">مؤقت المذاكرة (Pomodoro)</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-black text-amber-950 dark:text-white">
                                {Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0')}:{Math.floor(pomodoroSeconds % 60).toString().padStart(2, '0')}
                              </span>
                              <span className="text-xs text-gray-500">({pomodoroMode === 'study' ? 'دراسة مركّزة' : 'راحة قصيرة'})</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setPomodoroIsActive(!pomodoroIsActive)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${pomodoroIsActive ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                            >
                              {pomodoroIsActive ? '⏸️ إيقاف مؤقت' : '▶️ ابدأ التركيز'}
                            </button>
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroSeconds(pomodoroMode === 'study' ? 1500 : 300);
                              }}
                              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                            >
                              🔄 إعادة ضبط
                            </button>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed text-base tracking-wide space-y-6">
                          {c ? (
                            <div>
                              {/* Intro Section */}
                              <div className="mb-6 bg-amber-100/10 dark:bg-slate-900/10 p-5 rounded-2xl border-r-4 border-amber-500">
                                <p className="text-base font-bold text-amber-950 dark:text-amber-200">{c.intro}</p>
                              </div>

                              {/* Breakdown */}
                              <div className="space-y-6">
                                {sectionsHTML}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-12">
                              <p className="text-gray-500">محتوى الدرس غير متوفر حالياً.</p>
                            </div>
                          )}
                        </div>

                        {/* Student Notes section right inside Focus Mode */}
                        <div className="mt-8 pt-6 border-t border-amber-200/50 dark:border-slate-800 text-right">
                          <label className="block text-xs font-black text-amber-900 dark:text-amber-400 mb-2">✍️ سجل ملاحظاتك وأفكارك حول هذا الدرس هنا:</label>
                          <textarea
                            value={studentNotes[lessonKey || ''] || ''}
                            onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                            placeholder="اكتب تعليقاتك، القوانين الأساسية، أو أي ملاحظات تريد تذكرها ليلة الامتحان..."
                            className="w-full bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500 text-right text-gray-800 dark:text-gray-200 min-h-[120px] transition shadow-inner"
                          />
                          <span className="text-[10px] text-gray-400 block mt-1.5 font-semibold">💾 يتم الحفظ تلقائياً في مذكرة المراجعة الذاتية الخاصة بك</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      
                      {/* Left side: Lesson Content */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Title Panel */}
                        <div className="gradient-teal text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <span className="text-6xl bg-white/10 p-3 rounded-2xl backdrop-blur-sm select-none">{appState.lesson.icon}</span>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                                <h2 className="text-2xl md:text-3xl font-extrabold">{appState.lesson.title}</h2>
                                {isRead && <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">✓ مقروء</span>}
                                {isDone && <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">🏆 مكتمل</span>}
                              </div>
                              <p className="opacity-90 text-xs">
                                {appState.subject.name} • {appState.grade.name} • {appState.unit.name}
                              </p>
                              {timeSpent > 0 && (
                                <p className="opacity-80 text-[10px] mt-1 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5" />
                                  المدة المستغرقة في المذاكرة: {durationMinutes} دقيقة
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start md:self-auto">
                            {/* Focus Mode Button */}
                            <button 
                              onClick={() => {
                                setIsFocusMode(true);
                                setPomodoroSeconds(1500);
                                setPomodoroMode('study');
                                showToastMsg('👁️ تم تشغيل وضع التركيز والقراءة لتقليل التشتت');
                              }}
                              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                              title="تفعيل وضع التركيز"
                            >
                              <span>👁️</span>
                              <span>وضع التركيز</span>
                            </button>

                            {/* Favorite Button */}
                            <button 
                              onClick={() => toggleFavorite(appState.lesson!, appState.unit!)}
                              className={`p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold ${isFav ? 'bg-white text-rose-500' : 'bg-white/10 text-white hover:bg-white/20'}`}
                              title="إضافة للمفضلة (Ctrl+D)"
                            >
                              <span>❤️</span>
                              <span>{isFav ? 'مفضل' : 'تفضيل'}</span>
                            </button>

                            {/* Share button */}
                            <button 
                              onClick={() => setShowShareModal({ title: appState.lesson!.title, url: shareUrl })}
                              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold"
                              title="مشاركة الدرس"
                            >
                              <Share2 className="w-4 h-4" />
                              <span>مشاركة</span>
                            </button>
                          </div>
                        </div>

                        {/* Content sections */}
                        {c ? (
                          <div className="space-y-6">
                            {/* Intro Section */}
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800">
                              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                                <span className="text-xl">💡</span>
                                {isEnglish ? 'Lesson Introduction' : 'مقدمة الدرس'}
                              </h3>
                              <div className="bg-gradient-to-r from-teal-50/50 to-indigo-50/30 dark:from-teal-950/10 dark:to-indigo-950/10 border-r-4 border-teal-500 p-4 rounded-xl">
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                                  {c.intro}
                                </p>
                              </div>
                            </div>

                            {/* Detailed Sections */}
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800">
                              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="text-xl">📂</span>
                                {isEnglish ? 'Lesson Breakdown' : 'المحتوى والتبسيط والتحليل'}
                              </h3>
                              {sectionsHTML}
                            </div>

                            {/* Golden Notes Box for Normal Mode */}
                            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-900 dark:via-gray-950 dark:to-amber-950/20 p-6 md:p-8 rounded-3xl shadow-lg border-2 border-indigo-100 dark:border-amber-500/30 text-right space-y-4">
                              <div className="flex items-center justify-between border-b border-indigo-100 dark:border-amber-500/20 pb-3">
                                <h3 className="font-black text-lg text-indigo-900 dark:text-amber-400 flex items-center gap-2">
                                  <span className="text-2xl animate-pulse">📝</span>
                                  <span>مذكرتي الشخصية للمراجعة النهائية</span>
                                </h3>
                                <span className="text-[10px] bg-indigo-100 dark:bg-amber-950/40 text-indigo-700 dark:text-amber-300 font-extrabold px-3 py-1 rounded-full border border-indigo-200 dark:border-amber-500/30">
                                  ✨ مراجعة ليلة الامتحان
                                </span>
                              </div>
                              
                              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                اكتب هنا ملاحظاتك الهامة، القوانين الصعبة، التلخيصات أو النقاط الرئيسية التي ترغب في مراجعتها بسرعة قبل الامتحان. سيتم حفظ أي تعديل تلقائياً، ويمكنك تصفحها بالكامل مجمعة من "مذكرة المراجعة الذاتية" في القائمة الرئيسية.
                              </p>

                              <textarea
                                value={studentNotes[lessonKey || ''] || ''}
                                onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                                placeholder="ابدأ بكتابة ملخصاتك الذهبية لهذا الدرس هنا (مثال: قانون القوة الكهربية، شروط الاتزان، معادلة التفاعل...)"
                                className="w-full bg-white dark:bg-amber-950/15 border-2 border-indigo-100 dark:border-amber-500/30 rounded-2xl p-4 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-amber-400 text-right text-gray-800 dark:text-amber-100 placeholder-gray-400 dark:placeholder-amber-600/70 min-h-[140px] transition font-sans shadow-inner focus:ring-2 focus:ring-indigo-100 dark:focus:ring-amber-500/10"
                              />

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-1">
                                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                                  <span>💾</span>
                                  <span>تم الحفظ تلقائياً في حسابك</span>
                                </div>
                                <button
                                  onClick={() => setShowSummaryNotesModal(true)}
                                  className="text-[11px] text-indigo-600 hover:text-indigo-700 dark:text-amber-400 dark:hover:text-amber-300 font-black flex items-center gap-1 justify-end cursor-pointer bg-transparent border-0"
                                >
                                  <span>🔍 استعراض وطباعة مذكرة المراجعة الشاملة</span>
                                  <span>←</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 text-center">
                            <span className="text-5xl block mb-3">📂</span>
                            <h3 className="font-extrabold text-lg text-gray-800 dark:text-white mb-2">محتوى الدرس غير متوفر</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">شرح ومستندات هذا الجزء قيد التحضير حالياً.</p>
                          </div>
                        )}
                      </div>

                      {/* Right side: Action sidebar */}
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 sticky top-24">
                          <h3 className="font-extrabold text-base text-gray-800 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span>📋</span> تفاصيل الحصة والأنشطة
                          </h3>

                          <div className="space-y-3">
                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">المرحلة / المادة</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                {appState.subject.name} • {appState.grade.name}
                              </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">المدة الدراسية المقررة</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                ⏱️ {appState.lesson.duration}
                              </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">الفصل المنهجي</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                {appState.unit.name}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 space-y-4">
                            <div>
                              <button
                                onClick={() => {
                                  openLesson();
                                }}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-bold transition transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                              >
                                <span className="text-xl">📖</span>
                                <span>{appState.lesson.lessonTitle || (isEnglish ? 'Open Lesson Explanation' : 'افتح شرح الدرس')}</span>
                                <span className="text-sm">↗</span>
                              </button>
                              
                              {/* Quick Share Explanation Links */}
                              {appState.lesson.lessonUrl && (
                                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{isEnglish ? 'Share explanation:' : 'مشاركة الشرح:'}</span>
                                  <a 
                                    href={`https://wa.me/?text=${encodeURIComponent(`📚 شرح درس: ${appState.lesson.title}\nالرابط: ${appState.lesson.lessonUrl}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-500 transition text-[11px] font-bold"
                                    title="واتساب"
                                  >
                                    🟢 واتساب
                                  </a>
                                  <a 
                                    href={`https://t.me/share/url?url=${encodeURIComponent(appState.lesson.lessonUrl || '')}&text=${encodeURIComponent(`📚 شرح درس: ${appState.lesson.title}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-sky-500 transition text-[11px] font-bold"
                                    title="تليجرام"
                                  >
                                    🔵 تليجرام
                                  </a>
                                  <a 
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appState.lesson.lessonUrl || '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 transition text-[11px] font-bold"
                                    title="فيسبوك"
                                  >
                                    🔵 فيسبوك
                                  </a>
                                </div>
                              )}
                            </div>

                            <div>
                              <button
                                onClick={() => {
                                  openExam();
                                }}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-2xl font-bold transition transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                              >
                                <span className="text-xl">📝</span>
                                <span>{appState.lesson.examTitle || (isEnglish ? 'Take the Quiz' : 'ابدأ اختبار الحصة')}</span>
                                <span className="text-sm">↗</span>
                              </button>
                              
                              {/* Quick Share Exam Links */}
                              {appState.lesson.examUrl && (
                                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{isEnglish ? 'Share quiz:' : 'مشاركة الاختبار:'}</span>
                                  <a 
                                    href={`https://wa.me/?text=${encodeURIComponent(`📝 اختبار درس: ${appState.lesson.title}\nالرابط: ${appState.lesson.examUrl}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-500 transition text-[11px] font-bold"
                                    title="واتساب"
                                  >
                                    🟢 واتساب
                                  </a>
                                  <a 
                                    href={`https://t.me/share/url?url=${encodeURIComponent(appState.lesson.examUrl || '')}&text=${encodeURIComponent(`📝 اختبار درس: ${appState.lesson.title}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-sky-500 transition text-[11px] font-bold"
                                    title="تليجرام"
                                  >
                                    🔵 تليجرام
                                  </a>
                                  <a 
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appState.lesson.examUrl || '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 transition text-[11px] font-bold"
                                    title="فيسبوك"
                                  >
                                    🔵 فيسبوك
                                  </a>
                                </div>
                              )}
                            </div>

                            {/* Add to weekly planner button */}
                            <button
                              onClick={() => {
                                setPlannerLessonKey(`${getCurriculumKey()}-U${appState.unit!.id}-L${appState.lesson!.id}`);
                                setShowPlannerModal(true);
                              }}
                              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white py-3 rounded-2xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                              title="جدولة أسبوعية"
                            >
                              <span>📅</span>
                              <span>جدولة الدرس في جدول المذاكرة الأسبوعي</span>
                            </button>
                          </div>

                           {/* Quick Actions checklist */}
                          <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-xs font-bold text-gray-500">
                            <span>تعيين كقراءة:</span>
                            <button
                              onClick={() => toggleLessonRead(appState.lesson!, appState.unit!)}
                              className={`px-3 py-1.5 rounded-lg border transition cursor-pointer font-bold text-xs ${isRead ? 'bg-green-500 border-green-500 text-white hover:bg-green-600' : 'bg-slate-50 border-slate-200 text-gray-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300'}`}
                            >
                              {isRead ? '✓ تمت القراءة (إلغاء)' : 'تحديد كمقروء'}
                            </button>
                          </div>
                        </div>

                        {/* Interactive tips */}
                        <div className="bg-amber-50/50 dark:bg-amber-950/15 border-2 border-amber-200 dark:border-amber-900 rounded-3xl p-5 shadow-sm text-right">
                          <h4 className="font-extrabold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-2">
                            <span>💡</span> نصيحة المذاكرة الفعالة
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                            {isEnglish 
                              ? 'Study the lesson material in full details, memorize the formulas, and then take the test without a calculator to measure your mastery!' 
                              : 'راجع محتوى الدرس جيداً وبتركيز، وتأكد من حفظ القوانين الأساسية ثم انتقل للاختبار مباشرة لتقييم مستواك الفعلي!'}
                          </p>
                        </div>

                        {/* Keyboard shortcut help */}
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-3xl text-right">
                          <h4 className="font-bold text-xs text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                            <span>⌨️</span> اختصارات لوحة المفاتيح المتاحة
                          </h4>
                          <div className="space-y-2 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex justify-between items-center">
                              <span>الرجوع للمستوى السابق</span>
                              <kbd className="kbd">Esc</kbd>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>إضافة/إزالة من المفضلة</span>
                              <span><kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">D</kbd></span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>مشاركة سريعة للرابط</span>
                              <span><kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">S</kbd></span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Pomodoro Timer Card */}
                        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm text-right space-y-4">
                          <h4 className="font-extrabold text-slate-800 dark:text-white flex items-center gap-2 text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span>⏱️</span> مؤقت بومودورو التفاعلي
                          </h4>
                          
                          <div className="flex flex-col items-center justify-center py-2 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                            <span className="text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                              {pomodoroMode === 'study' ? 'جلسة دراسة مركزة 📖' : 'فترة راحة قصيرة ☕'}
                            </span>
                            <div className="text-4xl font-mono font-black text-gray-800 dark:text-slate-100 mb-2">
                              {Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0')}:{Math.floor(pomodoroSeconds % 60).toString().padStart(2, '0')}
                            </div>
                            
                            <div className="flex items-center gap-2.5">
                              <button
                                onClick={() => setPomodoroIsActive(!pomodoroIsActive)}
                                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 shadow-sm ${pomodoroIsActive ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                              >
                                <span>{pomodoroIsActive ? '⏸️ إيقاف' : '▶️ ابدأ'}</span>
                              </button>
                              <button
                                onClick={() => {
                                  setPomodoroIsActive(false);
                                  setPomodoroSeconds(pomodoroMode === 'study' ? 1500 : 300);
                                }}
                                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer"
                              >
                                🔄 إعادة ضبط
                              </button>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroMode('study');
                                setPomodoroSeconds(1500);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition cursor-pointer ${pomodoroMode === 'study' ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50' : 'bg-slate-50 dark:bg-slate-800 text-gray-500'}`}
                            >
                              دراسة (25 د)
                            </button>
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroMode('break');
                                setPomodoroSeconds(300);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition cursor-pointer ${pomodoroMode === 'break' ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50' : 'bg-slate-50 dark:bg-slate-800 text-gray-500'}`}
                            >
                              راحة (5 د)
                            </button>
                          </div>

                          {pomodoroTotalMinutesUsed > 0 && (
                            <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center font-bold">
                              📊 إجمالي وقت التركيز اليوم: {pomodoroTotalMinutesUsed} دقيقة
                            </p>
                          )}
                        </div>

                        {/* Student Notes Widget */}
                        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-amber-500/30 p-5 rounded-3xl shadow-sm text-right space-y-3">
                          <h4 className="font-extrabold text-slate-800 dark:text-amber-400 flex items-center gap-2 text-sm border-b border-slate-100 dark:border-amber-500/20 pb-2">
                            <span>✍️</span> مذكرتي الشخصية
                          </h4>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal">
                            دون ملاحظاتك السريعة، القوانين الصعبة أو الأسئلة الشائعة للرجوع إليها لاحقاً.
                          </p>
                          <textarea
                            value={studentNotes[lessonKey || ''] || ''}
                            onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                            placeholder="اكتب ملاحظاتك الهامة عن هذا الدرس..."
                            className="w-full bg-slate-50 dark:bg-amber-950/15 border border-slate-200/60 dark:border-amber-500/30 rounded-2xl p-3 text-xs focus:outline-none focus:border-indigo-500 dark:focus:border-amber-400 text-right text-gray-800 dark:text-amber-100 placeholder-gray-400 dark:placeholder-amber-600/70 min-h-[100px] transition font-sans shadow-inner"
                          />
                          <div className="text-[10px] text-indigo-600 dark:text-amber-400 font-bold flex items-center justify-between">
                            <span>💾 يتم الحفظ تلقائياً</span>
                            <span className="opacity-80">متاحة في المراجعة الذاتية 👆</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>
        )}

      </main>

      {/* GLOBAL PWA INSTALLATION CARD FOR DEVICES */}
      {!isFocusMode && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 mt-4">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-100 dark:border-indigo-950/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-md shrink-0 text-3xl">
                📲
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-800 dark:text-white">تثبيت تطبيق 4U على الأجهزة</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  قم بتثبيت التطبيق مباشرة على جهازك المحمول أو الكمبيوتر للاستمتاع والتعلم بوضع ملء الشاشة مع وصول فائق السرعة وتوفير البيانات!
                </p>
              </div>
            </div>
            
            <button
              onClick={handleInstallApp}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-xs shrink-0 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>تثبيت التطبيق على جهازي</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. FOOTER */}
      <footer className="bg-slate-900 text-white py-10 mt-auto border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 select-none">
            <span className="text-3xl font-black text-amber-400 tracking-tighter">4U</span>
            <span className="h-6 w-[1px] bg-slate-700" />
            <span className="font-extrabold text-lg text-slate-100">منصة 4U الرقمية</span>
          </div>
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            مكتبة تفاعلية رقمية مبسطة تم تطويرها باحترافية لتغطية المقررات الأساسية لمواد الفيزياء والرياضيات والكيمياء والأحياء.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Mr. Mohammed Hesham | mohammedhesham872@gmail.com | +971555642674</p>
            <p>© 2026 جميع الحقوق محفوظة لمنصة 4U التعليمية</p>
          </div>
        </div>
      </footer>

      {/* 5. FLOATING INSTALL BUTTON */}
      {installPrompt && (
        <div className="fixed bottom-6 left-6 z-40 animate-bounce">
          <button 
            onClick={handleInstallApp}
            className="bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            title="تثبيت التطبيق على جهازك"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      )}

      {/* 6. TOAST BANNER OVERLAY */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            className="toast select-none"
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
          >
            <span className="font-semibold text-sm text-center block text-white">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* 7. ALL MODAL WINDOWS (MODAL CONTAINER) */}
      {/* ========================================== */}

      {/* MODAL 1: FAVORITES BANNER */}
      {showFavoritesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowFavoritesModal(false)}>
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full max-h-[80vh] flex flex-col p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>❤️</span> الدروس المفضلة ({favorites.length})
              </h3>
              <button onClick={() => setShowFavoritesModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
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
                      // Extract context from key
                      // key style: subject-grade-stream-term-U[id]-L[id]
                      // e.g. math-12-inspire-3-U1-L2
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
                        
                        // Parse unit and lesson IDs from U[id] and L[id]
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
                      setShowFavoritesModal(false);
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
                        // Find matching lesson & unit from database to call existing toggleFavorite
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
                          // fallback filter
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
      )}

      {/* MODAL 2: USER METRICS & STATISTICS */}
      {showStatsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowStatsModal(false)}>
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>📊</span> إحصائياتي الدراسية
              </h3>
              <button onClick={() => setShowStatsModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
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
                <div class="text-[10px] opacity-80 font-bold">وقت الدراسة الفعلي</div>
              </div>

              <div className="gradient-warm text-slate-900 p-4 rounded-2xl text-center shadow-md">
                <span className="text-3xl block mb-1">🏆</span>
                <span className="text-2xl font-black block">{stats.completionRate}%</span>
                <span class="text-sm opacity-90 font-bold">نسبة الإنجاز الإجمالية</span>
              </div>
            </div>

            {/* Completion indicator */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span class="font-bold text-sm dark:text-gray-300">التقدم الإجمالي للمناهج</span>
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
                  setShowStatsModal(false);
                  setShowCertificateModal(true);
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
      )}

      {/* MODAL 3: CERTIFICATE GENERATOR */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={() => setShowCertificateModal(false)}>
          <div 
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>🏆</span> شهادة التفوق والتقدير الرقمية
              </h3>
              <button onClick={() => setShowCertificateModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
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
                  const certArea = document.getElementById('print-certificate-area');
                  if (!certArea) return;
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
                onClick={() => setShowCertificateModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-slate-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: SHARE PANEL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowShareModal(null)}>
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
              <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                <span>📤</span> مشاركة الدرس
              </h3>
              <button onClick={() => setShowShareModal(null)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-5 leading-relaxed">
              شارك هذا الدرس وادعم مسيرة التفوق والتحصيل لزملائك!
            </p>

            {/* Quick Share buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(`📚 ${showShareModal.title}\nمنصة 4U التعليمية: ${showShareModal.url}`)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 text-xs font-bold transition duration-300"
              >
                <span className="text-xl">💬</span>
                <span>واتساب</span>
              </a>

              <a 
                href={`https://t.me/share/url?url=${encodeURIComponent(showShareModal.url)}&text=${encodeURIComponent(`📚 ${showShareModal.title}`)}`}
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
                  navigator.clipboard.writeText(showShareModal.url).then(() => {
                    showToastMsg('✅ تم نسخ الرابط بنجاح');
                    setShowShareModal(null);
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
                value={showShareModal.url}
                className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-gray-500 dark:text-gray-400 text-xs px-3 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: STUDY PLANNER MODAL */}
      {showPlannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={() => setShowPlannerModal(false)}>
          <div 
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>📅</span> جدولة حصة مذاكرة أسبوعية
              </h3>
              <button onClick={() => setShowPlannerModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
            </div>

            <form onSubmit={(e) => {
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
                // If they typed a custom title
                const customInput = (document.getElementById('custom-lesson-title-input') as HTMLInputElement)?.value || '';
                if (!customInput.trim()) {
                  showToastMsg('⚠️ يرجى اختيار درس أو كتابة عنوان مخصص');
                  return;
                }
                lessonTitle = customInput;
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

              // Reset form & close
              setPlannerLessonKey('');
              setPlannerNotes('');
              setShowPlannerModal(false);
            }} className="space-y-4">
              
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
                  
                  {/* Stagger lessons by subject */}
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
                    id="custom-lesson-title-input"
                    type="text"
                    placeholder="مثال: مراجعة الوحدة الأولى في التربية الإسلامية"
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
                  onClick={() => setShowPlannerModal(false)}
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 6: STUDENT SELF-SUMMARY NOTES REVIEWER */}
      {showSummaryNotesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={() => setShowSummaryNotesModal(false)}>
          <div 
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>📚</span> مذكرة المراجعة الذاتية للملاحظات
              </h3>
              <button onClick={() => setShowSummaryNotesModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              هنا تجد جميع التلخيصات والملاحظات التي قمت بتدوينها أثناء مذاكرتك للدروس المختلفة لتراجعها بسرعة قبل الاختبار.
            </p>

            {(() => {
              const activeNotes = Object.entries(studentNotes).filter(([_, text]) => text && (text as string).trim().length > 0) as [string, string][];
              const lessonsList = getAllAvailableLessons();

              if (activeNotes.length === 0) {
                return (
                  <div className="text-center py-12 flex-1 flex flex-col justify-center items-center">
                    <span className="text-5xl block mb-3 animate-pulse">✍️</span>
                    <h4 className="font-extrabold text-gray-700 dark:text-gray-300 mb-1.5 text-sm">مذكرتك الذاتية فارغة حالياً</h4>
                    <p className="text-xs text-gray-400 dark:text-gray-500 max-w-sm mx-auto leading-relaxed">
                      ابدأ في تدوين الملاحظات، الصيغ الرياضية، أو ملخصات القوانين أثناء تصفح أي درس عبر استخدام صندوق "مذكرتي الشخصية" في جانب صفحة الدرس.
                    </p>
                  </div>
                );
              }

              return (
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
                                  // Navigate directly to that lesson
                                  const parts = matched.curriculumKey.split('-');
                                  const sub = matched.subject;
                                  const gr = matched.grade;
                                  const tr = matched.term;
                                  const str = parts[2] !== 'general' ? DB.streams.find(s => s.id === 'advanced') : DB.streams.find(s => s.id === 'general');
                                  const pr = parts[2] !== 'general' ? DB.programs.find(p => p.id === parts[2]) || null : null;

                                  if (str) {
                                    setHistory(prev => [...prev, { ...appState }]);
                                    setAppState({
                                      term: tr,
                                      stream: str,
                                      program: pr as Program,
                                      grade: gr,
                                      subject: sub,
                                      unit: matched.unit,
                                      lesson: matched.lesson
                                    });
                                    setShowSummaryNotesModal(false);
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
                      onClick={() => {
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
                      }}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-xs cursor-pointer"
                    >
                      <span>🖨️</span>
                      <span>طباعة وتصدير مذكرة الملاحظات</span>
                    </button>
                    <button
                      onClick={() => setShowSummaryNotesModal(false)}
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition text-xs cursor-pointer"
                    >
                      إغلاق
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* MODAL 7: DAILY STUDY REMINDER SETTING */}
      {showReminderSettingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowReminderSettingModal(false)}>
          <div 
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>🔔</span> ضبط المنبه والتذكير اليومي
              </h3>
              <button onClick={() => setShowReminderSettingModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
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
                  setShowReminderSettingModal(false);
                }}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition shadow-md cursor-pointer"
              >
                تم وحفظ الإعدادات
              </button>
              <button 
                onClick={() => setShowReminderSettingModal(false)}
                className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 py-3 px-6 rounded-2xl font-bold transition cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 8: ALARM TRIGGERED NOTIFICATION SCREEN */}
      {showAlarmTriggeredModal && (
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
                  setShowAlarmTriggeredModal(false);
                  goHome();
                  showToastMsg('🚀 بالتوفيق! ابدأ جلسة دراسة مميزة الآن');
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-2xl transition shadow-lg transform hover:scale-[1.02] cursor-pointer"
              >
                📖 البدء بالدراسة الآن!
              </button>
              <button 
                onClick={() => setShowAlarmTriggeredModal(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 py-2.5 rounded-2xl font-bold transition text-xs cursor-pointer"
              >
                تذكيري لاحقاً (إغلاق التنبيه)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 9: MANUAL PWA INSTALLATION GUIDE */}
      {showInstallInstructionsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={() => setShowInstallInstructionsModal(false)}>
          <div 
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right flex flex-col animate-in fade-in zoom-in-95 duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 flex-row-reverse">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <span>📲</span> دليل تثبيت التطبيق على جهازك
              </h3>
              <button onClick={() => setShowInstallInstructionsModal(false)} className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none">×</button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
              يمكنك تشغيل منصة 4U كتطبيق مستقل ومباشر على هاتفك، جهازك اللوحي أو حاسوبك باتباع الخطوات البسيطة التالية حسب نوع جهازك ومتصفحك:
            </p>

            <div className="space-y-4 overflow-y-auto max-h-[55vh] pr-1 pl-1 text-right">
              {/* iPhone / iPad */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4">
                <h4 className="font-extrabold text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-2 flex-row-reverse mb-2">
                  <span>🍎</span> أجهزة آبل (iOS / iPhone / iPad):
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700 dark:text-gray-300 pr-2">
                  <li>افتح هذا الرابط عبر متصفح <strong className="text-gray-900 dark:text-white">Safari</strong> الرسمي.</li>
                  <li>اضغط على زر المشاركة <span className="font-bold">"Share"</span> (أيقونة المربع مع سهم للأعلى في الأسفل).</li>
                  <li>اختر خيار <strong className="text-gray-900 dark:text-white">"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)</strong>.</li>
                  <li>اضغط على <span className="font-bold">"إضافة" (Add)</span> في الزاوية العلوية لتأكيد التثبيت.</li>
                </ol>
              </div>

              {/* Android */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4">
                <h4 className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2 flex-row-reverse mb-2">
                  <span>🤖</span> أجهزة أندرويد (Google Chrome):
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700 dark:text-gray-300 pr-2">
                  <li>اضغط على النقاط الثلاث <span className="font-bold">(⋮)</span> في الزاوية العلوية للمتصفح.</li>
                  <li>اختر <strong className="text-gray-900 dark:text-white">"تثبيت التطبيق" (Install app)</strong> أو <strong className="text-gray-900 dark:text-white">"الإضافة إلى الشاشة الرئيسية"</strong>.</li>
                  <li>اضغط على <span className="font-bold">"تثبيت"</span> للتأكيد وسيظهر التطبيق على شاشتك فوراً.</li>
                </ol>
              </div>

              {/* Desktop / Laptop */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4">
                <h4 className="font-extrabold text-sm text-purple-600 dark:text-purple-400 flex items-center gap-2 flex-row-reverse mb-2">
                  <span>💻</span> أجهزة الكمبيوتر (Chrome / Edge):
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700 dark:text-gray-300 pr-2">
                  <li>انظر إلى شريط العنوان في الأعلى، ستجد رمز شاشة صغيرة مع سهم لأسفل أو أيقونة تثبيت.</li>
                  <li>اضغط على الأيقونة ثم اختر <strong className="text-gray-900 dark:text-white">"تثبيت" (Install)</strong>.</li>
                  <li>أو من القائمة <span className="font-bold">(⋮)</span> اختر <strong className="text-gray-900 dark:text-white">"الحفظ والمشاركة" ← "تثبيت تطبيق 4U"</strong>.</li>
                </ol>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowInstallInstructionsModal(false)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-2xl transition text-xs cursor-pointer"
              >
                فهمت ذلك
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
