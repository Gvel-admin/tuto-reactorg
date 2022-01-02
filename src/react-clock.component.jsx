import { Component } from 'react';

class ReactClock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>React tuto </h1>
        <h2>Clock</h2>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}
export default ReactClock;
