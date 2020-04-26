import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import '../styles/booking.scss';

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            showForm: false,
            currentItem: {},
            order: [],
            totalCost: 0,
            currentItemAtOrder: -1,
            categories: [
                {
                    name: 'VENTERETTER',
                    items: [
                        { name: 'EDAMAME', price: '65', image: '/assests/images/foot.jpg', detail: 'Dampede edamamebønner med havsalt Steamed edamame beans with sea salt' },
                        { name: 'SPICY EDAMAME', price: '65', image: '/assests/images/foot.jpg', detail: 'Wokede edamamebønner med chili hvitløkssaus Stir-fried edamame beans with spicy garlic sauce Allergener: Soya, sesam, gluten' },
                        { name: 'SNACKS DE LUXE', price: '75', image: '/assests/images/foot.jpg', detail: 'Rekechips, glaserte valnøtter, fritert spinat Prawn crackers, glazed walnuts, crispy spinach Allergener: Skalldyr, nøtter, gluten' },
                    ]
                },
                {
                    name: 'FORRETTER & SMÅRETTER',
                    items: [
                        { name: 'VÅRRULLER M/SCAMPI', price: '99', image: '/assests/images/foot.jpg', detail: 'Med scampi, crabstick og svinekjøtt. Serveres med ferskensaus. Spring rolls filled with shrimp, crabstick and pork. Served with peach sauce. Allergener: Gluten, skalldyr, fisk, egg' },
                        { name: 'VIETNAMESISKE VÅRRULLER', price: '99', image: '/assests/images/foot.jpg', detail: 'Med svinekjøtt og grønnsaker. Serveres med fiskesaus. Spring rolls filled with pork and vegetables. Served with fish sauce. Allergener: Gluten, fisk' },
                        { name: 'VÅRRULLER M/BIFF', price: '99', image: '/assests/images/foot.jpg', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'VEGETAR VÅRRULLER', price: '99', image: '/assests/images/foot.jpg', detail: 'Med tofu og grønnsaker. Serveres med sweet chilisaus. Spring rolls filled with tofu and vegetables. Served with sweet chili sauce. Allergener: Gluten, soya, fisk' },
                        { name: 'WONTON-SUPPE', price: '99', image: '/assests/images/foot.jpg', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'PEKINGSUPPE (STERK)', price: '99', image: '/assests/images/foot.jpg', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                        { name: 'TOM YUM KUNG-SUPPE (STERK)', price: '99', image: '/assests/images/foot.jpg', detail: 'Med oksekjøtt og grønnsaker. Serveres med sursøt saus. Spring rolls filled with beef and vegetables. Served with sweet sour sauce. Allergener: Gluten, soya, fisk, skalldyr' },
                    ]
                },

            ],
        }
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleClickBtnRequest = this.handleClickBtnRequest.bind(this);
        this.handleClickBtnMinus = this.handleClickBtnMinus.bind(this);
        this.handleClickBtnPlus = this.handleClickBtnPlus.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }
    renderCategories(category, index) {
        return (
            <div className="category" key={index}>
                <h3>{category.name}</h3>
                <ul className="items">
                    {category.items.map((item, i) => {
                        return this.renderItem(item, i);
                    })}
                </ul>
            </div>
        );
    }
    renderItem(item, index) {
        return (
            <li className="item" key={index}>
                <div className="image">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                    <h4>{item.name}</h4>
                    <p className="detail">{item.detail}</p>
                    <p className="price">{item.price}<span>kr</span></p>
                </div>
                <span className="add-to-cart" onClick={() => this.handleClickBtnRequest(item)}>
                    <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <circle fill="none" strokeWidth="1.1" cx="9.5" cy="9.5" r="9"></circle>
                        <line fill="none" x1="9.5" y1="5" x2="9.5" y2="14"></line>
                        <line fill="none" x1="5" y1="9.5" x2="14" y2="9.5"></line>
                    </svg>
                </span>
            </li>
        )
    }
    handleClickBtnRequest(currentItem) {
        currentItem.number = currentItem.number || 1;
        this.setState({ showForm: true, currentItem, itemPrice: currentItem.price * currentItem.number });
    }
    handleAddToCart() {
        this.setState({ showForm: false });
    }
    handleModalClose() {
        this.setState({ showForm: false });
    }
    handleChangeNumber() {
        console.log('handleChangeNumber');
    }
    handleClickBtnPlus() {
        const currentItem = this.state.currentItem;
        currentItem.number = currentItem.number + 1;
        this.setState({ currentItem, itemPrice: currentItem.price * currentItem.number });
    }
    handleClickBtnMinus() {
        const currentItem = this.state.currentItem;
        if (currentItem.number === 0) {
            return;
        }
        currentItem.number = currentItem.number - 1;
        this.setState({ currentItem, itemPrice: currentItem.price * currentItem.number });
    }
    renderModal() {
        return (
            <Modal show={this.state.showForm} onHide={this.handleModalClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src={this.state.currentItem.image} alt={this.state.currentItem.name} />
                        <h4>{this.state.currentItem.name}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Spesielle forespørsler?</Form.Label>
                        <Form.Control as="textarea" rows="3"
                            ref="note"
                            defaultValue={this.state.currentItem.note}
                            placeholder="Legg dem til her. Vi vil gjøre vårt beste for å imøtekomme dem." />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <div className="select-number">
                        <span className="btn minus" onClick={this.handleClickBtnMinus}>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <rect height="1" width="18" y="9" x="1"></rect>
                            </svg>
                        </span>
                        <span className="number">{this.state.currentItem.number}</span>
                        <span className="btn plus" onClick={this.handleClickBtnPlus}>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="1" width="1" height="17"></rect>
                                <rect x="1" y="9" width="17" height="1"></rect>
                            </svg>
                        </span>
                    </div>
                    <Button variant="primary" onClick={this.handleAddToCart}>
                        <span>Add the order</span>
                        <span className="price">kr {this.state.itemPrice}</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    render() {
        this.count = 0;
        return (
            <div className="content">
                <div className="backgroud" style={{ height: window.innerHeight }}>
                    <img src="/assests/images/background-of-booking.webp" alt="backgroud" />
                </div>
                <div className="menu" style={{ minHeight: window.innerHeight }} >
                    <div className="categories">
                        <ul>
                            {this.state.categories.map((value, index) => {
                                return <li key={index}><a>{value.name}</a></li>;
                            })}
                        </ul>
                    </div>
                    <div className="menu-info">
                        <div className="backgroud">
                        </div>
                        {this.state.categories.map((value, index) => {
                            return this.renderCategories(value, index);
                        })}
                    </div>
                    <div className="cart"></div>
                </div>
                {this.renderModal()}
            </div>
        )
    }
}
