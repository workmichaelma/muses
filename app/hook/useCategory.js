import { find, filter } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'

const useCategory = (categoryId) => {
  const category = useSelector((state) => {
    const c = find(state.categoryList, { tagId: categoryId }) || {}
    const productList = state.productList
    return {
      ...c,
      products: filter(productList, p => {
        return find(p.tags, { tagId: categoryId })
      })
    }
  })
  const dispatch = useDispatch()
  
  return { category }
}

export default useCategory
