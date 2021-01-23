import { useState, useEffect, useMemo } from 'react'
import { get, intersection, find, map, pull, filter, sortBy, isEmpty, every, includes } from 'lodash'
import reduce from 'lodash/reduce'
import union from 'lodash/union'

import { useSelector, useDispatch } from 'react-redux'

import { transformTagGroup, getTag, updateCheckedList } from 'lib/tag'

const useFilter = ({ currentTagId, setProducts } = {}) => {
  const tagList = useSelector((state) => {
    return state.tagList
  })

  const productList = useSelector((state) => {
    return state.productList
  })

  const currentTag = getTag({ tagId: currentTagId, tagList })
  const parentTagId = get(currentTag, 'isRoot') ? currentTagId : get(currentTag, 'parentId', '')

  const tagGroup = map(sortBy(transformTagGroup({ tagList }), parent => {
    const { tagId } = parent
    return parentTagId === tagId ? -1 : 1
  }), gp => {
    return {
      ...gp,
      tagChilds: sortBy(gp.tagChilds, ({tagId}) => {
        return currentTag.tagId === tagId ? -1 : 1
      })
    }
  })

  const [checkedList, setCheckedList] = useState([
    currentTagId,
    ...reduce(tagGroup, (arr, tag) => {
      if (parentTagId !== tag.tagId) {
        return [
          ...arr,
          tag.tagId
        ]
      }
      return arr
    }, [])
  ])

  const filteredProductList = useMemo(() => {
    return filter(productList, p => {

      return every(tagGroup, gp => {
        if (includes(checkedList, gp.tagId)) {
          return true
        } else {
          const { tags } = p
          const checkedChild = intersection(checkedList, map(gp.tagChilds, 'tagId'))
          return !isEmpty(intersection(checkedChild, map(tags, 'tagId')))
        }
      })
    })
  }, [productList, checkedList])

  useEffect(() => {
    setProducts(filteredProductList)
  }, [setProducts, filteredProductList])

  return {
    currentTagId,
    tagList,
    productList,
    filteredProductList,
    tagGroup,
    disabledRootId: parentTagId,
    checkedList,
    setCheckedList: ({ tagId, isRoot, parentId, checked }) => {
      setCheckedList([
        ...updateCheckedList({ tagId, isRoot, parentId, checked, checkedList, tagGroup })
      ])
    },
  }
}

export default useFilter
