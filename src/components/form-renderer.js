import React, { useCallback, useRef } from "react";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import Select from "../components/select";

const FormRenderer = (props) => {
  const { fields, onSubmit } = props;
  const data = useRef(props.data);

  const handleChange = useCallback(
    (id, value) => {
      data.current = { ...data.current, [id]: value };
    },
    [data]
  );

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(data.current);
    }
  };

  const renderField = useCallback(
    (field, index) => {
      const {
        field_type,
        field_id,
        field_label,
        field_placeholder,
        field_options,
      } = field;
      switch (field_type) {
        case "text":
          return (
            <Input
              key={index}
              field_id={field_id}
              field_label={field_label}
              field_placeholder={field_placeholder}
              field_value={data.current[field_id]}
              field_type={field_type}
              handleChange={handleChange}
            />
          );
        case "select":
          return (
            <Select
              key={index}
              field_id={field_id}
              field_label={field_label}
              field_placeholder={field_placeholder}
              field_value={data.current[field_id]}
              field_options={field_options}
              handleChange={handleChange}
            />
          );
        case "checkbox":
          return (
            <Checkbox
              key={index}
              field_id={field_id}
              field_label={field_label}
              field_value={data.current[field_id]}
            />
          );
        default:
          return null;
      }
    },
    [data, handleChange]
  );

  return (
    <div>
      <form>
        {fields ? fields.map((field, i) => renderField(field, i)) : null}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRenderer;
