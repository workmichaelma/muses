import Head from 'next/head'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { map } from 'lodash'
import useCategory from 'hook/useCategory'

import CategoryProducts from 'components/category/CategoryProducts'

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: 140,
    marginTop: 20,
    marginRight: 410,
    width: 'calc( 100% - 280px )',
  },
}));

export default function CategoryPage() {
  const router = useRouter()
  const { categoryId } = router.query
  const classes = useStyles()
  const { category } = useCategory(categoryId)

  console.log({category})

  return (
    <div>

      <main className={classes.main}>
        <CategoryProducts products={[...category.products,...category.products,...category.products]} />
      </main>

    </div>
  )
}

CategoryPage.getInitialProps = async (props) => {
  const { category } = props.router.query

  return {
    categoryId: category
  }
}