import React from "react";

function Checkbox({onChange, field_id, field_label, field_value }) {
  return (
    <div>
      <input
        type="checkbox"
        id="exampleCheck1"
         checked={field_value}
        onChange={(event) => onChange(field_id, event.target.checked)}
      />
      <label htmlFor="exampleCheck1">{field_label}</label>
    </div>
  );
}

export default Checkbox;
