import React, { useContext } from 'react'
import { ContendCard } from './ContextCard';


const Card = () => {
  const { state, dispatch } = useContext(ContendCard)


  return (
    <div>
      <h3>Card</h3>
      {state.card.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
      <p>Total: {total}</p>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Card</button>
    </div>
  )
}

export default Card;