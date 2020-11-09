import React from 'react';

const Results = () => {
  return (
    <section className="Display-results u-md-width1of3">

      <nav className="Results" aria-labelledby="label_results">
        <h6 className="Results-title" id="label_results">Results</h6>

        {/* {errorMessage ? <p>{errorMessage}</p> : null} */}

        <ul className="Results-list">
          <li>
            <a href="/" className="Results-list-link">Speight's Ale House</a>
          </li>
          <li>
            <a href="/" className="Results-list-link is-active">Urban Oyster Bar &amp; Eatery</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Hopgood's Restaurant</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Ford's Restaurant</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">The Vic Mac's Brewbar</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Nahm</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">The Indian Cafe</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">The Styx Kitchen & Bar</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Stefano's Pizzeria</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Deville Cafe</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Paasha Turkish Restaurant</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">The Mussel Inn</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Tongtara Thai Restaurant</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Apple Shed Cafe</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Cod and Lobster Brasserie</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Jester House Cafe</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">TOAD Hall Cafe</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Kush Coffee</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Harry's</a>
          </li>
          <li>
            <a href="/" className="Results-list-link">Simply Indian</a>
          </li>
        </ul>
      </nav>

    </section>
  )
}

export default Results; // Don’t forget to use export default!