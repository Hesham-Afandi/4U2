import { Database } from '../types';
import { terms, streams, programs } from './settings';
import { grades } from './grades';
import { subjects } from './subjects';
import { curriculums } from './curriculums';

export const DB: Database = {
  terms,
  streams,
  programs,
  grades,
  subjects,
  curriculum: curriculums
};

export { countries } from './countries';
export { grades } from './grades';
export { subjects } from './subjects';
export { curriculums } from './curriculums';
export { terms, streams, programs } from './settings';
