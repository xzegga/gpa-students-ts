import {
  makeStyles, createStyles, Theme,
} from 'material-ui';


export const useStyles = makeStyles({
  container: {
    maxWidth: 700,
    margin: '0 auto',
    color: 'rgba(0, 0, 0, 0.87)',
    width: '100%',
    border: 0,
    display: 'flex',
    position: 'relative',
    minWidth: 0,
    wordWrap: 'break-word',
    background: '#FFF',
    boxShadow: '0 1px 4px 0 rgb(0 0 0 / 14%)',
    marginTop: 30,
    borderRadius: 6,
    marginBottom: 30,
    flexDirection: 'column',
  },
  tHeader: {
    color: '#19a1f4'
  },
  headerContainer: {
    padding: 15,
    marginTop: -30
  },
  tableContainer: {
    padding: 15,
  },
  header: {
    padding: 15,
    borderRadius: 3,
    color: '#fff',
    fontFamily: 'Barlow',
    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 172 193 / 40%)',
    backgroundColor: '#19a1f4'
  },
  headerTitle: {
    marginTop: 0,
    minHeight: 'auto',
    fontWeight: 300,
    marginBottom: 0,
    fontSize: 25
  },
  noBorder: {
    borderBottom: 'none',
  },
  panelHeader: {
    color: 'rgb(61 93 109)',
    fontWeight: 700,
  },
  panelTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'rgb(61 93 109)',
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'none',
    fontWeigth: 500
  },
  headerDesc: {
    margin: 0,
    marginTop: 5,
    color: '#c4f9ff',
  },
  root: {
    backgroundColor: '#eee',
  },
});


export const addStudentStyles = makeStyles({
  save: {
    maxHeight: 47,
    minWidth: 100,
    marginLeft: 30,
    borderRadius: 25,
    border: '1px solid #1690ed',
    color: '#1690ed'
  },
  add: {
    maxHeight: 47,
    minWidth: 100,
    marginLeft: 'auto',
    marginRight: 0,
    borderRadius: 25,
    backgroundColor: '#fff',
    border: '1px solid #1690ed',
    color: '#1690ed'
  },
  input: {
    marginRight: 30,
  },
  addCourse: {
    maxWidth: 700,
    margin: '0 auto',
    padding: 15,
    marginBottom: 30,
    borderRadius: 6
  },
});

export const addGradeStyles = makeStyles((theme: Theme) =>
  createStyles({
    add: {
      maxHeight: 47,
      minWidth: 100,
      marginLeft: 30,
      borderRadius: 25,
      border: 'none',
      color: '#1690ed',
      marginTop: 16
    },
    input: {
      marginRight: 30,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const dialogStyles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 172 193 / 40%)',
      backgroundColor: '#19a1f4',
      color: '#fff'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: '#fff',
    },
  });

export const useRowStyles = makeStyles({
  root: { '& > *': { borderBottom: 'unset', } },
  panelRow: {
    padding: 0,
    backgroundColor: '#f3fbff',
  },
  chip: {
    minWidth: '80px',
    justifyContent: 'flex-start',
    paddingLeft: '5px'
  },
});
