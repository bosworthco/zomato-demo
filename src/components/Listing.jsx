import React, { Component } from 'react';

class Listing extends Component {
  render() {
    return (
      <div className="Display-listing u-md-width2of3">
        <div className="Listing">

          <header className="Listing-header">
            <h1 className="h3 u-textBold u-mB-sm">Urban Oyster Bar &amp; Eatery</h1>
            <p className="h5 u-textGrey">278 Hardy Street, Nelson City, Nelson</p>
          </header>

          <ul className="Listing-features">
            <li className="Listing-features-item" data-available="false">No bookings</li>
            <li className="Listing-features-item" data-available="true">Delivery available</li>
          </ul>

          <section className="Listing-cuisines">
            <h3 className="h6 u-mB-sm">Cuisines</h3>
            <p className="h5">Coffee and Tea, Cafe Food</p>
          </section>

          <section className="Listing-contact">
            <h3 className="h6 u-mB-sm">Phone number</h3>
            <p className="h5">+64 3 546 7861</p>
          </section>

          <section className="Listing-hours">
            <h3 className="h6 u-mB-sm">Opening Hours</h3>
            <p className="h5">4pm – 11pm (Today) <span className="Listing-hours-status" data-open="true">Open now</span></p>
          </section>
        </div>
      </div>
    )
  }
}

export default Listing;
