import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { reduce, range, get, map } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  year: {
    marginLeft: 5,
    marginRight: 5,
  },
  root: {
    fontSize: 21
  }
}));

const yearGp = reduce(range(1920, 2020), (arr, y) => {
  const index = y % 12
  arr[index] = [
    ...get(arr, `[${index}]`, []),
    y
  ]
  return arr
}, [])

const Year = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        {
          map(yearGp, gp => {
            return (
              <Button classes={{ root: classes.root}}>
                {map(gp, year => {
                  return (
                    <div className={classes.year}>
                      { year }
                    </div>
                  )
                })}
              </Button>
            )
          })
        }
      </ButtonGroup>
    </div>
  );
}

export default Year
