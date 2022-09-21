import React from 'react'
import Checkbox from '../../../components/checkbox';
import Input from '../../../components/input';
import Select from '../../../components/select';

function ElementRenderer({onChange, field:{field_type, field_id, field_label, field_placeholder, field_value, field_options}}) {
  switch (field_type) {
    case 'text':
      return(<Input
        field_id={field_id} 
        field_label={field_label}
        field_placeholder={field_placeholder} 
        field_value={field_value}
        field_type={field_type}
        onChange={onChange}
      />)

    case 'select':
      return(<Select
        field_id={field_id} 
        field_label={field_label}
        field_placeholder={field_placeholder} 
        field_value={field_value}
        field_options={field_options}
      />)
    case 'checkbox':
      return(<Checkbox 
        field_id={field_id} 
        field_label={field_label}
        field_value={field_value}
    />)
    default:
      return null
  }
}

export default ElementRenderer