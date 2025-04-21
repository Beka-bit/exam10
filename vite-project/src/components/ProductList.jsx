import React, { useContext } from 'react';
import ContendCard from './ContextCard';

const products = [
  { id: 1, name: 'iphone 13', price: 278000 },
  { id: 2, name: 'Laptop', price: 500000 },
  { id: 3, name: 'Elmyra', price: 50 },
]

const ProductList = () => {
  const { dispatch } = useContext(ContendCard)

  return (
    <>
    {products.map(product=>(
      <div key={product.id}>
        {product.name}
        <button onClick={()=>dispatch({type:'ADD_ITEM', payload:product})}>
          Add to card
        </button>
      </div>
    ))}
    </>
  )
}
export default ProductList;