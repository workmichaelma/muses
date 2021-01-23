import { useState, useMemo } from 'react'
import includes from 'lodash/includes'
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 12,
    cursor: 'pointer',
    marginLeft: 5,
    marginRight: 5,
    userSelect: 'none',
    '&:hover': {
      textDecoration: 'underline',
      fontWeight: 700,
    }
  },
  checked: {
    textDecoration: 'underline',
    fontWeight: 700,
  },
  selected: {
    cursor: 'not-allowed',
    textDecoration: 'underline',
    fontWeight: 700,
  },
  disabled: {
    cursor: 'not-allowed !important',
    color: 'grey !important',
    fontWeight: [[100], '!important'],
    textDecoration: 'none !important',
  }
}))


const Tag = ({ isRoot, tagId, tag, disabled, checkedList, setCheckedList, currentTagId, parentId }) => {
  const classes = useStyles()
  const _tagId = isRoot ? tagId : tag.tagId
  const selected = currentTagId === _tagId

  const checked = useMemo(() => {
    return includes(checkedList, _tagId)
  }, [checkedList])

  return (
    <div
      className={`${classes.root} ${checked && classes.checked} ${disabled && !selected && classes.disabled} ${selected && classes.selected}`}
      onClick={() => {
        if (!disabled) {
          setCheckedList({ tagId: _tagId, isRoot, parentId, checked: !checked })
        }
      }}
    >
      {isRoot ? 'ALL' : tag.title.zh}
    </div>
  )
}

export default Tag
