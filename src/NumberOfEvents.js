import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = { numberOfEvents: 32 };
  
   /* handleInputChanged = (event) => {
    this.props.updateEvents(undefined, event.target.value);
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };*/

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 0 && value <= 32) {
        this.setState({ numberOfEvents: value });
    } else {
        this.setState({ numberOfEvents: 32 });
    }
};


  render() {
    return (
      <div className="numberOfEvents">
        <label>
          Number of Events:
          <input
            type="number"
            className="number-input"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;