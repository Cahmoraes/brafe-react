import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import Home from '../pages/Home'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/brafe-react/" component={Home} />
    </Switch>
  )
}

export default Routes