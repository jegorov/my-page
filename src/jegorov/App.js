import React, {Component} from "react";
import Home from "./components/pages/Home";
import {Router, Route, Switch} from "react-router-dom";
import Resume from "./components/pages/Resume";
import PageNotFound from "./components/pages/PageNotFound";
import history from "./service/history"

class App extends Component {
    constructor(props) {
        super(props);
    }


    function

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/resume"} component={Resume}/>
                    <Route path={"/*"} component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
