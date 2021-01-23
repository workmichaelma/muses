import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { map } from 'lodash';

import Product from './product'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container classes={{ root: classes.root }}>
      {
        map(products, (p, key) => {
          return (
            <Grid item md={6} lg={4} key={`ProductList_${key}`}>
              <Product product={p} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default ProductList
