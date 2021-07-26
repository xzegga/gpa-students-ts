import React from 'react';
import { Course } from '../model';
import { Box, Collapse, Alert } from 'material';
import Courses from './Courses';

interface IProps {
  open: boolean,
  courses: Course[]
}

const Panel: React.FC<IProps> = ({ open, courses }) => {

  return (
    <React.Fragment>
      <Collapse in={open} timeout="auto" unmountOnExit>
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