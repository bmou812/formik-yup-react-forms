/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import Select from "../../molecules/Select";
import Input from "../../molecules/Input";
import Button from "../../atoms/Button";
import Header from "../../molecules/Header";
import { getCountries, getSectionTitles } from "../../../utils/common";
import { SET_STEPB_CONTENT } from "../../../constants/actionTypes";
import ToggleButton from "../../molecules/ToggleButton";


class StepB extends React.Component {
  constructor(props) {
    super(props);
    this.onCountrySelected = this.onCountrySelected.bind(this);    
  }

  componentDidMount() {
    if (this.props.stepBState.address && this.props.stepBState.country) {
      this.props.setTouched({ country1: true, country2: true, date1: true, date2: true, return: true });
      this.props.setFieldValue("country1", this.props.stepBState.country1, true);
      this.props.setFieldValue("country2", this.props.stepBState.country2, true);
      this.props.setFieldValue("date1", this.props.stepBState.date1, true);
      this.props.setFieldValue("date2", this.props.stepBState.date2, true);
      this.props.setFieldValue("return", this.props.stepBState.return, true);
    }
  }

  onCountrySelected(name, value) {
    this.props.setFieldValue(name, value);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          backAction={this.props.previousStep}
          titles={getSectionTitles["StepB"]}
          progressPercentage={40}
        />
        <section className="grid-container">
          <div className="grid-x m2">
            <div className="small-6 m2 small-offset-3">
              <ToggleButton
                onChange={this.props.setFieldValue}
                name="returning"
                value={this.props.values.returning}
                label={"Return"}
                labelLeft={"One Way"}
              />
            </div>
          </div>
          <div className="grid-x m2">
            <div className="small-6 small-offset-3">
              <Select
                options={getCountries()}
                label={""}
                name={"country1"}
                placeholder={"Boarding From:"}
                isOptional={false}
                searchable={true}
                showIcons={false}
                error={this.props.errors.country1}
                value={this.props.values.country1}
                touched={this.props.touched.country1}
                onBlur={this.props.setFieldTouched}
                onChange={this.onCountrySelected}
                inputMaxLength={50}
              />
            </div>
          </div>
          <div className="grid-x m2">
            <div className="small-6 small-offset-3">
              <Select
                options={getCountries()}
                label={""}
                name={"country2"}
                placeholder={"Travelling to:"}
                isOptional={false}
                searchable={true}
                showIcons={false}
                error={this.props.errors.country2}
                value={this.props.values.country2}
                touched={this.props.touched.country2}
                onBlur={this.props.setFieldTouched}
                onChange={this.onCountrySelected}
                inputMaxLength={50}
              />
            </div>
          </div>
          <div className="grid-x m2">
            <div className="small-3 small-offset-3">
              <div className="panel">
                <Input
                  name="date1"
                  type="date"
                  label="departure"
                  value={this.props.values.date1}
                  error={this.props.errors.date1}
                  touched={this.props.touched.date1}
                  onBlur={this.props.setFieldTouched}
                  onChange={this.props.handleChange}
                  placeholder="Depart:"
                  isOptional={false}
                  maxlength={16}
                />
              </div>
            </div>
            <div className="small-3">
            <div className="panel">
              {this.props.values.returning && <Input
                name="date2"
                type="date"
                label="Return"
                value={this.props.values.date2}
                error={this.props.errors.date2}
                touched={this.props.touched.date2}
                onBlur={this.props.setFieldTouched}
                onChange={this.props.handleChange}
                placeholder="Return:"
                isOptional={false}
                maxlength={16}
              />}
              </div>
            </div>
          </div>
          <div className="grid-x">
            <div className="small-12  text-center">
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

StepB.propTypes = {
  gotoView: PropTypes.func,
  previousStep: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleChange: PropTypes.func,
  submitForm: PropTypes.func,
  isValid: PropTypes.bool,
  stepBState: PropTypes.object,
  setTouched: PropTypes.func,
  dirty: PropTypes.bool,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    stepBState: state.views.stepB
  };
}

export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues: props => ({
      country1: "AU",
      country2: "",
      date1: "",
      date2: "",
      returning: true
    }),
    validationSchema: Yup.object().shape({
      country1: Yup.string().required("Required"),
      country2: Yup.string().required("Required"),
      date1: Yup.date().required("Required").min(new Date().toISOString(), '**Less than today?'),
      date2: Yup.date().when(["date1","returning"], (date1, returning, schema) => {
        return returning
          ? schema.required("Required").test('datecheck','**Less than Start?', (value) => {return value >= date1}) : schema.notRequired()
      })
    }),
    handleSubmit: (values, { props }) => {
      props.dispatch({
        type: SET_STEPB_CONTENT,
        payload: {
          country1: values.country1,
          country2: values.country2,
          date1: values.date1,
          date2: values.date2,
          return: values.return
        }
      });
      props.gotoView("StepC");
    }
  })(StepB)
);
