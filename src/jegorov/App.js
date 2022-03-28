import React, {Component} from "react";
import Home from "./components/pages/Home";
import {HashRouter, Route, Switch} from "react-router-dom";
import Resume from "./components/pages/Resume";
import PageNotFound from "./components/pages/PageNotFound";

class App extends Component {
   

    function
    render() {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
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
