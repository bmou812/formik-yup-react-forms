/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import Select from "../../molecules/Select";
import Input from "../../molecules/Input";
import Header from "../../molecules/Header";
import Button from "../../atoms/Button";
import { SET_STEPA_CONTENT } from "../../../constants/actionTypes";
import { getTitles, getSectionTitles } from "../../../utils/common";

class StepA extends React.Component {
  componentDidMount() {
    if (this.props.stepAstate.firstname && this.props.stepAstate.lastname && this.props.stepAstate.title) {
      this.props.setTouched({ title: true, firstname: true, lastname: true });
      this.props.setFieldValue("title", this.props.stepAstate.title, true);
      this.props.setFieldValue(
        "firstname",
        this.props.stepAstate.firstname,
        true
      );
      this.props.setFieldValue("lastname", this.props.stepAstate.lastname, true);
    }
  }

  isValid() {
    const { errors, touched, dirty } = this.props;
    if (dirty && !isEmpty(touched) && isEmpty(errors)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <Header
          backAction={null}
          titles={getSectionTitles['StepA']}
          progressPercentage={20}
        />
        <section className="grid-container">
          <div className="grid-x">
            <div className="small-3" />
            <div className="m1 small-6">
              <Select
                autoFocus={true}
                options={getTitles()}
                label={"TITLE"}
                name="title"
                type="text"
                error={this.props.errors.title}
                touched={this.props.touched.title}
                value={this.props.values.title}
                onBlur={this.props.setFieldTouched}
                onChange={this.props.setFieldValue}
                placeholder={"Select title"}
                isOptional={false}
                searchable={false}
              />
            </div>
          </div>
          <div className="grid-x">
            <div className="small-3" />
            <div className="m1 small-6">
              <Input
                name="firstname"
                type="text"
                label="FIRST NAME"
                value={this.props.values.firstname}
                error={this.props.errors.firstname}
                touched={this.props.touched.firstname}
                onBlur={this.props.setFieldTouched}
                onChange={this.props.handleChange}
                placeholder="Enter your first name"
                isOptional={false}
                isClearable={true}
                maxlength={16}
              />
            </div>
          </div>
          <div className="grid-x">
            <div className="small-3" />
            <div className="m1 small-6">
              <Input
                name="lastname"
                type="text"
                label="LAST NAME"
                value={this.props.values.lastname}
                error={this.props.errors.lastname}
                touched={this.props.touched.lastname}
                onBlur={this.props.setFieldTouched}
                onChange={this.props.handleChange}
                placeholder="Enter your last name"
                isOptional={false}
                isClearable={true}
                maxlength={24}
              />
            </div>
          </div>
          <div className="grid-x m2">
            <div className="small-12 text-center">
              <Button
                variation="flat"
                key="continue"
                onClick={this.props.submitForm}
                className={this.props.isValid ? "" : "invalid"}
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

StepA.propTypes = {
  gotoView: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  dirty: PropTypes.bool,
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleChange: PropTypes.func,
  submitForm: PropTypes.func,
  isValid: PropTypes.bool,
  stepAstate: PropTypes.object,
  setTouched: PropTypes.func,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    stepAstate: state.views.stepA
  };
}

export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues: props => ({
      title: "",
      firstname: "",
      lastname: ""
    }),
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Required"),
      firstname: Yup.string().required("Please enter your First Name").min(3,'Minimum 3 letters'),
      lastname: Yup.string().required("Please enter your Last Name").min(3,'Minimum 3 letters')
    }),
    handleSubmit: (values, { props }) => {
      props.dispatch({
        type: SET_STEPA_CONTENT,
        payload: {
          title: values.title,
          firstname: values.firstname,
          lastname: values.lastname
        }
      });
      props.gotoView("StepB");
    }
  })(StepA)
);
