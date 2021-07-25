import React from 'react';
import { Course } from './model';
import {
  Box, Collapse, Table, TableBody, TableCell,
  TableHead, TableRow, Typography
} from '../../material';


interface IProps {
  open: boolean,
  courses: Course[]
}

const Courses: React.FC<IProps> = ({ open, courses }) => {

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Courses
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell align="center">Score</TableCell>
                    <TableCell align="center">Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courses.map((course: Course) => (
                    <TableRow key={course.id}>
                      <TableCell component="th" scope="course">{course.name}</TableCell>
                      <TableCell align="center">{course.score}</TableCell>
                      <TableCell align="center">{course.letter}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Courses;