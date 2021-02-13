import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />

      {showError && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
export default InputField;
