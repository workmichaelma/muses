import { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from 'next/Link'
import { head, map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    marginTop: 0,
    cursor: 'pointer',
    '& img': {
      maxWidth: 450,
      width: '90%'
    }
  },
  title: {
    fontFamily: 'Helvetica Neue',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  price: {
    '& > span': {
      fontSize: 11,
    }
  }
}));

const Product = ({ product }) => {
  const classes = useStyles();
  const { images, title, price, productId } = product
  
  const [image, setImage] = useState(null)

  useEffect(() => {
    setImage(head(images))
  }, [images])

  console.log({image, product, title, price, productId})

  return (
    <Link href={`/product/${productId}`}>
      <div className={classes.root}>
        <div>
          <img src={image} onMouseEnter={() => setImage(images[1])} onMouseLeave={() => setImage(head(images))} />
        </div>
        <div>
          <div className={classes.title}>
            {title.en}
          </div>
          <div>
            {title.zh}
          </div>
        </div>
        <div className={classes.price}>
          <span>HKD</span> {price.hkd}
        </div>
      </div>
    </Link>
  )
}

export default Product
