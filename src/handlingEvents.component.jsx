import { Component } from 'react';

class HandlingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(
      (prevState) => ({
        status: !prevState.status,
      }),
      () => console.log(this.state.status)
    );
  }
  render() {
    return (
      <button onClick={this.handleToggle}>
        {this.state.status ? 'On' : 'Off'}
      </button>
    );
  }
}

export default HandlingEvents;
