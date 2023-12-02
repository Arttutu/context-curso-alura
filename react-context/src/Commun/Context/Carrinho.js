import { createContext, useState } from "react"

export const CarrinhoContex = createContext()
CarrinhoContex.displayName = "carrinho"

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState({})
  return (
    <CarrinhoContex.Provider value={(carrinho, setCarrinho)}>
      {children}
    </CarrinhoContex.Provider>
  )
}
