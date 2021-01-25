import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';

import Phase1 from './Phase1'
import Phase2 from './Phase2'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

const Stepper = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [data, setData] = useState({
    firstLetter: null,
    gender: null,
  })

  const handleData = ({ payload }) => {
    setData({
      ...data,
      ...payload,
    })
  }

  console.log({data})

  return (
    <Paper>
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
          </Button>
        }
      />
      <Paper variant="outlined">
        <Phase1 data={data} setData={handleData} />
        <Phase2 data={data} setData={handleData} />
      </Paper>
    </Paper>
  )
}

export default Stepper