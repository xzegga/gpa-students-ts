import React, { useState } from 'react';
import { Student } from './model';
import Courses from './Courses';
import {
  makeStyles, IconButton, TableCell,
  TableRow, KeyboardArrowDownIcon, KeyboardArrowUpIcon
} from '../../material';


const useRowStyles = makeStyles({
  root: { '& > *': { borderBottom: 'unset', }},
});

interface IProps {
  student: Student
}

const Row: React.FC<IProps> = ({ student }) => {

  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand student" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="student" align="center">{student.id}</TableCell>
        <TableCell>{student.name}</TableCell>
        <TableCell>{student.email}</TableCell>
        <TableCell align="center">{student.gpa}</TableCell>
      </TableRow>
      <Courses open={open} courses={student.courses} />
    </React.Fragment>
  )
}

export default Row;