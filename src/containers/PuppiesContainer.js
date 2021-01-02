import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import * as API from "../services";

import AddForm from "../components/AddForm";
import FilterBox from "../components/FilterBox";
import PuppiesList from "../components/PuppiesList";

const PuppiesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [puppies, setPuppies] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    API.getData(signal)
      .then((res) => {
        setPuppies(res);
        setIsLoading(false);
      })
      .catch((err) => console.log("API_ERROR => ", err));

    return () => controller.abort();
  }, []);

  const onClickAdd = (name, breed) => {
    const newPup = { name, breed, isAdopted: false, id: uuid() };

    API.postData(newPup)
      .then((data) => setPuppies([...puppies, data]))
      .catch((err) => console.log("API_ERROR => ", err));
  };

  const onClickAdopt = (puppy) => {
    const data = { ...puppy, isAdopted: !puppy.isAdopted };

    API.putData(data)
      .then((updated) => {
        const newPuppies = puppies.map((p) => {
          p.id === puppy.id && (p.isAdopted = updated.isAdopted);
          return p;
        });
        setPuppies(newPuppies);
      })
      .catch((err) => console.log("API_ERROR => ", err));
  };

  const onClickRemove = (id) => {
    API.deleteData(id)
      .then(() => {
        const newPuppies = puppies.filter((p) => p.id !== id);
        setPuppies(newPuppies);
      })
      .catch((err) => console.log("API_ERROR => ", err));
  };

  const onChangeFilter = (currentFilter) => {
    setCurrentFilter(currentFilter);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <FilterBox onChangeFilter={onChangeFilter} />
      <AddForm onClickAdd={onClickAdd} />
      <PuppiesList
        puppies={puppies}
        currentFilter={currentFilter}
        onClickAdopt={onClickAdopt}
        onClickRemove={onClickRemove}
      />
    </div>
  );
};

export default PuppiesContainer;
