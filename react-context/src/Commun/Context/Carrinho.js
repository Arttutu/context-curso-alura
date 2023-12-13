import { createContext, useContext, useEffect, useState } from "react"

export const CarrinhoContex = createContext()
CarrinhoContex.displayName = "carrinho"

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([])
  const [quantidadeProduto, setQuantidadeProduto] = useState(0)
  return (
    <CarrinhoContex.Provider
      value={{ carrinho, setCarrinho, quantidadeProduto, setQuantidadeProduto }}
    >
      {children}
    </CarrinhoContex.Provider>
  )
}

export const useCarrinhoContex = () => {
  const { carrinho, setCarrinho, quantidadeProduto, setQuantidadeProduto } =
    useContext(CarrinhoContex)
  function MudarQuantidade(id, quantidade) {
    return carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade
      return itemDoCarrinho
    })
  }
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
    setCarrinho(MudarQuantidade(novoProduto.id, 1))
  }
  function removerProduto(id) {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id)
    const eOUltimo = produto.quantidade === 1

    if (eOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id != id)
      )
    }
    setCarrinho(MudarQuantidade(id, -1))
  }
  useEffect(() => {
    const novaQuantidade = carrinho.reduce(
      (contador, produto) => contador + produto.quantidade,
      0
    )
    setQuantidadeProduto(novaQuantidade)
  }, [carrinho, setQuantidadeProduto])

  return {
    carrinho,
    setCarrinho,
    adicionarproduto,
    removerProduto,
    quantidadeProduto,
    setQuantidadeProduto,
  }
}
