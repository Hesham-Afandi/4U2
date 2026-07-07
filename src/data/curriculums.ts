import { Curriculum } from '../types';
import { math12Curriculum } from '../curriculum/uae/moe/grade12/math';
import { physics12Curriculum } from '../curriculum/uae/moe/grade12/physics';
import { mathOthersCurriculum } from '../curriculum/mathOthers';
import { physicsOthersCurriculum } from '../curriculum/physicsOthers';
import {
  phy12General1,
  phy12Inspire1,
  math11AdvBridge1,
  math12General1
} from '../curriculum/uae/addedCurriculums';

export const curriculums: Record<string, Curriculum> = {
  ...math12Curriculum,
  ...mathOthersCurriculum,
  ...physics12Curriculum,
  ...physicsOthersCurriculum,

  // Added UAE Curriculums
  'physics-12-general-1': phy12General1,
  'UAE-physics-12-general-1': phy12General1,
  'phy-12-general-1': phy12General1,
  'UAE-phy-12-general-1': phy12General1,

  'physics-12-inspire-1': phy12Inspire1,
  'UAE-physics-12-inspire-1': phy12Inspire1,
  'phy-12-inspire-1': phy12Inspire1,
  'UAE-phy-12-inspire-1': phy12Inspire1,

  'math-11-bridge-1': math11AdvBridge1,
  'UAE-math-11-bridge-1': math11AdvBridge1,
  'math-11-adv-bridge-1': math11AdvBridge1,
  'UAE-math-11-adv-bridge-1': math11AdvBridge1,

  'math-12-general-1': math12General1,
  'UAE-math-12-general-1': math12General1
};
