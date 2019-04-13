import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="copyright">
              <li>&copy; Copyright {new Date().getFullYear()} The Blaze Coders</li> {/* Add A Better Copyright (not full copyright)*/}
              <li>Design by <a href="https://github.com/theblazecoders">The Blaze Coders</a></li>
           </ul>

        </div>
        {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div> */ /* Add later*/}
     </div>
  </footer>
    );
  }
}

export default Footer;
