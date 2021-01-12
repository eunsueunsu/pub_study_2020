import React from "react"
import {BrowserRouter as Router, Route,  Switch} from "react-router-dom"
import Watcha from "./page/WatchaLoginPage"
import WatchaPediaMain from "./page/WatchaPedia/main";

const Routes = () => {
    return( <Router>
            <Switch>
                <Route path ="/watcha" component={Watcha}/>
                <Route path="/watcha_pedia" component={WatchaPediaMain}/>
            </Switch>
        </Router>
    )
}

export default Routes
