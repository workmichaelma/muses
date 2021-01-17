import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
  },
  price: {
    fontSize: 16,
    margin: 0,
    '& > span': {
      fontSize: 14,
    }
  },
  divider: {
    marginLeft: 5,
    marginRight: 5,
  }
}));

const Price = ({ price }) => {
  const { usd, hkd } = price
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.price}>
        <span>USD</span> {usd}
      </h4>
      <div className={classes.divider}> | </div>
      <h3 className={classes.price}>
        <span>HKD</span> {hkd}
      </h3>
    </div>
  )
}

export default Price
