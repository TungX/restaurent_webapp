import React from 'react';
import '../styles/restaurant.scss';

export default class RestaurantScreen extends React.Component {
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
                <div className="section-title" style={{ height: window.innerHeight }}>
                    <div className="text-area">
                        <h1>OUR RESTAURANT</h1>
                        <div className="line"></div>
                        <p>It hides a secret below the ground!</p>
                    </div>
                </div>
                <div className="section section-two" style={{ height: (window.innerHeight) }}>
                    {/* <img src="/assests/images/restaurant_2.webp" alt="Kitchen" /> */}
                    <div className="text-area">
                        <div className="text-content">
                            <h1 className="title">CONTACT US</h1>
                            <div className="section-content">
                                <p>
                                    Our restaurant is newly refurbished and is perfect for corporate dinners and larger private parties. Feel free to contact us for a nice chat about how we can help with their event
                            </p>
                                <p>
                                    Contact: abcrestaurantasno@gmail.com
                            </p>
                                <p>
                                    or call us on Tel: 41188856
                            </p>
                            </div>
                        </div>
                        <div className="background"></div>
                    </div>
                </div>
                <div className="section section-three" style={{ height: (window.innerHeight) }}>
                    {/* <img src="/assests/images/restaurant_3.webp" alt="Kitchen" /> */}
                    <div className="text-area">
                        <div className="text-content">
                            <h1 className="title">CONTACT US</h1>
                            <div className="section-content">
                                <p>
                                    Our restaurant is newly refurbished and is perfect for corporate dinners and larger private parties. Feel free to contact us for a nice chat about how we can help with their event
                            </p>
                                <p>
                                    Contact: abcrestaurantasno@gmail.com
                            </p>
                                <p>
                                    or call us on Tel: 41188856
                            </p>
                            </div>
                        </div>
                        <div className="background"></div>
                    </div>
                </div>
            </div>
        )
    }
}
