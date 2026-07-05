import { Database } from '../types';
import { math12Curriculum } from './math12';
import { mathOthersCurriculum } from './mathOthers';
import { physics12Curriculum } from './physics12';
import { physicsOthersCurriculum } from './physicsOthers';

export const DB: Database = {
  terms: [
    { id: 1, name: 'الترم الأول', icon: '📘' },
    { id: 2, name: 'الترم الثاني', icon: '📗' },
    { id: 3, name: 'الترم الثالث', icon: '📕' }
  ],
  streams: [
    { id: 'advanced', name: 'متقدم', icon: '🚀', desc: 'منهج متقدم ومكثف' },
    { id: 'general', name: 'عام', icon: '📚', desc: 'منهج أساسي وشامل' }
  ],
  programs: [
    { id: 'inspire', name: 'INSPIRE', icon: '🌟', desc: 'برنامج الإلهام والتميز - المحتوى باللغة الإنجليزية', isEnglish: true },
    { id: 'bridge', name: 'BRIDGE', icon: '🌉', desc: 'برنامج الجسر التأهيلي', isEnglish: false }
  ],
  grades: [
    { id: 9, name: 'الصف التاسع', icon: '🎒' },
    { id: 10, name: 'الصف العاشر', icon: '📐' },
    { id: 11, name: 'الصف الحادي عشر', icon: '⚡' },
    { id: 12, name: 'الصف الثاني عشر', icon: '🎓' }
  ],
  subjects: [
    { id: 'physics', name: 'الفيزياء', icon: '⚛️' },
    { id: 'math', name: 'الرياضيات', icon: '📐' },
    { id: 'chemistry', name: 'الكيمياء', icon: '🧪' },
    { id: 'biology', name: 'الأحياء', icon: '🧬' }
  ],
  curriculum: {
    ...math12Curriculum,
    ...mathOthersCurriculum,
    ...physics12Curriculum,
    ...physicsOthersCurriculum
  }
};
