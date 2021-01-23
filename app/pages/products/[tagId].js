import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { map } from 'lodash'
import useTag from 'hook/useTag'
import useFilter from 'hook/useFilter'

import Filter from 'components/products/Filter'
import ProductList from 'components/products/ProductList'

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: 140,
    marginRight: 410,
    width: 'calc( 100% - 280px )',
  },
}));

export default function TagPage() {
  const router = useRouter()
  const { tagId } = router.query
  const classes = useStyles()

  const [products, setProducts] = useState([])
  return (
    <div>

      <main className={classes.main}>
        <Filter tagId={tagId} setProducts={setProducts}/>
        <ProductList products={products} />
      </main>

    </div>
  )
}

TagPage.getInitialProps = async (props) => {
  const { tagId } = props.router.query
  const { store } = props

  store.dispatch({
    type: 'FETCH_PRODUCT_LIST',
    payload: {
      tags: [tagId]
    }
  })

  store.dispatch({
    type: 'FETCH_TAG_LIST',
    payload: {
      tags: [tagId]
    }
  })

  return {
    tagId
  }
}