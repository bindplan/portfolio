import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Templates from './components/Templates';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/templates' component={Templates} />
                </Switch>
            </main>
        );
    }
}

export default Main;