import React from 'react';
import '../styles/home.scss';
import Slideshow from './Slideshow';

const slides = [
    { image: '/assests/images/first.jpg', title: 'First slide', content: 'Content of First slide' },
    { image: '/assests/images/second.jpeg', title: 'Second slide', content: 'Content of Second slide' },
    { image: '/assests/images/third.jpeg', title: 'Third slide', content: 'Content of Third slide' },
];
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log('click button');
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <div className="content">
                <Slideshow slides={slides} />
            </div>
        )
    }
}
