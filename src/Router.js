import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from './components/Bundle'
import loaderHome from 'bundle-loader?lazy&name=home!./pages/home'
import loaderParams from 'bundle-loader?lazy&name=params!./pages/params'
import loaderQuery from 'bundle-loader?lazy&name=query!./pages/query'
import loaderState from 'bundle-loader?lazy&name=state!./pages/state'
import loaderDoubleRouter from 'bundle-loader?lazy&name=doubleRouter!./pages/double-router'
import loaderRouterComfirm from 'bundle-loader?lazy&name=routerComfirm!./pages/router-confirm'
import loaderReplace from 'bundle-loader?lazy&name=replace!./pages/replace'
import loaderJumbBack from 'bundle-loader?lazy&name=jumbBack!./pages/jumb-back'
import loaderHttp from 'bundle-loader?lazy&name=http!./pages/http'
import loaderReduxTest from 'bundle-loader?lazy&name=reduxTest!./pages/redux-test'

const Home = props => <Bundle load={loaderHome}>{Home => <Home {...props} />}</Bundle>
const Params = props => <Bundle load={loaderParams}>{Params => <Params {...props} />}</Bundle>
const Query = props => <Bundle load={loaderQuery}>{Query => <Query {...props} />}</Bundle>
const State = props => <Bundle load={loaderState}>{State => <State {...props} />}</Bundle>
const DoubleRouter = props => (
  <Bundle load={loaderDoubleRouter}>{DoubleRouter => <DoubleRouter {...props} />}</Bundle>
)
const RouterComfirm = props => (
  <Bundle load={loaderRouterComfirm}>{RouterComfirm => <RouterComfirm {...props} />}</Bundle>
)
const Replace = props => <Bundle load={loaderReplace}>{Replace => <Replace {...props} />}</Bundle>
const JumbBack = props => (
  <Bundle load={loaderJumbBack}>{JumbBack => <JumbBack {...props} />}</Bundle>
)
const Http = props => <Bundle load={loaderHttp}>{Http => <Http {...props} />}</Bundle>
const ReduxTest = props => (
  <Bundle load={loaderReduxTest}>{ReduxTest => <ReduxTest {...props} />}</Bundle>
)

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
