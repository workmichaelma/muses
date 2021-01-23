import { find, map, reduce, pullAllWith, pull, intersection, includes, every, isEmpty } from 'lodash'

module.exports = {
  transformTagGroup: ({ tagList }) => {
    return map(reduce(tagList, (gp, tag) => {
      const { tagId, parentId } = tag
      if (parentId) {
        return {
          ...gp,
          [parentId]: [
            ...gp[parentId] || [],
            tag
          ]
        }
      }
      return {
        ...gp,
        [tagId]: gp[tagId] || []
      }
    }, {}), (tagChilds, tagId) => {
      return {
        tagId,
        tagChilds,
      }
    })
  },
  getTag: ({ tagId, tagList }) => {
    return find(tagList, { tagId }) || {}
  },
  updateCheckedList: ({ tagId, isRoot, parentId, checked, checkedList, tagGroup }) => {
    const group = find(tagGroup, { tagId: isRoot ? tagId : parentId })
    const brotherTags = map(group.tagChilds, 'tagId')
    if (isRoot) {
      if (!includes(checkedList, tagId)) {
        return [
          ...pullAllWith(checkedList, brotherTags),
          tagId
        ]
      } else {
        return checkedList
      }
    } else {
      if (checked) {
        if (includes(checkedList, parentId)) {
          return [
            ...pull(checkedList, parentId),
            tagId
          ]
        } else {
          const newList = [
            ...checkedList,
            tagId
          ]
          const allBrotherTagsSelected = every(brotherTags, tag => {
            return includes(newList, tag)
          })
          if (allBrotherTagsSelected) {
            return [
              ...pullAllWith(checkedList, brotherTags),
              parentId
            ]
          } else {
            return newList
          }
        }
      } else {
        const newList = [
          ...pull(checkedList, tagId),       
        ]
        const noBrotherTagsSelected = isEmpty(intersection(newList, brotherTags))
        if (noBrotherTagsSelected) {
          return [
            ...newList,
            parentId
          ]
        } else {
          return newList
        }
      }
    }
  }
}