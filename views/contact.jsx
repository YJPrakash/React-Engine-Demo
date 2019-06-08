const React = require("react");
class HelloMessage extends React.Component {
  render() {
    return <div>Hello message from {this.props.name}</div>
  }
};

module.exports = HelloMessage;
