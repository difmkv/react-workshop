import { PUPPY_MAPPER } from "../constants";

const FilterBox = ({ handleSelectedFilter }) => (
  <select onChange={(e) => handleSelectedFilter(e.target.value)}>
    {Object.keys(PUPPY_MAPPER).map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ))}
  </select>
);

export default FilterBox;
