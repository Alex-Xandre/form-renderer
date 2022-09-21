import React from "react";
import FormRenderer from "../../../components/form-renderer";
import form from "./registration.json";

const data = {
  english_name: "alex",
  email: "example.com",
};

const handleOnSubmit = (form) => {
  console.log(form);
};

function Registration() {
  return (
    <div>
      <h1>{form.page_label}</h1>
      <FormRenderer
        data={data}
        fields={form.fields}
        onSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default Registration;
