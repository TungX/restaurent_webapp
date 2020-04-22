import React, { Suspense, lazy } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const HomeScreen = lazy(() => import('./componets/HomeScreen'));
const MenuScreen = lazy(() => import('./componets/MenuScreen'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: '',
            logined: false,
            loadingBarProgress: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.setState({ loadingBarProgress: 100 });
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(e) {
        console.log('handle scroll');
    }

    render() {
        return (
            <Router>
                <LoadingBar
                    progress={this.state.loadingBarProgress}
                    height={3}
                    color='#118FA6'
                />
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
                </div>
                <div id="footer">
                    <div className="contact">
                        <h1>RESTAURANT</h1>
                        <h3>contact us</h3>
                        <div className="icons">
                            <a href="https://www.facebook.com/ABCRestaurantAS/">
                                <img src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/e0678ef25486466ba65ef6ad47b559e1.webp" /></a>
                            <a className="icon-2" href="https://www.facebook.com/ABCRestaurantAS/">
                                <img src="https://static.wixstatic.com/media/52b5a40f3b0c4b6c9423b71489ba1bb0.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/52b5a40f3b0c4b6c9423b71489ba1bb0.webp" /></a>
                            <a href="https://www.facebook.com/ABCRestaurantAS/">
                                <img src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/da7ef6dd1302486c9a67baebe4b364bc.webp" /></a>
                        </div>
                        <div className="address">
                            <p>
                                <img src="/assests/images/phone.png" />
                                <span>RING OSS: +47 41188856</span>
                            </p>
                            <p>
                                <img src="/assests/images/point.png" />
                                <span>Stromsveien 47, Strommen, Norway</span>
                            </p>
                            <p>
                                <img src="/assests/images/mail.png" />
                                <span>contact@abcrestaurant.no</span>
                            </p>
                        </div>
                    </div>
                    <div className="open-time">
                        <h1>Openning</h1>
                        <h3>RESTAURANT</h3>
                        <div className="duration">
                            <p>
                                <span className="day">Monday - Thursday:</span>
                                <span className="time">15.00 - 22.00</span>
                            </p>
                            <p>
                                <span className="day">Friday - Saturday:</span>
                                <span className="time">15.00 - 23.00</span>
                            </p>
                            <p>
                                <span className="day">Sunday:</span>
                                <span className="time">15.00 - 22.00</span>
                            </p>
                        </div>
                        <h3>CAFE & TAKE AWAY</h3>
                        <div className="duration">
                            <p>
                                <span className="day">Monday - Saturday:</span>
                                <span className="time">11.00 - 19.00</span>
                            </p>
                            <p>
                                <span className="day">Sunday:</span>
                                <span className="time">14.00 - 19.00</span>
                            </p>
                        </div>
                    </div>
                    <div className="social">
                        <h1>ABC Restaurant</h1>
                        <div className="fb-page"
                            data-href="https://www.facebook.com/ABCRestaurantAS/"
                            data-tabs="timeline"
                            data-width="330"
                            data-height="180"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/ABCRestaurantAS/"
                                className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/ABCRestaurantAS/">ABCRestaurant</a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;
