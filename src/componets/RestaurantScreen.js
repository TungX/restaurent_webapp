import React from 'react';
import '../styles/restaurant.scss';

export default class RestaurantScreen extends React.Component {
    constructor(props) {
        super(props);
        this.language = this.props.language;
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
                        <h1>{this.language.firstSectionTitle}</h1>
                        <div className="line"></div>
                        <p>{this.language.firstSectionDescreption}</p>
                    </div>
                </div>
                <div className="section section-two" style={{ height: (window.innerHeight) }}>
                    {/* <img src="/assests/images/restaurant_2.webp" alt="Kitchen" /> */}
                    <div className="text-area">
                        <div className="text-content">
                            <h1 className="title">{this.language.secondSectionTitle}</h1>
                            <div className="section-content">
                                {this.language.secondSectionDescreption.split('\n').map((p, index) => {
                                    return <p key={index}>{p}</p>
                                })}
                            </div>
                        </div>
                        <div className="background"></div>
                    </div>
                </div>
                <div className="section section-three" style={{ height: (window.innerHeight) }}>
                    {/* <img src="/assests/images/restaurant_3.webp" alt="Kitchen" /> */}
                    <div className="text-area">
                        <div className="text-content">
                            <h1 className="title">{this.language.thirdSectionTitle}</h1>
                            <div className="section-content">
                                {this.language.thirdSectionDescreption.split('\n').map((p, index) => {
                                    return <p key={index}>{p}</p>
                                })}
                            </div>
                        </div>
                        <div className="background"></div>
                    </div>
                </div>
            </div>
        )
    }
}
