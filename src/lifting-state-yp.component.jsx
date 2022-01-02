import { Component } from 'react';

function IsBoiling(props) {
  if (props.temperature > 100) {
    return <p>Water is boiling</p>;
  }
  return <p>Water is not boiling</p>;
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    };
    this.handleChangeTemperature = this.handleChangeTemperature.bind(this);
  }

  handleChangeTemperature(e) {
    this.setState(
      {
        temperature: +e.target.value,
      },
      () => console.log(this.state.temperature)
    );
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Enter a temperature </legend>
            <input
              type="number"
              placeholder="°C:"
              onChange={(e) => this.handleChangeTemperature(e)}
            />
            <input
              type="number"
              placeholder="°F:"
              onChange={(e) => this.handleChangeTemperature(e)}
            />
          </fieldset>
        </form>
        <IsBoiling temperature={this.state.temperature} />
      </div>
    );
  }
}

export default Calculator;
