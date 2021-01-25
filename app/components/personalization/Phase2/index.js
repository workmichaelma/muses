import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Year from './year'

const useStyles = makeStyles({
  root: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Phase2 = ({ setData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Year Of Birth</div>
      <Year setData={setData} />
      <Divider />
    </div>
  )
}

export default Phase2
