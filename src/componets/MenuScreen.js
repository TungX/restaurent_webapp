import React from 'react';
import '../styles/menu.scss';

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            categories: [
                {
                    name: 'VENTERETTER',
                    items: [
                        { name: 'EDAMAME', price: '65', detail: 'Dampede edamamebønner med havsalt Steamed edamame beans with sea salt' },
                        { name: 'SPICY EDAMAME', price: '65', detail: 'Wokede edamamebønner med chili hvitløkssaus Stir-fried edamame beans with spicy garlic sauce Allergener: Soya, sesam, gluten' },
                        { name: 'SNACKS DE LUXE', price: '75', detail: 'Rekechips, glaserte valnøtter, fritert spinat Prawn crackers, glazed walnuts, crispy spinach Allergener: Skalldyr, nøtter, gluten' },
                    ]
                },
                {
                    name: 'FORRETTER & SMÅRETTER',
                    items: [
                        { name: 'VÅRRULLER M/SCAMPI', price: '99', detail: 'Med scampi, crabstick og svinekjøtt. Serveres med ferskensaus. Spring rolls filled with shrimp, crabstick and pork. Served with peach sauce. Allergener: Gluten, skalldyr, fisk, egg' },
                        { name: 'VIETNAMESISKE VÅRRULLER', price: '99', detail: 'Med svinekjøtt og grønnsaker. Serveres med fiskesaus. Spring rolls filled with pork and vegetables. Served with fish sauce. Allergener: Gluten, fisk' },
                        { name: 'VÅRRULLER M/BIFF', price: '99', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'VEGETAR VÅRRULLER', price: '99', detail: 'Med tofu og grønnsaker. Serveres med sweet chilisaus. Spring rolls filled with tofu and vegetables. Served with sweet chili sauce. Allergener: Gluten, soya, fisk' },
                        { name: 'WONTON-SUPPE', price: '99', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'PEKINGSUPPE (STERK)', price: '99', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'TOM YUM KUNG-SUPPE (STERK)', price: '99', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                    ]
                },

            ],
        }
    }
    renderItem(item, index) {

        return (
            <div className="item" key={index}>
                <div className="item-info">
                    <span className="name">{this.count++ + 1}.{item.name}</span>
                    <span className="dots"></span>
                    <span className="price">{item.price}</span>
                </div>
                <p className="detail">{item.detail}</p>
            </div>
        )
    }
    renderCategory(category, order) {
        return (
            <div className={`category-${order}`} key={order}>
                <h1>{category.name}</h1>
                <ul>
                    {category.items.map((value, index) => {
                        return this.renderItem(value, index);
                    })}
                </ul>

            </div>
        )
    }
    render() {
        this.count = 0;
        return (
            <div className="content">
                <div className="backgroud" style={{ height: window.innerHeight }}>
                    <img src="/assests/images/restaurant-background.jpg" alt="backgroud"/>
                </div>
                {/* <div className="categories">
                    <ul>
                        {this.state.categories.map((value, index) => {
                            return <li key={index} className={`category-${index}`}>{value.name}</li>;
                        })}
                    </ul>
                </div> */}
                <div className="items">
                    {this.state.categories.map((value, index) => {
                        return this.renderCategory(value, index);
                    })}

                </div>
            </div>
        )
    }
}
