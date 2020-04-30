import React from 'react';
import '../styles/catering.scss';

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
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
                        <h1>FOR CATERING</h1>
                        <div className="text-content">
                            <p>Vi leverer kvalitetsmat til alle anledninger!</p>
                            <p>Kan du ikke komme til oss, men har lyst på maten vår i selskapet ditt?</p>
                            <p>
                                Vi tilbyr catering til små og store selskap, dåp, konfirmasjon, bryllup, firmafest, bursdag, møter eller andre anledninger der det er behov for mat. Vi kan legge til rette for at festen blir topp med anretning av maten sammen med våre kokker og servitører. Kontakt oss så skreddersyr vi en smaksopplevelse til deg
                            </p>
                        </div>
                        <p className="context">
                            Kontakt: abcrestaurantasno@gmail.com eller ring oss på Tlf: 41188856
                        </p>
                        <p><a className="btn" href="/menu">See menu</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
