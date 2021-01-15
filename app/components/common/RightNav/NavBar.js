import Link from 'next/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: '1px 0',
    '& a': {
      color: '#3d3d3d',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  }
}))
const NavBar = ({ title, url }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Link href={url}>
        {title}
      </Link>
    </Grid>
  )
}

export default NavBar
