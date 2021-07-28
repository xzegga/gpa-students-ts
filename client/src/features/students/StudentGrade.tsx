import {
  FormControl, Select, TextField, Box, Button, InputLabel, MenuItem,
  CollectionsBookmarkOutlinedIcon
} from 'material-ui'
import React, { useState } from 'react';
import { Grade, Student, StudentCourse } from './model';
import { addCourseAsync, selectGrades } from './slices';
import { addGradeStyles } from './styles'
import { useAppDispatch, useAppSelector } from 'state/hooks';
import validator from 'validator'

export interface IProps {
  student: Student;
}

const StudentGrade: React.FC<IProps> = ({ student }) => {

  const [curseValid, setCurseValid] = useState(false)

  const classes = addGradeStyles()
  const grades: Grade[] = useAppSelector(selectGrades);

  const initialLocalState: StudentCourse = {
    name: '',
    student: student.id || 0,
    grade: grades[0].id
  }

  const [studentCourse, setStudentCourse] = useState<StudentCourse>(initialLocalState)

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStudentCourse({
      ...studentCourse,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStudentCourse({
      ...studentCourse,
      grade: event.target.value as number
    });
  };

  const handleClick = (): void => {    
    if (validator.isEmpty(studentCourse.name)) {
      setCurseValid(validator.isEmpty(studentCourse.name))
    } else {
      dispatch(addCourseAsync(studentCourse))
      setStudentCourse(initialLocalState)
      setCurseValid(false)
    }
  }

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" p={1}>
        <FormControl className={classes.formControl}>
          <TextField className={classes.input}
            required value={studentCourse.name} id="name" label="Course Name"
            placeholder="Math" onChange={handleChange} name="name"
            error={curseValid}
          />

        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="grade-native-simple">Grade</InputLabel>
          <Select
            labelId="grade-native-simple"
            name='grade'
            id='grade-native-simple' value={studentCourse.grade}
            onChange={handleChangeSelect}
            defaultValue={""}
          >
            {grades.map(grade => (
              <MenuItem key={grade.id} value={grade.id}>{grade.letter}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button startIcon={<CollectionsBookmarkOutlinedIcon />} variant="outlined" color="primary" className={classes.add} onClick={handleClick}>
          Add New Course
        </Button>
      </Box>
    </React.Fragment>
  )
}

export default StudentGrade