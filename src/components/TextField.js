const TextField = ({
  labelTextNode,
  inputName,
  inputValue,
  handleOnChange,
}) => (
  <label>
    {labelTextNode}
    <input
      type="text"
      name={inputName}
      value={inputValue}
      onChange={handleOnChange}
    />
  </label>
);

export default TextField;
