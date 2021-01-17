import { find } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'

const useProduct = () => {
  const productList = useSelector((state) => {
    return state.productList
  })
  const dispatch = useDispatch()
  
  const getProductById = productId => {
    return find(productList, { productId })
  }

  return { productList, getProductById }
}

export default useProduct
