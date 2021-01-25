import { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useButtonStyles = makeStyles({
  root: {
    color: '#474747',
  },
  unpicked: {
    color: '#cccccc',
  }
})

const Gender = ({ setData }) => {
  const btnClasses = useButtonStyles();
  const [gender, setGender] = useState(null)
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        aria-label="text alignment"
        onChange={(e, v) => {
          setGender(v)
          setData({
            payload: {
              gender: v
            }
          })
        }
      }>
        <ToggleButton value="M" className={ `${btnClasses.root} ${gender === 'F' && btnClasses.unpicked}` } selected={gender === 'M'}>
          Men
        </ToggleButton>
        <ToggleButton value="F" className={ `${btnClasses.root} ${gender === 'M' && btnClasses.unpicked}` } selected={gender === 'F'}>
          Women
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Gender
