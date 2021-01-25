import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useNativeSelectStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    color: '#474747',
    textAlignLast: 'center',
    paddingLeft: 24,
  },
  select: {
    fontWeight: 700,
    backgroundColor: 'white',
    transform: 'scale(1.3)',
    '&:focus': {
      backgroundColor: 'white',
    }
  }
}))

const Dropdown = ({ className = '', parentClasses = '', title = '', descrition = '', options = [], noneOption = true, handleChange }) => {
  const classes = useStyles();
  const nativeSelectStyles = useNativeSelectStyles()
  const [value, setValue] = useState('');

  const id = `${title}_dropdown`
  return (
    <FormControl
      variant="outlined"
      className={`${className} ${classes.formControl}`}
      classes={{...parentClasses}}
    >
      { title && <InputLabel htmlFor={id}>{ title }</InputLabel>}
      <NativeSelect
        value={value}
        classes={{...nativeSelectStyles}}
        onChange={(event) => {
          setValue(event.target.value)
          handleChange(event.target.value)
        }}
        inputProps={{
          name: title,
          id,
        }}
      >
        {noneOption && <option aria-label="None" value="" />}
        {
          map(options, o => {
            return (
              <option value={o}>
                {o}
              </option>
            )
          })
        }
      </NativeSelect>
      {descrition && <FormHelperText>Some important helper text</FormHelperText>}
    </FormControl>
  )
}

export default Dropdown
