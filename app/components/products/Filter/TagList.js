import { makeStyles, withStyles } from '@material-ui/core/styles';
import map from 'lodash/map'
import Tag from './Tag'

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    '&:not(:last-child)': {
      marginBottom: 5,
    }
  },
  allBtn: {
    width: 35,
    textAlign: 'center'
  }
}))

const TagList = ({ checkedList, disabled, setCheckedList, parent, currentTagId }) => {
  const classes = useStyles();
  const { tagChilds, tagId: parentId } = parent

  return (
      <div className={classes.row}>
        <div className={classes.allBtn}>
          {!disabled && (
            <Tag
              isRoot={true}
              tagId={parentId}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              currentTagId={currentTagId}
              key={`ProductFilter_Tag__${parentId}`}
            />
          )}
        </div>
        {
          map(tagChilds, child => {
            return (
              <Tag
                tag={child}
                disabled={disabled}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                currentTagId={currentTagId}
                parentId={parentId}
                key={`ProductFilter_Tag__${child.tagId}`}
              />
            )
          })
        }
      </div>
  )
}

export default TagList
