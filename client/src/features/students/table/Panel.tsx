import React from 'react';
import { Course, Student } from '../model';
import { Box, Collapse, Alert } from 'material-ui';
import Courses from './Courses';
import StudentGrade from '../StudentGrade';

interface IProps {
  open: boolean,
  courses: Course[],
  student: Student
}

const Panel: React.FC<IProps> = ({ open, courses, student }) => {

  return (
    <React.Fragment>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StudentGrade student={student}/>
        <Box margin={2} margin-botton={0}>
          {
            courses.length
              ? (<Courses courses={courses} />)
              : (<Alert severity="warning">This student does not take any course yet</Alert>)
          }

        </Box>
      </Collapse>
    </React.Fragment>
  )
}

export default Panel;