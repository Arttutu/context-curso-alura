import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min"
import React, { useState } from "react"
import Login from "pages/Login"
import Carrinho from "pages/Carrinho"
import Feira from "pages/Feira"

export default function Router() {
  const [nome, setNome] = useState("testeNome")
  const [saldo, setSaldo] = useState("123")
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
            nome={nome}
            setNome={setNome}
            saldo={saldo}
            setSaldo={setSaldo}
          />
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
