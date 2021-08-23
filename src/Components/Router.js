import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home/HomePresenter";
import TV from "Routes/TV/TVPresenter";
import Search from "Routes/Search/SearchPresenter";

const router = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" component={Search} />
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </>
    </Router>
    )

export default router;
