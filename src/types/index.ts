export interface Term {
  id: number;
  name: string;
  icon: string;
}

export interface Stream {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

export interface Program {
  id: string;
  name: string;
  icon: string;
  desc: string;
  isEnglish: boolean;
}

export interface Grade {
  id: number;
  name: string;
  icon: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
}

export interface LessonSection {
  title: string;
  type: 'formula' | 'table' | 'bullets' | 'text';
  content?: string | string[];
  headers?: string[];
  rows?: string[][];
}

export interface LessonContent {
  intro: string;
  sections: LessonSection[];
}

export interface Lesson {
  id: number;
  title: string;
  icon: string;
  duration: string;
  lessonUrl: string;
  examUrl: string;
  lessonTitle?: string;
  examTitle?: string;
  content?: LessonContent;
}

export interface Unit {
  id: number;
  name: string;
  icon: string;
  color: string;
  description?: string;
  lessons: Lesson[];
}

export interface Curriculum {
  isEnglish: boolean;
  units: Unit[];
}

export interface Database {
  terms: Term[];
  streams: Stream[];
  programs: Program[];
  grades: Grade[];
  subjects: Subject[];
  curriculum: Record<string, Curriculum>;
}

export interface AppState {
  country: string | null;
  term: Term | null;
  stream: Stream | null;
  program: Program | null;
  grade: Grade | null;
  subject: Subject | null;
  unit: Unit | null;
  lesson: Lesson | null;
}

export interface StudyPlanItem {
  id: string;
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
}

