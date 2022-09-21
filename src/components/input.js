import { useState } from "react";

function Input({
  handleChange,
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_type,
}) {
  const [value, setValue] = useState(field_value);
  return (
    <div>
      <label htmlFor="inputs">{field_label}</label>
      <input
        type={field_type}
        className="form-control"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          setValue(val);
          if (handleChange) {
            handleChange(field_id, val);
          }
        }}
        id="inputs"
      />
    </div>
  );
}

export default Input;
