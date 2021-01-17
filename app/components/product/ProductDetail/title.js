import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    textTransform: 'uppercase',
    letterSpacing: -1,
    marginTop: 0,
    marginBottom: 0,
  },
  h1: {
    marginTop: 0,
    fontSize: 12,
    fontWeight: 100,
  }
}));

const Title = ({ title }) => {
  const { zh, en } = title
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.h2}>
        {en}
      </h2>
      <h1 className={classes.h1}>
        {zh}
      </h1>
    </div>
  )
}

export default Title
