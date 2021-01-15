import Link from 'next/Link'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('/forher_wallpaper.jpg')`,
  },
  container: {
    height: '100%'
  },
  grid: {
    height: '100%',
    '& a': {
      fontSize: 14,
      color: 'black',
    }
  },
  a: {
    fontSize: 14,
    color: 'black'
  }
}))

const ForHer = ({ className }) => {
  const classes = useStyles();
  
  return (
    <div className={`${classes.root} ${className}`}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.grid}
        >
          <Link className={classes.a} href="/category/women">
            For her
          </Link>
        </Grid>
      </Container>
    </div>
  )
}

export default ForHer
