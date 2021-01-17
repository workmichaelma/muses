import Head from 'next/head'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IndexMainSlider from 'components/index/IndexMainSlider'
import ProductMainSlider from 'components/product/ProductMainSlider'
import ProductDetail from 'components/product/ProductDetail'
import { map } from 'lodash'
import useProduct from 'hook/useProduct'

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: 140,
    marginTop: 20,
    marginRight: 410,
    [theme.breakpoints.up('lg')]: {
      marginRight: 640
    }
  },
  detail: {
    position: 'fixed',
    top: 0,
    right: 140,
    zIndex: 10,
    paddingTop: 69.5,
    width: 270,
    height: '100vh',
    [theme.breakpoints.up('lg')]: {
      width: 420,
      right: 220,
    }
  }
}));

export default function ProductPage({}) {
  const router = useRouter()
  const { productId } = router.query
  const classes = useStyles()
  const { getProductById } = useProduct()

  const product = getProductById(productId)

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Grid container justify="center">
          <Grid item>
            <ProductMainSlider images={product.images} />
          </Grid>
        </Grid>
        <div className={classes.detail}>
          <ProductDetail product={product} />
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

ProductPage.getInitialProps = async (props) => {
  const { productId } = props.router.query

  return {
    productId,
  }
}