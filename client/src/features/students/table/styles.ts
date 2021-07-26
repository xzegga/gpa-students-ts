import {
  makeStyles
} from 'material';


export const useStyles = makeStyles({
  container: {
    maxWidth: 700,
    margin: '0 auto',
  },
  headers: {
    backgroundColor: 'rgb(25, 161, 244)',
    color: '#fff'
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
    fontSize: '14px',
    color: 'rgb(61 93 109)',
    display: 'flex',
    alignItems: 'center',    
    borderBottom: 'none',
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
