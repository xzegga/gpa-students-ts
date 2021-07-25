export interface Course {
  id: number;
  name: string;
  score: number;
  letter: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  courses: Course[],
  gpa: number;
}

export enum STATUS {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed'
}

export interface StudentState {
  summary: Student[];
  status:  STATUS.idle | STATUS.loading | STATUS.failed;
}
