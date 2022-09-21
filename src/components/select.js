import React from "react";

function Select({
  handleChange,
  field_id,
  field_label,
  field_value,
  field_options,
}) {
  const [value, setValue] = React.useState(field_value);

  return (
    <>
      <label>{field_label}</label>
      <select
        aria-label="Default Select"
        onChange={(event) => {
          const val = event.target.value;
          setValue(val);
          if (handleChange) {
            handleChange(field_id, val);
          }
        }}
      >
        <option>Open the Select Menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option key={i} value={option.option_label}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
}

export default Select;
