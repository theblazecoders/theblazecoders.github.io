import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>{bio}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
