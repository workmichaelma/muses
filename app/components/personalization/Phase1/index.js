import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Gender from './gender'
import FirstLetter from './firstLetter';

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

const Phase1 = ({ setData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Gender</div>
      <Gender setData={setData} />
      <Divider />
      <div className={classes.title}>First Letter Of Last Name</div>
      <FirstLetter setData={setData} />
      <Divider />
    </div>
  )
}

export default Phase1
