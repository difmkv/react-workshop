import { Component } from "react";
import TextField from "./TextField";

class AddForm extends Component {
  state = {
    name: "",
    breed: "",
    isFormVisible: true,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.addPup(this.state.name, this.state.breed);
    this.setState({
      name: "",
      breed: "",
    });
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { name, breed, isFormVisible } = this.state;

    return (
      <>
        {isFormVisible && (
          <form onSubmit={this.handleOnSubmit}>
            <TextField
              labelTextNode="Name"
              inputName="name"
              inputValue={name}
              handleOnChange={this.handleOnChange}
            />
            <TextField
              labelTextNode="Breed"
              inputName="breed"
              inputValue={breed}
              handleOnChange={this.handleOnChange}
            />
            <button type="submit">Add</button>
          </form>
        )}
        <button onClick={this.toggleForm}>
          {isFormVisible ? "Hide" : "Show"}
        </button>
      </>
    );
  }
}

export default AddForm;
