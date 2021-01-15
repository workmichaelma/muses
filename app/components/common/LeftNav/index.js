import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo'
import NavBars from './NavBars'

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
    },
  },
  navBars: {
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none'
    },
  }
}))
const LeftNav = ({ }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.navBars}>
        <NavBars />
      </div>
    </div>
  )
}

export default LeftNav