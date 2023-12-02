import { Container } from "./styles"
import { memo } from "react"
import { IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import { useContext } from "react"
import { CarrinhoContex } from "Commun/Context/Carrinho"

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContex)
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
          <RemoveIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)
