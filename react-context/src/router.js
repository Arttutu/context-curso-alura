import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min"
import React, { useState } from "react"
import Login from "pages/Login"
import Carrinho from "pages/Carrinho"
import Feira from "pages/Feira"
import { UsuarioContex } from "Commun/Context/Usuario"

export default function Router() {
  const [nome, setNome] = useState("testeNome")
  const [saldo, setSaldo] = useState("123")
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioContex.Provider value={{ nome, setNome, saldo, setSaldo }}>
            <Login />
          </UsuarioContex.Provider>
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
