import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { StudentState } from './model';
import { getGradesAsync, getStudentsAsync, selectStudents } from './slices';
import TableList from './table/TableList';


const StudentList: React.FC = () => {  
  const students: StudentState = useAppSelector(selectStudents);
 

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getStudentsAsync())
    dispatch(getGradesAsync())
  }, [dispatch])

  return (
    <TableList students={students} />
  )
}


export default StudentList