/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import Input from "../../molecules/Input";
import Select from "../../molecules/Select";
import Button from "../../atoms/Button";
import Header from "../../molecules/Header";
import { getMonths, getYears, getSectionTitles } from "../../../utils/common";
import { SET_STEPD_CONTENT } from "../../../constants/actionTypes";

const StepD = props => {

  const onCountrySelected = (name, value) => {
    props.setFieldValue(name, value);
  }
  return (
    <React.Fragment>
      <Header
        backAction={props.previousStep}
        titles={getSectionTitles['StepD']}
        progressPercentage={80}
      />
      <section className="grid-container">
        <div className="grid-x">
          <div className="small-3" />
          <div className="small-6 mb2">
            <Input
              name="name"
              type="text"
              label="Name"
              placeholder="Card Holder's Name"
              isOptional={false}
              isClearable={true}
              value={props.values.name}
              error={props.errors.name}
              touched={props.touched.name}
              onBlur={props.setFieldTouched}
              onChange={props.handleChange}
              autoFocus={true}
              maxlength={20}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="small-3" />
          <div className="small-6 mb2">
            <Input
              name="cardNumber"
              type="text"
              label="Card Number"
              placeholder="Card Number"
              isOptional={false}
              isClearable={true}
              value={props.values.cardNumber}
              error={props.errors.cardNumber}
              touched={props.touched.cardNumber}
              onBlur={props.setFieldTouched}
              onChange={props.handleChange}
              maxlength={20}
            />
          </div>
        </div>
        <div className="grid-x mb2">
          <div className="small-3 small-offset-3">
          <div className="panel">
            <Select
              options={getMonths()}
              label={""}
              name={"expiryMonth"}
              placeholder={"Expiry Month:"}
              isOptional={false}
              searchable={true}
              showIcons={false}
              error={props.errors.expiryMonth}
              value={props.values.expiryMonth}
              touched={props.touched.expiryMonth}
              onBlur={props.setFieldTouched}
              onChange={onCountrySelected}
              inputMaxLength={50}
            />
            </div>
          </div>
          <div className="small-3">
          <div className="panel">
            <Select
                options={getYears()}
                label={""}
                name={"expiryYear"}
                placeholder={"Expiry Year:"}
                isOptional={false}
                searchable={true}
                showIcons={false}
                error={props.errors.expiryYear}
                value={props.values.expiryYear}
                touched={props.touched.expiryYear}
                onBlur={props.setFieldTouched}
                onChange={onCountrySelected}
                inputMaxLength={50}
              />
          </div>
          </div>
        </div>
        <div className="grid-x">
          <div className="small-12 text-center" >
          <Button
            variation="flat"
            onClick={props.submitForm}
            className={props.isValid ? "" : "invalid"}
          >
            {"Book"}
          </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

StepD.propTypes = {
  gotoView: PropTypes.func,
  previousStep: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleChange: PropTypes.func,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFieldTouched: PropTypes.func,
  submitForm: PropTypes.func,
  isValid: PropTypes.bool,
  setFieldValue: PropTypes.func
};

function mapStateToProps(state) {
  return {
    stepDView: state.views.stepD
  };
}

export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues: props => ({
      name: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
    }),

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required").min(3,'Minimum 3 letters'),
      cardNumber: Yup.string().required("Required").min(16,'min 16 digits').max(17, 'less than 17 digits').matches(/^\d+$/,'Enter digits only'),
      expiryMonth: Yup.string().required('Required'),
      expiryYear: Yup.string().required('Required'),
    }),
    handleSubmit: (values, { props }) => {
      props.dispatch({
        type: SET_STEPD_CONTENT,
        payload: {
          password: values.password
        }
      });
      props.gotoView("StepE");
    }
  })(StepD)
);
