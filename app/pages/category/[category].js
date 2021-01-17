import Head from 'next/head'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { map } from 'lodash'

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: 140,
    marginTop: 20,
    marginRight: 410,
  },
}));

export default function CategoryPage({ category }) {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Grid container justify="center">
          <Grid item>
          </Grid>
        </Grid>
      </main>

      <footer>
      </footer>
    </div>
  )
}

CategoryPage.getInitialProps = async (props) => {
  const { category } = props.router.query

  return {
    categoryId: category
  }
}