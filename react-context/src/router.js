import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import Login from "pages/Login"
import Carrinho from "pages/Carrinho"
import Feira from "pages/Feira"

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
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
