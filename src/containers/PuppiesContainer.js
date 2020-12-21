import { Component } from "react";
import { v4 as uuid } from "uuid";
import { PUPPY_MAPPER } from "../constants";
import * as api from "../services/api";

import AddForm from "../components/AddForm";
import FilterBox from "../components/FilterBox";
import PuppiesList from "../components/PuppiesList";

class PuppiesContainer extends Component {
  state = {
    puppies: [],
    isLoading: false,
    currentFilter: Object.keys(PUPPY_MAPPER)[0],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const puppies = await api.getPuppies();
      this.setState({ puppies, isLoading: false });
    } catch (err) {
      console.error(err);
    }
  }

  addPup = async (name, breed) => {
    const newPup = { name, breed, isAdopted: false, id: uuid() };

    try {
      await api.postPuppy(newPup);
      this.setState({
        puppies: [...this.state.puppies, newPup],
      });
    } catch (err) {
      console.error(err);
    }
  };

  adoptPup = async (puppy) => {
    try {
      const updated = await api.putPuppy(puppy);
      const newPuppies = this.state.puppies.map((p) => {
        p.id === puppy.id && (p.isAdopted = updated.isAdopted);
        return p;
      });
      this.setState({ newPuppies });
    } catch (err) {
      console.error(err);
    }
  };

  removePup = async (id) => {
    try {
      await api.deletePuppy(id);
      const newPuppies = this.state.puppies.filter((p) => p.id !== id);
      this.setState({ puppies: newPuppies });
    } catch (err) {
      console.error(err);
    }
  };

  handleSelectedFilter = (currentFilter) => {
    this.setState({ currentFilter });
  };

  render() {
    const { isLoading, puppies, currentFilter } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <FilterBox handleSelectedFilter={this.handleSelectedFilter} />
        <AddForm addPup={this.addPup} />
        <PuppiesList
          puppies={puppies}
          currentFilter={currentFilter}
          adoptPup={this.adoptPup}
          removePup={this.removePup}
        />
      </div>
    );
  }
}

export default PuppiesContainer;
