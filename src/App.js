import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - constructor');
  }

  componentDidMount() {
    console.log('App - Mounted');
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log('Increment clicked', this.state.counters[index]);
  };

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
        <Router>
          <NavBar totalCounters={this.state.counters.length} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
