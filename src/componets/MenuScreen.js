import React from 'react';
import '../styles/menu.scss';

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            categories: [],
        }
        this.loadCategories = this.loadCategories.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickCategory = this.handleClickCategory.bind(this);
        this.oldScroll = 0;
        this.categoryActive = 0;
    }
    componentDidMount() {
        this.loadCategories();
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(e) {
        if (window.scrollY > 70) {
            this.setState({ classWhenScroll: 'header-small' });
        } else {
            this.setState({ classWhenScroll: '' });
        }
        if (window.scrollY > this.oldScroll) {
            for (let i = this.categoryActive + 1; i < this.state.categories.length; i++) {
                const elementTop = this.refs[`category-${i}`].getBoundingClientRect().top;
                if (elementTop > 200) {
                    break;
                }
                if (elementTop > 0) {
                    this.state.categories[this.categoryActive].active = false;
                    this.categoryActive = i;
                    this.state.categories[this.categoryActive].active = true;
                    break;
                }
            }
        } else {
            for (let i = this.categoryActive - 1; i >= 0; i--) {
                const elementBottom = this.refs[`category-${i}`].getBoundingClientRect().top +
                    this.refs[`category-${i}`].clientHeight;
                console.log(`${i}-${elementBottom}`);
                if (elementBottom > 200) {
                    this.state.categories[this.categoryActive].active = false;
                    this.categoryActive = i;
                    this.state.categories[this.categoryActive].active = true;
                    break;
                }
            }
        }
        this.oldScroll = window.scrollY;
    }

    async loadCategories() {
        try {
            const res = await fetch((process.env.REACT_APP_HOST || '') + "/api/v1/categories", {
                method: 'GET',
            });
            const responeData = await res.json();
            console.log(responeData);
            if (responeData.status === 1) {
                const categories = responeData.data;
                categories[0].active = true;
                this.setState({ categories });
            }
        } catch (error) {
            console.error(error);
        }
    }
    renderItem(item, index) {
        return (
            <div className="item" key={index}>
                <div className="background"></div>
                <div className="image">
                    <img src={item.image ? item.image : '/assests/images/sushi.png'} />
                </div>
                <div className="item-info">
                    <h4 className="name">{item.code}. {item.name}</h4>
                    <div className="description">
                        {item.detail && <h5 className="detail">{item.detail}</h5>}
                        {item.allergens && <h5 className="allergener">
                            <span>Allergener:</span>
                            {item.allergens}</h5>}
                    </div>
                </div>
                <h5 className="price">kr <span>{item.price || 99}</span></h5>
            </div>
        )
    }
    // loadMenuItem() {
    //     categoryElements = $('.classicYlF2o')
    //     var categories = [];
    //     for (var i = 0; i < categoryElements.length; i++) {
    //         var categoryElement = $(categoryElements[i]);
    //         var categoryName = categoryElement.find('h2').text();
    //         var items = [];
    //         var itemElements = categoryElement.find('li');
    //         for (var j = 0; j < itemElements.length; j++) {
    //             var itemElement = $(itemElements[j]);
    //             var item = { 'detail': itemElement.find('h5').text() };
    //             var info = itemElement.find('h4')
    //             item['name'] = info.find('.classic1PykL span').text()
    //             item['price'] = info.find('.classic2Vkl6').text()
    //             items.push(item)
    //         }
    //         categories.push({ name: categoryName, items: items })
    //     }
    //     for (var i = 0; i < categories.length; i++) {
    //         $.ajax({
    //             method: "POST",
    //             url: "http://localhost:3156/api/v1/categories",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             data: JSON.stringify(categories[i])
    //         })
    //     }
    // }
    renderCategory(category, order) {
        return (
            <div className={`category category-${order}`}
                key={order}
                ref={`category-${order}`}>
                <h1>{category.name}</h1>
                <div className="line"></div>
                <ul>
                    {category.items.map((value, index) => {
                        return this.renderItem(value, index);
                    })}
                </ul>

            </div >

        )
    }
    handleClickCategory(index) {
        if (index > 0)
            window.scrollTo({ behavior: 'smooth', top: (this.refs[`category-${index}`].offsetTop + 20) });
        else
            window.scrollTo({ behavior: 'smooth', top: 0 });
    }
    render() {
        this.count = 0;
        return (
            <div className={`content ${this.state.classWhenScroll}`}>
                <div className="background" style={{ height: window.innerHeight }}>
                    {/* <img src="/assests/images/background-of-menu.webp" alt="background" /> */}
                </div>
                <div className="categories">
                    <div className="background"></div>
                    <ul>
                        {this.state.categories.map((value, index) => {
                            return (
                                <li key={index}
                                    className={`category-${index} ${value.active ? 'active' : ''}`}
                                    onClick={() => this.handleClickCategory(index)}>
                                    {value.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="items">
                    <div className="background"></div>
                    {this.state.categories.map((value, index) => {
                        return this.renderCategory(value, index);
                    })}

                </div>
            </div>
        )
    }
}
