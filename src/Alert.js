import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      padding: "10px",
      fontStyle: "italic"
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#e0648f";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#6fa06f";
  }
}

export { InfoAlert, ErrorAlert };
