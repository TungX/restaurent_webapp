import React from 'react';
import '../styles/catering.scss';

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.language = this.props.language;
        this.count = 0;
        this.state = {
        }
    }
    render() {
        this.count = 0;
        return (
            <div className="content">
                <div className="backgroud" style={{ height: window.innerHeight }}>
                    {/* <img src="/assests/images/background-of-catering.webp" alt="backgroud" /> */}
                </div>
                <div className="descreption" style={{ minHeight: (window.innerHeight) }} >
                    <div className="text-area">
                        <h1>{this.language.title}</h1>
                        <div className="text-content">
                            {this.language.description.split('\n').map((p, index) => {
                                return <p key={index}>{p}</p>
                            })}
                        </div>
                        <p className="context">
                            {this.language.contact}
                        </p>
                        <p><a className="btn" href="/menu">{this.language.seeMenu}</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
