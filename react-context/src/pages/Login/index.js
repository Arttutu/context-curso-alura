import { Button } from "@material-ui/core"
import { Container, Titulo, InputContainer } from "./styles"
import { Input, InputLabel, InputAdornment } from "@material-ui/core"
import { useHistory } from "react-router-dom"

function Login({ nome, saldo, setNome, setSaldo }) {
  const history = useHistory()
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          onChange={(e) => setSaldo(e.target.value)}
          value={saldo}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  )
}

export default Login
