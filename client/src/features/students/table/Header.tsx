
import { Box } from 'material-ui';
import { useStyles } from '../styles';

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <Box className={classes.header}>
        <h4 className={classes.headerTitle}>Enrolled Students</h4>
        <p className={classes.headerDesc}>Education’s purpose is to replace an empty mind with an open one</p>
      </Box>
    </div>
  )
}

export default Header
