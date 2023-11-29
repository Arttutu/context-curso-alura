import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import Login from "pages/Login"
import Carrinho from "pages/Carrinho"
import Feira from "pages/Feira"
import { UsuarioProvider } from "Commun/Context/Usuario"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login />
          </UsuarioProvider>
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
