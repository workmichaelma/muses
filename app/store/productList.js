import { filter, find, intersection, isEmpty, map } from 'lodash'
import { tagList } from './tagList'

const _productList = [
  {
    productId: '1',
    title: {
      zh: '黑髮晶手鏈',
      en: 'Black Rutilated Quartz bracelet',
    },
    images: map([1, 2, 3, 4], k => `/static/product/blackhair/1_${k}.jpeg`),
    price: {
      hkd: 450,
      usd: 49.9,
    },
    size: '10mm',
    origin: 'Uruguay',
    description: {
      zh: `黑髮晶可以抓住並同時找到運氣和好機會。可以為您提供所需的技能，以便正確，仔細地分析事物。尤其當您很難在自己喜歡的兩件事之間進行選擇時，這非常有效。除此之外，許多人都將它用作護身符，甚至需要做出重要決策的許多企業高管和所有者都支持它。`,
      en: `The black rutilated quartz can grab and at the same time find out luck and a good chance. The stone can offer you the needed skills in order to analyze things properly and carefully. It’s very effective when you are having a hard time choosing between the two things you like. In addition to that, a lot of people are using it as a talisman and it’s even supported by a lot of business executives and owners who need to make vital decisions.`
    },
    tags: [
      'black-rutilated-quartz',
      'bracelet',
      'black'
    ]
  },
  {
    productId: '2',
    title: {
      zh: '黃水晶手鏈',
      en: 'Citrine bracelet',
    },
    images: map([1, 2, 3, 4], k => `/static/product/citrine/2_${k}.jpeg`),
    price: {
      hkd: 1450,
      usd: 179.9,
    },
    size: '12mm',
    origin: 'Brazil',
    description: {
      zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
      en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
    },
    tags: [
      'citrine',
      'bracelet',
      'yellow',
    ]
  },
  {
    productId: '3',
    title: {
      zh: '黃水晶手鏈',
      en: 'Citrine bracelet',
    },
    images: map([1, 2, 3], k => `/static/product/citrine/3_${k}.jpeg`),
    price: {
      hkd: 420,
      usd: 49.9,
    },
    size: '9mm',
    origin: 'Brazil',
    description: {
      zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
      en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
    },
    tags: [
      'citrine',
      'bracelet',
      'yellow',
    ]
  },
  {
    productId: '4',
    title: {
      zh: '黃水晶手鏈',
      en: 'Citrine bracelet',
    },
    images: map([1, 2, 3, 4], k => `/static/product/citrine/4_${k}.jpeg`),
    price: {
      hkd: 5000,
      usd: 599.9,
    },
    size: '13mm',
    origin: 'Brazil',
    description: {
      zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
      en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
    },
    tags: [
      'citrine',
      'bracelet',
      'yellow',
    ]
  },
  {
    productId: '5',
    title: {
      zh: '黃水晶耳環',
      en: 'Citrine earring',
    },
    images: map([1, 2, 3], k => `/static/product/citrine/5_${k}.jpeg`),
    price: {
      hkd: 500,
      usd: 59.9,
    },
    size: '6x6mm',
    origin: 'Brazil',
    description: {
      zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
      en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
    },
    tags: [
      'citrine',
      'earring',
      'yellow',
    ]
  },
  {
    productId: '6',
    title: {
      zh: '黃水晶球',
      en: 'Citrine ball',
    },
    images: map([1, 2, 3], k => `/static/product/citrine/6_${k}.jpeg`),
    price: {
      hkd: 6500,
      usd: 799.9,
    },
    size: '6x6mm',
    origin: 'Brazil',
    description: {
      zh: `黃水晶主偏財，可以聚財，能增強氣場中的黃光，從而創造出意外之財，所以從事商業的公司和商家一定要入手一款黃水晶，且有着催財的功效。人稱「商人之石」。`,
      en: `Called The Merchant's Stone for its properties of increase in the cashbox, sparkling yellow Citrine not only assists in acquiring wealth, but helps in maintaining it. Citrine assists in all fast money ventures, and is especially helpful in financial speculation and for commercial success.`
    },
    tags: [
      'citrine',
      'crystal-ball',
      'yellow',
    ]
  }
]

export const productList = (() => {
  return map(_productList, p => {
    return {
      ...p,
      tags: map(p.tags, tagId => {
        return find(tagList, { tagId })
      })
    }
  })
})()

export const fetchProductList = ({ tags, limit }) => {
  return filter(productList, product => {
    return !isEmpty(intersection(map(product.tags, 'tagId'), tags))
  })
}
