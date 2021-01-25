import { makeStyles, useTheme } from '@material-ui/core/styles';

import Stepper from 'components/personalization' 

const useStyles = makeStyles({
  root: {
    marginLeft: 140,
    marginRight: 140,
    width: 'calc( 100% - 280px )',
  }
})

const PersonalizationPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper />
    </div>
  )
}

export default PersonalizationPage

PersonalizationPage.getInitialProps = async (props) => {
  return {}
}