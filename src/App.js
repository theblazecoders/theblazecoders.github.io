import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Project from './Components/Project';
import Info from './info.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Info
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.Info.main}/>
        <About data={this.state.Info.main}/>
        <Project data={this.state.Info.project}/>
        <Testimonials data={this.state.Info.testimonials}/>
        <Footer data={this.state.Info.main}/>
      </div>
    );
  }
}

export default App;
