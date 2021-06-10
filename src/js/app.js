import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'

import Login from './pages/login'
import Home from './pages/home'

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {

        dispatch({ type: "APP_INIT" })

        setTimeout(() => {
            dispatch({ type: "APP_READY" })
        }, 2000)
    }, [])

    console.log('APP global state : ', appState)

    return (
        <Router>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">About</Link>
            </li>
        </ul>
    </nav>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
    </Switch>
</Router>
)
}

export default App