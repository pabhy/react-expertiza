import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import Header from './Common/HeaderComponent';
import Footer from './Common/FooterComponent';

export default class App extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    // this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
          <BrowserRouter>
              <div  className="container-fluid">
                <Header />
                  <h2>Welcome to Expertiza</h2>
                <Footer />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}
