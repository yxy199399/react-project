import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Params from './pages/params'
import Query from './pages/query'
import State from './state'
import DoubleRouter from './pages/double-router'
import RouterComfirm from './pages/router-confirm'
import Replace from './pages/replace'
import JumbBack from './pages/jumb-back'
import Http from './pages/http'
import ReduxTest from './pages/redux-test'

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
      <Route path="/http" component={Http} />
      <Route path="/redux" component={ReduxTest} />
    </Switch>
  )
}

export default Routers
