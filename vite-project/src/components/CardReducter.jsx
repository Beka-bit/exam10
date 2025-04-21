import React from 'react'

export const initialState = {card :[]}

export default function CardReducter(state,action) {
  switch(action.type){
    case'ADD_ITEM':
    return{
      ...state,
      card:[...state.card,action.payload]
    }
    case'REMOVE_ITEM':
      return{
        ...state,
      card: state.card.filter(item=>item.id !==action.payload)
      }
      case 'CLEAR_CART':
        return{...state,card}
        default:
          return state;
  }
return{
<div>

<div/>
}
 
}