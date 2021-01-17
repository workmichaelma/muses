import { makeStyles, withStyles } from '@material-ui/core/styles';

import Detail from './detail';
import Price from './price';
import Title from './title'
import Contact from './contact'

const ProductDetail = ({ product }) => {
  console.log({product})
  return (
    <div>
      <Title title={product.title} />
      <Price price={product.price} />
      <Detail product={product} />
      <Contact product={product} />
    </div>
  )
}

export default ProductDetail
