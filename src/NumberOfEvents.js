import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "",
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        numberOfEvents: value,
        errorText: "Please enter a number between 1-32",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>
          <input
            type="number"
            className="number-input"
            placeholder="Number of events"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
