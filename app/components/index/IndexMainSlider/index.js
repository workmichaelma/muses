import { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ReactPageScroller from 'react-page-scroller'
import ForHer from './ForHer'
import ForHim from './ForHim'
import ForYou from './ForYou'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 140,
    marginRight: 140,
    display: 'flex',
    justifyContent: 'center'
  },
  page: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }
}))

const IndexMainSlider = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0)
  const [containerSize, setContainerSize] = useState({width: '100vw', height: '100vh'})

  useEffect(() => {
    if (window) {
      setContainerSize({
        width: window.innerWidth - 280,
        height: window.innerHeight
      })
    } else {
      setContainerSize({
        width: '100vw',
        height: '100vh'
      })
    }
  }, [])
  return (
    <div className={classes.root}>
      <ReactPageScroller
        pageOnChange={(i) => {
          setCurrentPage(i)
        }}
        containerWidth={containerSize.width}
        containerHeight={containerSize.height}
      >
        <ForHer className={classes.page} />
        <ForHim className={classes.page} />
        <ForYou className={classes.page} />
      </ReactPageScroller>
    </div>
  )
}

export default IndexMainSlider
