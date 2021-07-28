import React, { useState } from 'react';
import { StudentList } from '../model';
import Panel from './Panel';
import {
  IconButton, TableCell, TableRow,
  KeyboardArrowDownIcon, KeyboardArrowUpIcon, Chip,
  SentimentVeryDissatisfiedIcon,
  SentimentDissatisfiedIcon,
  SentimentSatisfiedIcon,
  SentimentSatisfiedAltIcon,
  SentimentVerySatisfiedIcon,
} from 'material-ui';
import { useRowStyles } from '../styles';


interface IProps {
  student: StudentList
}

const Row: React.FC<IProps> = ({ student }) => {

  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  let icon;

  if (student.gpa >= 4) {
    icon = <SentimentVerySatisfiedIcon />
  } else if (student.gpa >= 3) {
    icon = <SentimentSatisfiedAltIcon />
  } else if (student.gpa >= 2) {
    icon = <SentimentSatisfiedIcon />
  } else if (student.gpa >= 1) {
    icon = <SentimentDissatisfiedIcon />
  } else {
    icon = <SentimentVeryDissatisfiedIcon />
  }

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
        <TableCell align="center">
          {
            student.courses.length > 0 ? (
              <Chip
                icon={icon}
                label={student.gpa.toFixed(2)}
                variant="outlined"
                className={classes.chip}
              />
            ) : 'N/A' 
          }

        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.panelRow} colSpan={6}>
          <Panel open={open} courses={student.courses} student={student} />
        </TableCell>
      </TableRow>
    </React.Fragment >
  )
}

export default Row;