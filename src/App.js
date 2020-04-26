import React, { Suspense, lazy } from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const HomeScreen = lazy(() => import('./componets/HomeScreen'));
const MenuScreen = lazy(() => import('./componets/MenuScreen'));
const RestaurantScreen = lazy(() => import('./componets/RestaurantScreen'));
const CateringScreen = lazy(() => import('./componets/CateringScreen'));
const BookingScreen = lazy(() => import('./componets/BookingScreen'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: window.location.pathname,
            logined: false,
            loadingBarProgress: 0,
            classWhenScroll: '',
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.setState({ loadingBarProgress: 100 });
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(e) {
        if (window.scrollY > 70) {
            this.setState({ classWhenScroll: 'header-small' });
        } else {
            this.setState({ classWhenScroll: '' });
        }
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
                    <div id="header" className={this.state.classWhenScroll}>
                        <div className="background"></div>
                        <ul className='h_inner'>
                            <li className="menu-left">
                                <a href="/menu" className={this.state.currentPage === '/menu' ? 'active' : ''}>Menu</a>
                                <a href="/booking" className={this.state.currentPage === '/booking' ? 'active' : ''}>Booking</a>
                            </li>
                            <li className="logo"><a href="/"><img src='/assests/logo.png' alt='logo' /></a></li>
                            <li className="menu-right">
                                <a href="/resaurant" className={this.state.currentPage === '/companies' ? 'active' : ''}>Restaurant</a>
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
                            <Route exact path="/resaurant">
                                <RestaurantScreen />
                            </Route>
                            <Route exact path="/catering">
                                <CateringScreen />
                            </Route>
                            <Route exact path="/booking">
                                <BookingScreen />
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
                                <img src="/assests/images/facebook-logo.webp" alt="facebook logo" />
                            </a>
                            <a className="icon-2" href="https://www.facebook.com/ABCRestaurantAS/">
                                <img src="/assests/images/tw-logo.webp" alt="tw logo" />
                            </a>
                            <a href="https://www.facebook.com/ABCRestaurantAS/">
                                <img src="/assests/images/intagram-logo.webp" alt="intagram logo" />
                            </a>
                        </div>
                        <div className="address">
                            <p>
                                <img src="/assests/images/phone.png" alt="phone logo" />
                                <span>RING OSS: +47 41188856</span>
                            </p>
                            <p>
                                <img src="/assests/images/point.png" alt="point logo" />
                                <span>Stromsveien 47, Strommen, Norway</span>
                            </p>
                            <p>
                                <img src="/assests/images/mail.png" alt="mail logo" />
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
