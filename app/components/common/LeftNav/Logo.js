import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    width: 140,
    padding: 10
  },
  logo: {
    width: '100%',
    height: '100%',
  }
}))

const Logo = () => {
  const classes = useStyles();
  return (
    <h1 className={classes.container}>
      <img className={classes.logo} src="/Logo2.png" />
      {/* <img className={classes.logo} src="/logo.png" /> */}
    </h1>
  )
}

export default Logo
