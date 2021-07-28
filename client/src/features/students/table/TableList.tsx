import React, { useState, useEffect } from 'react'
import {
  Table, TableBody, TableCell, TableHead, TableRow,
  LinearProgress, Alert, SearchBar, Box, TableFooter, TablePagination
} from 'material-ui';
import { StudentList, StudentState, STATUS } from '../model';
import Row from './Row';
import { useStyles } from '../styles';
import Header from './Header'
import Paging from './Paging'

interface IProps {
  students: StudentState
}

const TableList: React.FC<IProps> = ({ students }) => {
  const classes = useStyles();

  const [rows, setRows] = useState<StudentList[]>(students.summary);
  const [searched, setSearched] = useState<string>("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const requestSearch = (searchedVal: string) => {
    let filteredRows = students.summary.filter((row) => {
      const matchName = row.name.toLowerCase().includes(searchedVal.toLowerCase())
      const course = row.courses.filter((cr) => {
        return cr.name.toLowerCase().includes(searchedVal.toLowerCase())
      })

      return matchName || course.length
    });

    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    setRows(students.summary);
  };

  useEffect(() => {
    setRows(students.summary);
  }, [students.summary])

  return (
    <div className={classes.container}>
      <Header />
      <Box px={2}>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          placeholder="Search by student or course"
        />
      </Box>
      {
        students.status === STATUS.idle &&
        <div className={classes.tableContainer}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tHeader} />
                <TableCell align="center" className={classes.tHeader}>ID</TableCell>
                <TableCell align="left" className={classes.tHeader}>Student Name</TableCell>
                <TableCell align="left" className={classes.tHeader}>E-mail</TableCell>
                <TableCell align="center" className={classes.tHeader}>Overal GPA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((student: StudentList) => (
                  <Row key={student.id} student={student} />
                ))
              }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 12, 20, { label: 'All', value: -1 }]}
                  colSpan={5}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={Paging}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      }
      {students.status === STATUS.loading && <LinearProgress />}
      {students.status === STATUS.failed && <Alert severity="error">There is a connection error, try again later</Alert>}
    </div>
  )
}

export default TableList
