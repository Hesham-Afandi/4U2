import { Term, Stream, Program } from '../types';

export const terms: Term[] = [
  { id: 1, name: 'الترم الأول', icon: '📘' },
  { id: 2, name: 'الترم الثاني', icon: '📗' },
  { id: 3, name: 'الترم الثالث', icon: '📕' }
];

export const streams: Stream[] = [
  { id: 'advanced', name: 'متقدم', icon: '🚀', desc: 'منهج متقدم ومكثف' },
  { id: 'general', name: 'عام', icon: '📚', desc: 'منهج أساسي وشامل' }
];

export const programs: Program[] = [
  { id: 'inspire', name: 'INSPIRE', icon: '🌟', desc: 'برنامج الإلهام والتميز - المحتوى باللغة الإنجليزية', isEnglish: true },
  { id: 'bridge', name: 'BRIDGE', icon: '🌉', desc: 'برنامج الجسر التأهيلي', isEnglish: false }
];
