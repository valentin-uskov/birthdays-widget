import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history';
import ErrorPage from './error';
import HomePage from './home';

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/" component={() => (ErrorPage('#404 - page not found...'))} />
            </Switch>
        </ConnectedRouter>
    )
}
export default Router;