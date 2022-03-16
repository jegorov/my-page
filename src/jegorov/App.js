import React, {Component} from "react";
import Home from "./components/pages/Home";
import {HashRouter, Route, Switch, Link} from "react-router-dom";
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
            <HashRouter basename={process.env.PUBLIC_URL} history={history}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/resume"} component={Resume}/>
                    <Route path={"/*"} component={PageNotFound}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
