import { Container } from "./styles"
import { memo } from "react"
import { IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import { useCarrinhoContex } from "Commun/Context/Carrinho"

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, adicionarproduto, removerProduto } = useCarrinhoContex()
  const produtoNoCarrinho = carrinho.find(
    (itemDoCarrinho) => itemDoCarrinho.id === id
  )
  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon onClick={() => removerProduto(id)} />
        </IconButton>
        {produtoNoCarrinho?.quantidade || 0}
        <IconButton
          color="primary"
          onClick={() => adicionarproduto({ nome, foto, id, valor })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)
