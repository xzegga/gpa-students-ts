import React, { useState } from 'react'
import { Container, FormControl, TextField, Box, Button, SaveIcon } from 'material'
import { useStyles } from './table/styles'
import { addStudentsAsync } from './slices'
import { useAppDispatch } from 'state/hooks'
import { Student } from './model'
import validator from 'validator'

function AddStudent() {
  const classes = useStyles()
  const initialStudentState: Student = { name: '', email: '' }
  const [student, setStudent] = useState<Student>(initialStudentState)

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (!student.name || !student.email) {
      return
    }
    dispatch(addStudentsAsync(student))
    setStudent(initialStudentState)
  }

  return (
    <Container className={classes.container}>
      <FormControl>
        <Box display="flex">
          <TextField
            required value={student.name} id="outlined-required" label="Student Name"
            placeholder="Jhon Doe" onChange={handleChange} name="name"
            error={validator.isEmpty(student.name)} helperText={
              validator.isEmpty(student.name) && "Name is required"}
          />
          <TextField
            required id="outlined-required" label="E-Mail" value={student.email}
            placeholder="jhon.doe@domain.com" onChange={handleChange} name="email"
            error={!validator.isEmail(student.email)} 
            helperText={!validator.isEmail(student.email) && "Email need to have a valid format"}
          />
          <Button startIcon={<SaveIcon />} variant="contained" color="primary" onClick={handleClick}>
            Save
          </Button>
        </Box>
      </FormControl>

    </Container>
  )
}

export default AddStudent


