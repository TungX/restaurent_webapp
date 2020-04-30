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
    }
    render() {
        return (
            <div className="content">
                <Slideshow slides={slides} />
                <div className="restaurant-title">
                    <h1>ABC RESTAURANT</h1>
                </div>
                <div className="restaurant-info" style={{ minHeight: (window.innerHeight) }}>
                    <div className="descreption" style={{ minHeight: (window.innerHeight) }}>
                        <div className="background" ></div>
                        <div className="text-area">
                            <h1 className="title">OM OSS</h1>
                            <div className="line"></div>
                            <div className="text-content">
                                <p>
                                    ABC Restaurant er en familiebedrift, med over 20 års erfaring i bransjen. Vi ønsker å tilby dere en opplevelse innenfor asiatiske smaker.
                                </p>
                                <p>
                                    Hos oss har vi À la carte, søndagsbuffet, catering løsninger og take away. I tillegg har vi også selskapslokale som du kan booke for kurs og konferanse, eller til andre spesielle begivenheter.
                                </p>
                                <p>
                                    Restauranten ligger sentralt plassert på Strømmen med nærhet til Strømmen Storsenter
                                </p>
                                <a href="/menu" className="btn menu">Show Out Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="restaurant-title">
                    {/* <img src="/assests/images/night-sky.png" alt="night sky" /> */}
                    <h1>OUR RESTAURANT</h1>
                </div>
                <Slideshow slides={slides} />
            </div>
        )
    }
}
