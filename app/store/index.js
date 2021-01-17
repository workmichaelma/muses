import { get, map, range, take, reject } from 'lodash'
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store



const productList = [
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
      {
        tagId: 'black-rutilated-quartz',
        url: '/category/black-rutilated-quartz',
        title: {
          en: 'Black Rutilated Quartz',
          zh: '黑髮晶',
        },
      },
      {
        tagId: 'bracelet',
        url: '/category/bracelet',
        title: {
          en: 'Bracelet',
          zh: '手鏈',
        },
      },
      {
        tagId: 'black',
        url: '/category/black',
        title: {
          en: 'Black',
          zh: '黑色',
        },
      }
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
      {
        tagId: '1',
        url: '/category/citrine',
        title: {
          en: 'Citrine',
          zh: '黃水晶',
        },
      },
      {
        tagId: 'bracelet',
        url: '/category/bracelet',
        title: {
          en: 'Bracelet',
          zh: '手鏈',
        },
      },
      {
        tagId: 'yellow',
        url: '/category/yellow',
        title: {
          en: 'Yellow',
          zh: '黃色',
        },
      }
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
      {
        tagId: '1',
        url: '/category/citrine',
        title: {
          en: 'Citrine',
          zh: '黃水晶',
        },
      },
      {
        tagId: 'bracelet',
        url: '/category/bracelet',
        title: {
          en: 'Bracelet',
          zh: '手鏈',
        },
      },
      {
        tagId: 'yellow',
        url: '/category/yellow',
        title: {
          en: 'Yellow',
          zh: '黃色',
        },
      }
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
      {
        tagId: '1',
        url: '/category/citrine',
        title: {
          en: 'Citrine',
          zh: '黃水晶',
        },
      },
      {
        tagId: 'bracelet',
        url: '/category/bracelet',
        title: {
          en: 'Bracelet',
          zh: '手鏈',
        },
      },
      {
        tagId: 'yellow',
        url: '/category/yellow',
        title: {
          en: 'Yellow',
          zh: '黃色',
        },
      }
    ]
  }
]

const initialState = {
  productList,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        // items: [...state.items, ...action.items]
        items: [...take(list, 20)]
      }
    case 'DELETE':
      const id = get(action, 'payload.id')
      if (id) {
        const items = reject(state.items, item => {
          return item.title === id
        })
        return {
          ...state,
          items
        }
      }
      return state
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}





// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },

];