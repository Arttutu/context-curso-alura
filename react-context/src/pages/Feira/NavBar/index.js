import { Nav } from "./styles"
import { ReactComponent as Logo } from "assets/logo.svg"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
import { useCarrinhoContex } from "Commun/Context/Carrinho"

export default function NavBar() {
  const { quantidadeProduto, setQuantidadeProduto } = useCarrinhoContex()
  return (
    <Nav>
      <Logo />
      <IconButton disabled={quantidadeProduto === 0}>
        <Badge color="primary" badgeContent={quantidadeProduto}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}
