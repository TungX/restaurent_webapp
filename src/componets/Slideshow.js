import React from 'react';
import '../styles/slideshow.scss'
export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
    }
    renderSlide(slide, index) {
        return (
            <div className="slide" style={{ left: `${index * 100}%` }} key={index}>
                <div className="slide-wrapper">
                    {slide.image && <img src={slide.image} className="slide-image" />}
                    <div className="slide-text-area">
                        {slide.title && <h1 className="slide-title">{slide.title}</h1>}
                        {slide.content && <p className="slide-content">{slide.content}</p>}
                    </div>
                </div>
            </div >
        )
    }
    render() {
        return (
            <div className="slides-wrapper">
                {this.props.slides.map((value, index) => {
                    return this.renderSlide(value, index);
                })}
            </div>
        );
    }
}