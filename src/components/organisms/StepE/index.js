/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../molecules/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSectionTitles, getCountryName } from "../../../utils/common";

class StepE extends React.Component {
  constructor(props) {
    super(props);
  }

  getjourneyDetails(c1, c2, d) {
    return ` from ${getCountryName(c1)} to ${getCountryName(c2)} on 
    ${d}`;
  }

  getOnewayDetails(stepBState) {
    return `${this.getjourneyDetails(
      stepBState.country1,
      stepBState.country2,
      stepBState.date1
    )}.`;
  }
  getReturnDetails(stepBState) {
    return `${this.getjourneyDetails(
      stepBState.country1,
      stepBState.country2,
      stepBState.date1
    )} & ${this.getjourneyDetails(
      stepBState.country1,
      stepBState.country2,
      stepBState.date2
    )}.`;
  }

  render() {
    const { stepAState, stepBState, stepCState, stepDState } = this.props;
    return (
      <React.Fragment>
        <Header
          backAction={false}
          titles={getSectionTitles["StepE"]}
          progressPercentage={100}
        />
        <section className="grid-container">
          <div className="grid-x m2">
            <div className="small-6 m2 small-offset-3">
              Your Booking is confirmed. Booking Ref: <b>{Date.now()}</b>.
              Booked for <b>{stepAState.firstname} {stepAState.lastname}</b>,
              {stepBState.return
                ? this.getReturnDetails(stepBState)
                : this.getOnewayDetails(stepBState)}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    stepAState: state.views.stepA,
    stepBState: state.views.stepB
  };
}

StepE.propTypes = {
  stepAState: PropTypes.func,
  stepBState: PropTypes.func,
  stepCState: PropTypes.func,
  stepDState: PropTypes.func,
  stepEState: PropTypes.func
};
export default connect(mapStateToProps)(StepE);
