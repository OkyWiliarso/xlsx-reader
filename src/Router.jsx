import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SheetJSApp from './SheetJSApp.jsx'

export default () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = { SheetJSApp }></Route>
    </Switch>
  </BrowserRouter>
  )
}
