import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import map from 'lodash/map'
import Nation from './Nation'
import Search from './Search'
import Language from './Language'
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: 10,
      paddingRight: 23,
      paddingTop: 69.5,
      width: 140
    },
  },
  lang: {
    [theme.breakpoints.up('md')]: {
      marginTop: 3
    }
  },
  payment: {
    [theme.breakpoints.up('md')]: {
      marginTop: 10,
      marginBottom: 2,
    }
  }
}))

const navItems = ['Payment', 'Shipping', 'Returns and exchanges']

const RightNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Search />
      <Grid container alignItems="center" justify="space-around" className={classes.payment}>
        {
          map(navItems, (item, k) => {
            return <NavBar url="/payment" title={item} key={k}/>
          })
        }
      </Grid>
      <Divider />
      <Grid container alignItems="center" justify="space-around" className={classes.lang}>
        <Grid item>
          <Nation />
        </Grid>
        <Grid item>
          <Language />
        </Grid>
      </Grid>
    </div>
  )
}

export default RightNav
