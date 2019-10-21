import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import Params from './params'
import Query from './query'
import State from './state'
import DoubleRouter from './double-router'
import RouterComfirm from './router-confirm'
import Replace from './replace'
import JumbBack from './jumb-back'

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/params/:type/:id" component={Params} />
      <Route path="/query" component={Query} />
      <Route path="/state" component={State} />
      <Route path="/double-router" component={DoubleRouter} />
      <Route path="/router-confirm" component={RouterComfirm} />
      <Route path="/replace" component={Replace} />
      <Route path="/jumb-back" component={JumbBack} />
    </Switch>
  )
}

export default Routers
