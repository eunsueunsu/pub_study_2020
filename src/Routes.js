import React from "react"
import {BrowserRouter as Router, Route,  Switch} from "react-router-dom"
import Watcha from "./page/WatchaLoginPage"

const Routes = () => {
    return( <Router>
            <Switch>
                <Route path ="/watcha" component={Watcha}/>

            </Switch>
        </Router>
    )
}

export default Routes
