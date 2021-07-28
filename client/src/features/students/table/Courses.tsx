import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from 'material-ui';
import { Course } from '../model';
import { useStyles } from '../styles';

export interface IProps {
  courses: Course[]
}

const Courses: React.FC<IProps> = ({ courses }) => {
  const classes = useStyles();
  
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell className={classes.panelHeader}>Course Name</TableCell>
          <TableCell className={classes.panelHeader} align="center">Score</TableCell>
          <TableCell className={classes.panelHeader} align="center">Grade</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {courses.map((course: Course) => (
          <TableRow key={course.id}>
            <TableCell component="th" scope="course" className={classes.noBorder}>{course.name}</TableCell>
            <TableCell align="center" className={classes.noBorder}>{course.score}</TableCell>
            <TableCell align="center" className={classes.noBorder}>{course.letter}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Courses;