import React, { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { Student, StudentState } from './model';
import { getStudentsAsync, selectStudents } from './slices';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '../../material';
import Row from './Row';

const Students: React.FC = () => {

  const students: StudentState = useAppSelector(selectStudents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStudentsAsync())
  }, [dispatch])


  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="center">Overal GPA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.summary.map((student: Student) => (
            <Row key={student.name} student={student} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Students