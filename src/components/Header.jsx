import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-filters u-width2of3">
          <div className="u-width1of4">
            <h6 className="u-width1of1 u-mB-sm" id="label_category">Category</h6>
            <ul className="Header-filters-list Header-filters-list--category" aria-labelledby="label_category">
              <li>
                <label className="Checkbox" htmlFor="cat_dining">
                  <input className="Checkbox-input" type="checkbox" id="cat_dining" />
                  <span className="Checkbox-label">Dining</span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cat_takeaway">
                  <input className="Checkbox-input" type="checkbox" id="cat_takeaway" />
                  <span className="Checkbox-label">Takeaway</span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cat_delivery">
                  <input className="Checkbox-input" type="checkbox" id="cat_delivery" />
                  <span className="Checkbox-label">Delivery</span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cat_pubs_bars">
                  <input className="Checkbox-input" type="checkbox" id="cat_pubs_bars" />
                  <span className="Checkbox-label">Pubs &amp; Bars</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="u-width3of4">
            <h6 className="u-width1of1 u-mB-sm" id="label_cuisine">Cuisine</h6>
            <ul className="Header-filters-list Header-filters-list--cuisine" aria-labelledby="label_cuisine">
              <li>
                <label className="Checkbox" htmlFor="cui_cafe_food">
                  <input className="Checkbox-input" type="checkbox" id="cui_cafe_food" />
                  <span className="Checkbox-label">Cafe food </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_coffee_tea">
                  <input className="Checkbox-input" type="checkbox" id="cui_coffee_tea" />
                  <span className="Checkbox-label">Coffee and tea </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_pizza">
                  <input className="Checkbox-input" type="checkbox" id="cui_pizza" />
                  <span className="Checkbox-label">Pizza </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_fast_food">
                  <input className="Checkbox-input" type="checkbox" id="cui_fast_food" />
                  <span className="Checkbox-label">Fast Food </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_asian">
                  <input className="Checkbox-input" type="checkbox" id="cui_asian" />
                  <span className="Checkbox-label">Asian </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_bakery">
                  <input className="Checkbox-input" type="checkbox" id="cui_bakery" />
                  <span className="Checkbox-label">Bakery </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_italian">
                  <input className="Checkbox-input" type="checkbox" id="cui_italian" />
                  <span className="Checkbox-label">Italian </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_sandwich">
                  <input className="Checkbox-input" type="checkbox" id="cui_sandwich" />
                  <span className="Checkbox-label">Sandwich </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_chinese">
                  <input className="Checkbox-input" type="checkbox" id="cui_chinese" />
                  <span className="Checkbox-label">Chinese </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_pub_food">
                  <input className="Checkbox-input" type="checkbox" id="cui_pub_food" />
                  <span className="Checkbox-label">Pub food </span>
                </label>
              </li>
              <li>
                <label className="Checkbox" htmlFor="cui_other">
                  <input className="Checkbox-input" type="checkbox" id="cui_other" />
                  <span className="Checkbox-label">Other </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="Header-ranges u-width1of3">
          <h6 className="u-width1of1 u-mB-sm">Rating</h6>
          <h6 className="u-width1of1 u-mB-sm">Cost</h6>
        </div>
      </header>
    )
  }
}

export default Header;
