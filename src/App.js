import React, { Component } from 'react';
import Main from './Main';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({loading: false});
    }, 3000);
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <ScrollButton />
          <Main />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="loader" id="loader">
            <span className="c"></span>
            <span className="c c2"></span>
            <span className="c c3"></span>
            <span className="c c2"></span>
            <span className="c c3"></span>
            <span className="c c4"></span>
            <span className="c c3"></span>
            <span className="c c4"></span>
            <span className="c c5"></span>
        </div>
      );
    }
  }
}

export default App;
