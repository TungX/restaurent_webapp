import React from 'react';
import '../styles/home.css';
import Slideshow from './Slideshow';
import { Animate } from 'react-rebound';
const slides = [
    { image: '/assests/images/first.jpg', title: 'First slide', content: 'Content of First slide' },
    { image: '/assests/images/second.jpeg', title: 'Second slide', content: 'Content of Second slide' },
    { image: '/assests/images/third.jpeg', title: 'Third slide', content: 'Content of Third slide' },
];
export default class HomeScreen extends React.Component {
    render() {
        return (
            <div className="content">
                <Slideshow slides={slides} />
                <Animate>
                    <a href="#">Hover Me</a>
                </Animate>
            </div>
        )
    }
}
