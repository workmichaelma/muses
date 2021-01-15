import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 11,
    textDecoration: 'underline'
  }
}));

const Language = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      繁
    </div>
  )
}

export default Language
