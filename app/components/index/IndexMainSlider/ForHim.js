import Link from 'next/Link'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('/forhim_wallpaper2.jpg')`,
  },
  container: {
    height: '100%'
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    width: '100%',
    height: '100%',
    '& > a': {
      color: 'black',      
    }
  }
}))

const ForHim = ({ className }) => {
  const classes = useStyles();
  
  return (
    <div className={`${classes.root} ${className}`}>
      <Container className={classes.container}>
        <div className={classes.a}>
          <Link href="/category/men">
            For him
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default ForHim
