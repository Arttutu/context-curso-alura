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
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
          <Route path="/feira">
            <Feira />
          </Route>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  )
}
