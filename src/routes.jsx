import React from 'react'
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'

import Todo from './todo/Todo'
import About from './about/About'

export default props =>(
    <Router>
        <div>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
        </div>
    </Router>

)