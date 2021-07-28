export interface Commons {
  id?: number;
  name: string;
}

export interface Grade {
  id: number;
  score: number;
  letter: string;
}

export interface Course extends Commons {
  score: number;
  letter: string;
}

export interface Student extends Commons {
  email: string;
}

export interface StudentCourse extends Commons {
  grade: number,
  student: number;
}

export interface StudentList extends Student {
  courses: Course[],
  gpa: number;
}

export interface StudentResponse {
  students: StudentList[]
}
export interface GradesResponse {
  grades: Grade[]
}

export enum STATUS {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed'
}

export interface StudentState {
  summary: StudentList[];
  status:  STATUS.idle | STATUS.loading | STATUS.failed;
  error: string;
  grades: Grade[];
}
