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
    renderSlide(slide, index) {
        return (
            <div className="each-slide" key={index}>
                <div style={{ 'backgroundImage': `url(${slide.image})` }}>
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
            <div className="slides-wrapper">
                <Slide {...properties}>
                    {this.props.slides.map((value, index) => {
                        return this.renderSlide(value, index);
                    })}
                </Slide>
            </div>
        )
    }
}
