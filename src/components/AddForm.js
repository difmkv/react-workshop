import { useState } from "react";
import TextField from "./TextField";

const AddForm = ({ onClickAdd }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [isVisible, toggleVisible] = useState(true);

  const onSubmitForm = (e) => {
    e.preventDefault();

    onClickAdd(name, breed);

    setName("");
    setBreed("");
  };

  return (
    <div>
      {isVisible && (
        <form onSubmit={onSubmitForm}>
          <TextField
            labelTextNode="Name"
            inputName="name"
            inputValue={name}
            handleOnChange={(e) => setName(e.target.value)}
          />
          <TextField
            labelTextNode="Breed"
            inputName="breed"
            inputValue={breed}
            handleOnChange={(e) => setBreed(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      )}
      <button onClick={() => toggleVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default AddForm;
