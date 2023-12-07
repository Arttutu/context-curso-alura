import { createContext, useContext, useState } from "react"

export const CarrinhoContex = createContext()
CarrinhoContex.displayName = "carrinho"

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([])
  return (
    <CarrinhoContex.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContex.Provider>
  )
}

export const useCarrinhoContex = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContex)
  function adicionarproduto(novoProduto) {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    )
    if (!temOProduto) {
      novoProduto.quantidade = 1
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ])
    }
    setCarrinho((carrinhoAnterior) =>
      carrinhoAnterior.map((itemDoCarrinho) => {
        if (itemDoCarrinho.id === novoProduto.id) itemDoCarrinho.quantidade += 1
        return itemDoCarrinho
      })
    )
  }
  return {
    carrinho,
    setCarrinho,
    adicionarproduto,
  }
}
