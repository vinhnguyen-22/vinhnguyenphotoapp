//todo CUSTOM CONTROLL
import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup } from "reactstrap";
import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage } from "formik";

const RandomPhotoField = (props) => {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

RandomPhotoField.propTypes = {
  label: PropTypes.string,
};
RandomPhotoField.defaultProps = {
  label: "",
};

export default RandomPhotoField;
