import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    root: {
      margin: '0 3px'
    }
  },
  option: {
    fontSize: 10,
    padding: 2,
    width: 90,
    textAlign: 'center',
    padding: '3px 4px',
    color: '#aeaeae',
    cursor: 'not-allowed',
  },
  selected: {
    color: '#3d3d3d',
    cursor: 'pointer',
    width: 90,
    fontSize: 11
  },
  disabled: {
    color: '#646464',
    cursor: 'pointer',
  },
  divider: {
    display: 'flex',
    width: 20,
    height: 1,
    backgroundColor: '#ddd',
    margin: '0 auto',
  }
}));

const usePaperStyles = makeStyles((theme) => ({
  root: {
    zIndex: 10
  }
}));

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();
  const paperClasses = usePaperStyles();

  const handleClick = () => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement('bottom');
  };

  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper classes={{ ...paperClasses }}>
              <div className={classes.option}>France</div>
              <div className={classes.divider} />
              <div className={classes.option}>Germany</div>
              <div className={classes.divider} />
              <div className={`${classes.option} ${classes.disabled}`} onClick={handleClick()}>Hong Kong SAR</div>
              <div className={classes.divider} />
              <div className={classes.option}>Japan</div>
              <div className={classes.divider} />
              <div className={classes.option}>United Kingdom</div>
              <div className={classes.divider} />
              <div className={classes.option}>United States</div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <div className={`${classes.option} ${classes.selected}`} onClick={handleClick()}>Hong Kong SAR</div>
    </div>
  );
}
