import React from 'react';
import '../styles/slideshow.scss';
import { Slide } from 'react-slideshow-image';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
    }
    renderSlide(slide, index) {
        return (
            <div className="each-slide" key={index}>
                <div style={{ 'backgroundImage': `url(${slide.image})`, ...this.props.style }}>
                    <div className="slide-text-area">
                        <h1 className="slide-title">{slide.title}</h1>
                        <p className="slide-content">{slide.content}</p>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Slide {...properties} className="slides-wrapper" style={{ ...this.props.style }}>
                {this.props.slides.map((value, index) => {
                    return this.renderSlide(value, index);
                })}
            </Slide>
        )
    }
}
