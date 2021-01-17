import Link from 'next/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    width: 140,
    padding: 10,
    cursor: 'pointer',
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
      <Link href="/">
        <img className={classes.logo} src="/Logo.png" alt="logo" />
      </Link>
    </h1>
  )
}

export default Logo
