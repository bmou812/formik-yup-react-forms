/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { SET_STEPC_CONTENT } from "../../../constants/actionTypes";
import { emailSpecialChar } from "../../../utils/validations";
import Input from "../../molecules/Input";
import Button from "../../atoms/Button";
import Header from "../../molecules/Header";
import { getSectionTitles } from "../../../utils/common";
import ToggleButton from "../../molecules/ToggleButton";

class StepC extends React.Component {
  componentDidMount() {
    if (this.props.stepCView.email) {
      this.props.setTouched({email: true});
      this.props.setFieldValue("email", this.props.stepCView.email, true);
      this.props.setTouched({subscribe: true});
      this.props.setFieldValue("subscribe", this.props.stepCView.subscribe, true);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          backAction={this.props.previousStep}
          titles={getSectionTitles["StepC"]}
          progressPercentage={60}
        />
        <section className="grid-container">
          <div className="grid-x">
            <div className="small-3" />
            <div className="small-6 m2">
              <Input
                name="email"
                type="email"
                label="EMAIL ADDRESS"
                placeholder="Email address"
                isOptional={false}
                isClearable={true}
                value={this.props.values.email}
                error={this.props.errors.email}
                touched={this.props.touched.email}
                onBlur={this.props.setFieldTouched}
                onChange={this.props.handleChange}
                autoFocus={true}
                maxlength={60}
              />
            </div>
          </div>
          <div className="grid-x m2">
            <div className="small-3"/>
            <div className="small-6 m2">
              <ToggleButton
                onChange={this.props.setFieldValue}
                name="subscribe"
                value={this.props.values.subscribe}
                label={"subscribe to promotions?"}
              />
            </div>
          </div>
          <div className="grid-x">
            <div className="small-12 text-center">
              <Button
                variation="flat"
                onClick={this.props.submitForm}
                className={this.props.isValid ? "" : "invalid"}
              >
                {"Next"}
              </Button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

StepC.propTypes = {
  gotoView: PropTypes.func,
  previousStep: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleChange: PropTypes.func,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  submitForm: PropTypes.func,
  stepCView: PropTypes.object,
  setTouched: PropTypes.func,
  dispatch: PropTypes.func,
  dirty: PropTypes.bool,
  isValid: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    stepCView: state.views.stepC
  };
}

export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      subscribe: true
    }),

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Please enter a valid email")
        .email("Please enter a valid email")
        .min(8, "Minimum 8 characters")
        .max(60, "Maximum 60 characters")
        .test(
          "emailSpecialChar",
          "Only @ - _ .+ special characters",
          emailSpecialChar
        )
    }),
    handleSubmit: (values, { props }) => {
      props.dispatch({
        type: SET_STEPC_CONTENT,
        payload: {
          email: values.email,
          subscribe: values.subscribe
        }
      });
      props.gotoView("StepD");
    }
  })(StepC)
);
