import { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import copy from 'copy-to-clipboard';
import delay from 'lodash/delay'

import Tags from './tags'

const useStyles = makeStyles((theme) => ({
  ul: {
    listStyle: 'none',
    paddingLeft: 2,
    '& > li': {
      textTransform: 'capitalize',
      '& > span': {
        fontWeight: 'bold',
        marginRight: 3
      },
      '& > u': {
        cursor: 'pointer'
      }
    }
  },
  li: {
    fontFamily: 'Roboto'
  }
}));

const Detail = ({ product }) => {
  const classes = useStyles();
  const [copyText, setCopyText] = useState('Copy');
  const { size, productId, origin, description, tags } = product
  console.log({product})

  const handleCopy = (v) => {
    if (!!v) {
      copy(v)
      setCopyText('Copied')
    } else {
      delay(() => {
        setCopyText('Copy')
      }, 500)
    }
  }

  return (
    <div className={classes.root}>
      <ul className={classes.ul}>
        <li>
          - <span>serial no.</span>
            <Tooltip
              title={copyText}
              placement="right"
              onClose={() => handleCopy(false)}
            >
              <u onClick={() => handleCopy(productId)}>{productId}</u>
            </Tooltip>
        </li>
        <li>
          - <span>origin</span> {origin}
        </li>
        <li>
          - <span>size</span> {size}
        </li>
      </ul>
      <Divider />
      <ul className={classes.ul}>
        <li className={classes.li}>
          - {description.en}
        </li>
        <li>
          - {description.zh}
        </li>
      </ul>
      <Divider />
      <Tags tags={tags} />
    </div>
  )
}

export default Detail
