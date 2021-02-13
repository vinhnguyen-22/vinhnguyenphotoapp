import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";

const SelectField = (props) => {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field; //! field include {name, value, onChange, onBlur}
  const selectedOption = options.find((option) => option.value === value);

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectOptionChange = (selectedOption) => {
    const seclectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: seclectedValue,
      },
    };
    //!override onChange
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        options={options}
        //!override onChange
        value={selectedOption}
        onChange={handleSelectOptionChange}
        disabled={disabled}
        placeholder={placeholder}
        className={showError ? "is-invalid" : ""}
      />
      {showError && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  );
};

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};
export default SelectField;
