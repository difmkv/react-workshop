import { PUPPY_MAPPER } from "../constants";

const FilterBox = ({ onChangeFilter }) => (
  <select onChange={(e) => onChangeFilter(e.target.value)}>
    {Object.keys(PUPPY_MAPPER).map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ))}
  </select>
);

export default FilterBox;
