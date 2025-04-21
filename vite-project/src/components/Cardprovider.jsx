import React, { useReducer } from 'react'
import CardReducter, { initialState } from './CardReducter'
import { ContendCard } from './ContextCard'

function Cardprovider({children}) {
  const [state,dispatch]= useReducer(CardReducter,initialState)
  return (
    <ContendCard.Provider value={{state, dispatch}}>
      {children}
    </ContendCard.Provider>
  )
}

export default Cardprovider
