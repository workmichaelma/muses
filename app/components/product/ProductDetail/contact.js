import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from 'next/Link'
import Image from 'next/image'
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > div': {
      height: 20,
      display: 'flex',
    },
    '& a': {
      height: 20,
      marginLeft: 10
    },
    '& img': {
      width: 20,
      height: 20
    },
  },
  title: {
    fontSize: 11,
    fontWeight: 100,
    color: 'grey',
    alignItems: 'flex-end',
    textDecoration: 'underline'
  }
}));

const Contact = ({ product }) => {
  const classes = useStyles();
  const { productId } = product

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        ENQUIRY
      </div>
      <div>
        <a href={`https://api.whatsapp.com/send?phone=51153036&text=En${productId}`} target="_blank">
          <img src="/whatsapp_icon.png" />
        </a>
        <a href={`https://instagram.com`} target="_blank">
          <img src="/instagram_icon.png" />
        </a>
      </div>
    </div>
  )
}

export default Contact
