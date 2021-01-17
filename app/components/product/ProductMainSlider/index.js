import { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ReactPageScroller from 'react-page-scroller'
import Grid from '@material-ui/core/Grid';
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
}))

const useImageStyles = makeStyles((theme) => ({
  image: {
    width: 450,
    height: 450,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: props => `url(${props.url})`,
    marginTop: 10,
    marginBottom: 10,
  },
}));

const IndexMainSlider = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        map(images, url => {
          const imageClasses = useImageStyles({ url })
          return (
            <div className={imageClasses.image} />
          )
        })
      }
    </div>
  )
}

export default IndexMainSlider