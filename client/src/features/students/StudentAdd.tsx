import React, { useState } from 'react'
import {
  Container, FormControl, TextField, Box, Button, SaveIcon, withStyles, WithStyles, Theme,
  Dialog, MuiDialogTitle, MuiDialogContent, MuiDialogActions, Typography, IconButton,
  CloseIcon, PersonAddIcon
} from 'material-ui'
import { addStudentStyles, dialogStyles } from './styles'
import { addStudentsAsync } from './slices'
import { useAppDispatch } from 'state/hooks'
import { Student } from './model'
import validator from 'validator'


export interface DialogTitleProps extends WithStyles<typeof dialogStyles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(dialogStyles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);


function AddStudent() {
  const classes = addStudentStyles()
  const initialLocalState: Student = { name: '', email: '' }
  const [student, setStudent] = useState<Student>(initialLocalState)

  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)

  const [open, setOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleKeyDown = (event: any): void => {
    if (event.key === 'Enter') {
      handleClick()
      setOpen(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNameValid(validator.isEmpty(student.name))
    setEmailValid(!validator.isEmail(student.email))
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (validator.isEmpty(student.name) || !validator.isEmail(student.email)) {
      setNameValid(validator.isEmpty(student.name))
      setEmailValid(!validator.isEmail(student.email))
    } else {
      dispatch(addStudentsAsync(student))
      setStudent(initialLocalState)
      setOpen(false)
      setNameValid(false)
      setEmailValid(false)
    }
  }

  return (
    <Container className={classes.addCourse}>


      <Box textAlign="right">
        <Button startIcon={<PersonAddIcon />} variant="outlined" color="primary" onClick={handleClickOpen} className={classes.add}>
          Add New Student
        </Button>
      </Box>

      <Dialog onClose={() => setOpen(false)} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={() => setOpen(false)}>
          Add New Student
        </DialogTitle>
        <DialogContent dividers>
          <FormControl>
            <Box display="flex" p={2}>
              <TextField className={classes.input}
                required value={student.name} id="name" label="Student Name"
                placeholder="Jhon Doe" onChange={handleChange} name="name"
                error={nameValid} helperText={validator.isEmpty(student.name) && "Name is required"}
              />
              <TextField className={classes.input}
                required id="email" label="E-mail" value={student.email}
                placeholder="jhon.doe@domain.com" onChange={handleChange} name="email"
                error={emailValid}
                helperText={!validator.isEmail(student.email) && "E-mail need to have a valid format"}
                onKeyDown={handleKeyDown}
              />
            </Box>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<SaveIcon />} color="primary" className={classes.save} onClick={handleClick}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AddStudent


