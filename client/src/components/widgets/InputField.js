import React, { Fragment } from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField, FormControl } from '@material-ui/core';


const InputField = props => {
  const { name, label, placeholder, required, type } = props;

  return (
    <Fragment>
      <FormControl className="mt-3" >
        <Field
          as={TextField}
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          fullWidth
          required={required}
        />
      </FormControl>
      <ErrorMessage name={name} />
    </Fragment>
  );
}
export default InputField;

// got Props

// name
// label
// placeholder
// required