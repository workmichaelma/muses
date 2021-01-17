import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from 'next/Link'
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
    '& a': {
      fontSize: 11,
      marginRight: 5,
      textDecoration: 'none',
      color: '#2e2e2e'
    }
  },
}));

const Tags = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        map(tags, tag => {
          return (
            <div key={tag.title.en}>
              <a href={tag.url}>
                {`#${tag.title.en}`}
              </a>
              <a href={tag.url}>
                {`#${tag.title.zh}`}
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Tags
