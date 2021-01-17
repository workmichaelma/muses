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
  },
  detail: {
    position: 'fixed',
    top: 0,
    right: 140,
    zIndex: 10,
    paddingTop: 69.5,
    width: 270,
    height: '100vh',
  }
}));

export default function ProductPage({ productId }) {
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
    product: {
      productId,
      title: {
        zh: '黑髮晶手鏈',
        en: 'Black hair bracelet',
      },
      images: map([1, 2, 3, 4], k => `/static/product/blackhair/${productId}_${k}.jpeg`),
      price: {
        hkd: 450,
        usd: 49.9,
      },
      size: '10mm',
      origin: 'Uruguay',
      description: {
        zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
        en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
      },
      tags: [
        {
          tagId: '1',
          url: '/category/blackhair',
          title: {
            en: 'Black Hair',
            zh: '黑髮晶',
          },
          backgroundColor: '#eee',
          color: '#aaa',
        },
        {
          tagId: 't1',
          url: '/category/bracelet',
          title: {
            en: 'Bracelet',
            zh: '手鏈',
          },
          backgroundColor: 'yellow',
          color: '#eee',
        },
        {
          tagId: 'c1',
          url: '/category/black',
          title: {
            en: 'Black',
            zh: '黑色',
          },
          backgroundColor: 'black',
          color: 'white',
        }
      ]
    }
  }
}