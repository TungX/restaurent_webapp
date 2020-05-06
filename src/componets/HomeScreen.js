import React from 'react';
import '../styles/home.scss';
import Slideshow from './Slideshow';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const slides = [
    { image: '/assests/images/slide_1.1.jpg', title: 'ABC', content: 'STRØMMEN' },
    { image: '/assests/images/slide_1.2.jpg', title: 'ABC', content: 'STRØMMEN' },
    { image: '/assests/images/slide_1.3.jpg', title: 'ABC', content: 'STRØMMEN' },
];
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const foots = [
    '/assests/images/foot_1.webp',
    '/assests/images/foot_2.webp',
    '/assests/images/foot_3.webp',
    '/assests/images/foot_4.webp',
    '/assests/images/foot_5.webp',
    '/assests/images/foot_6.webp',
]

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.language = this.props.language;
        this.state = {
            clicked: false,
        }
        slides.map((value) => {
            value.title = this.language.firstTitle;
            value.content = this.language.firstDescreption;
        });
    }
    render() {
        return (
            <div className="content">
                <div className="first-page">
                    <Slideshow slides={slides} style={{ minHeight: (window.innerHeight) }} />
                    <div class="fixed-scroll-down">
                        <span class="fixed-scroll-text">Kéo xuống</span>
                    </div>
                </div>
                <div className="about-us" style={{ minHeight: (window.innerHeight) }}>
                    <div className="background" ></div>
                    <div className='text-area'>
                        <h1 className='title'>{this.language.aboutus}</h1>
                        <div className='text-content'>
                            {this.language.aboutusDescription}
                        </div>
                    </div>
                    <div className="sushi-place">
                        <img src='/assests/images/sushi-place.png' />
                    </div>
                </div>
                <div className='foots'>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={1000}
                        infinite={true}
                    >
                        {foots.map((value, index) => {
                            return <div className='slide-foot' key={`slide-foot-${index}`}><img src={value} /></div>
                        })}
                    </Carousel>
                </div>
                <div className="blog" style={{ minHeight: (window.innerHeight) }}>
                    <div className='blog-wrapper'>
                        <h1>
                            <span className='title'>BLOG</span>
                            <span className='btn pull-right'>SHOW MORE</span>
                        </h1>
                        <div className='blog-first-content'>
                            <a href='/menu'><img src='/assests/images/blog-first.webp' /></a>
                            <div className='blog-content'>
                                <h2 className='title'>Ở nhà đổi vị cùng trà sữa mắc ca trân châu trắng</h2>
                                <p>Một "làn gió" mới mà The Coffee House mang đến cho bạn trong tháng 4 - TRÀ SỮA MẮC CA TRÂN TRÂU TRẮNG sẽ chính thức lên kệ từ ngày ...</p>
                                <a href='#' className='btn'>Show more</a>
                            </div>
                        </div>
                        <div className='blog-other-content'>

                        </div>
                    </div>
                </div>
                {/* <div className="at-the-abc" style={{ minHeight: (window.innerHeight) }}>
                    <h1>AT THE ABC RESTAURANT</h1>
                </div> */}
                {/* <div className="restaurant-info" style={{ minHeight: (window.innerHeight) }}>
                    <div className="descreption" style={{ minHeight: (window.innerHeight) }}>
                        <div className="background" ></div>
                        <div className="text-area">
                            <h1 className="title">TAKE AWAY</h1>
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
                                <a href="/menu" className="btn menu">BESTILL TAKEAWAY</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
        )
    }
}
