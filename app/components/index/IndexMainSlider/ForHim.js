import Link from 'next/Link'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('/forhim_wallpaper2.jpg')`,
  },
  container: {
    height: '100%',
    '& a': {
      fontSize: 14,
      color: 'black',
    }
  },
  grid: {
    height: '100%',
  }
}))

const ForHim = ({ className }) => {
  const classes = useStyles();
  
  return (
    <div className={`${className} ${classes.root}`}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.grid}
        >
          <Link href="/category/men">
            For him
          </Link>
        </Grid>
      </Container>
    </div>
  )
}

export default ForHim
