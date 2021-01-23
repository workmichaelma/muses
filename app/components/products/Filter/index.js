import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { map, sortBy } from 'lodash';
import { Divider } from '@material-ui/core';

import useFilter from 'hook/useFilter'
import TagList from './TagList';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700
  },
  root: {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    zIndex: 10,
    backgroundColor: 'white'
  },
  main: {
    marginBottom: 20
  }
}));

const Filter = ({ tagId, setProducts }) => {
  const classes = useStyles();

  const { tagGroup, disabledRootId, checkedList, setCheckedList, currentTagId } = useFilter({ currentTagId: tagId, setProducts })

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} className={classes.title}>
          FILTER
        </Grid>
        <Grid item xs={8} className={classes.main}>
          {
            map(tagGroup, parent => {
              const { tagId: parentTagId } = parent
              return (
                <TagList
                  checkedList={checkedList}
                  disabled={disabledRootId === parentTagId}
                  setCheckedList={setCheckedList}
                  parent={parent}
                  key={`ProductFilter_Parent__${parentTagId}`}
                  currentTagId={currentTagId}
                />
              )
            })
          }
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Divider />
        </Grid>
      </Grid>
    </div>    
  )
}

export default Filter
