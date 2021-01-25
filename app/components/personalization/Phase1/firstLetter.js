import { makeStyles } from '@material-ui/core/styles';
import { map } from 'lodash'
import Dropdown from '../dropdown'

const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'ß', 'Ü', 'Ö', 'Ä']

const useDropdownStyles = makeStyles((theme) => ({
  root: {
    width: 120
  }
}))

const FirstLetter = ({ setData }) => {
  const dropdownClasses = useDropdownStyles()
  return (
    <div>
      <Dropdown
        options={alphabets}
        classes={dropdownClasses}
        noneOption={false}
        handleChange={(v) => {
          setData({
            payload: {
              firstLetter: v
            }
          })
        }}
      />
    </div>
  )
}

export default FirstLetter
