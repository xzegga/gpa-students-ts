export interface Course {
  id: number;
  name: string;
  score: number;
  letter: string;
}

export interface Student {
  id?: string;
  name: string;
  email: string;
}

export interface StucentGrades extends Student {
  courses: Course[],
  gpa: number;
}

export interface StudentResponse {
  students: StucentGrades[]
}

export enum STATUS {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed'
}

export interface StudentState {
  summary: StucentGrades[];
  status:  STATUS.idle | STATUS.loading | STATUS.failed;
  error: string;
}
