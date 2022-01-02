import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
      userName: [],
      selectValue: '',
      selectedFruit: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectSubmit = this.handleSelectSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      formValue: e.target.value,
    });
  }
  //TODO: clear input after submit
  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      userName: [...prevState.userName, prevState.formValue],
    }));
  }

  //TODO: select multiple elements
  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value }, () =>
      console.log(this.state.selectValue)
    );
  }
  handleSelectSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      selectedFruit: prevState.selectValue,
    }));
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <h3>Submit + input</h3>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <ul>
          {this.state.userName.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <h3>Select</h3>
        <form onSubmit={(e) => this.handleSelectSubmit(e)}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleSelectChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Selected favorite flavor: {this.state.selectValue}</p>
        <p>Picked favorite flavor: {this.state.selectedFruit}</p>
      </div>
    );
  }
}

export default Form;
