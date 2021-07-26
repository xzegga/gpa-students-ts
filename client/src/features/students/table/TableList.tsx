import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, Alert } from 'material';
import { StucentGrades, StudentState, STATUS } from '../model';
import Row from './Row';
import { useStyles } from './styles';

interface IProps {
  students: StudentState
}

const TableList: React.FC<IProps> = ({ students }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      {
        students.status === STATUS.idle &&
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headers} />
              <TableCell align="center" className={classes.headers}>ID</TableCell>
              <TableCell align="left" className={classes.headers}>Name</TableCell>
              <TableCell align="left" className={classes.headers}>E-mail</TableCell>
              <TableCell align="center" className={classes.headers}>Overal GPA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.summary.map((student: StucentGrades) => (
              <Row key={student.name} student={student} />
            ))}
          </TableBody>
        </Table>

      }
      {students.status === STATUS.loading && <LinearProgress />}
      {students.status === STATUS.failed && <Alert severity="error">There is a connection error, try again later</Alert>}
    </TableContainer>
  )
}

export default TableList
