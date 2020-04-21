import React, { Suspense, lazy } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const HomeScreen = lazy(() => import('./componets/HomeScreen'));
const MenuScreen = lazy(() => import('./componets/MenuScreen'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: '',
            logined: false,
        };
    }

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div id="header">
                        <ul className='h_inner'>
                            <li className="logo"><a href="/"><img src='/assests/logo.png' /></a></li>
                            <li className="menu">
                                <a href="/menu" className={this.state.currentPage === '/menu' ? 'active' : ''}>Menu</a>
                                <a href="/booking" className={this.state.currentPage === '/booking' ? 'active' : ''}>Booking</a>
                                <a href="/companies" className={this.state.currentPage === '/companies' ? 'active' : ''}>Companies</a>
                                <a href="/catering" className={this.state.currentPage === '/catering' ? 'active' : ''}>Catering</a>
                            </li>
                        </ul>
                    </div>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/">
                                <HomeScreen />
                            </Route>
                            <Route exact path="/menu">
                                <MenuScreen />
                            </Route>
                        </Switch>
                    </Suspense>
                    <div id="footer">

                    </div>
                </div>
            </Router>
        )
    }
}
export default App;
