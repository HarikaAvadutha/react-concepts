import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('Previous props', prevProps);
    console.log('Previous state', prevState);
  }

  render() {
    console.log('Counters - Rendered');

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btm-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h5>Counter {counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

class Test extends React.Component {
  constructor(props) { this.handleChange = this.handleChange.bind(this); }
  }
  
export default Counters;
