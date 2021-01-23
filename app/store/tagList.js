import * as ProductList from './productList'
import { find, map, reduce, uniq } from 'lodash'

const tagList = [
  {
    tagId: 'black-rutilated-quartz',
    url: '/products/black-rutilated-quartz',
    title: {
      en: 'Black Rutilated Quartz',
      zh: '黑髮晶',
    },
    parentId: 'crystal',
  },
  {
    tagId: 'crystal',
    url: '/products/crystal',
    isRoot: true,
    title: {
      en: 'Crystal',
      zh: '水晶',
    }
  },
  {
    tagId: 'category',
    url: '/products/category',
    isRoot: true,
    title: {
      en: 'Category',
      zh: '款式',
    }
  },
  {
    tagId: 'bracelet',
    url: '/products/bracelet',
    title: {
      en: 'Bracelet',
      zh: '手鏈',
    },
    parentId: 'category'
  },
  {
    tagId: 'earring',
    url: '/products/earring',
    title: {
      en: 'Earring',
      zh: '耳環',
    },
    parentId: 'category'
  },
  {
    tagId: 'black',
    url: '/products/black',
    title: {
      en: 'Black',
      zh: '黑色',
    },
    parentId: 'color'
  },
  {
    tagId: 'color',
    url: '/products/color',
    isRoot: true,
    title: {
      en: 'Color',
      zh: '色彩',
    }
  },
  {
    tagId: 'citrine',
    url: '/products/citrine',
    title: {
      en: 'Citrine',
      zh: '黃水晶',
    },
    parentId: 'crystal',
  },
  {
    tagId: 'yellow',
    url: '/products/yellow',
    title: {
      en: 'Yellow',
      zh: '黃色',
    },
    parentId: 'color'
  },
  {
    tagId: 'crystal-ball',
    url: '/products/crystal-ball',
    title: {
      en: 'Crystal Ball',
      zh: '水晶球',
    },
    parentId: 'category'
  },
]

const fetchTagList = ({ tags }) => {
  const allProducts = ProductList.fetchProductList({ tags })
  const existTags = reduce(allProducts, (tags, product) => {
    return uniq([
      ...tags,
      ...product.tags
    ])
  }, [])
  return reduce(existTags, (arr, tag) => {
    if (tag.parentId) {
      return [
        ...arr,
        tag,
        find(tagList, { tagId: tag.parentId })
      ]
    } else {
      return [
        ...arr,
        tag,
      ]
    }
  }, [])
}

module.exports = {
  tagList,
  fetchTagList,
}
