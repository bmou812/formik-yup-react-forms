import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Link from "../../atoms/Link";
import styles from "./Header.css";

class ProgressHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: null, dirty: false };
  }
  render() {
    const { titles } = this.props;
    const backIconProps = {
      type: "back",
      width: "40px",
      height: "40px"
    };
    return (
      <React.Fragment>
        <section className="grid-container">
          <h3 className={styles.header}> Booking Engine </h3>
          <div className={classnames("grid-x", styles.title)}>
            <div className="small-1">
              {this.props.backAction && (
                <Link
                  variation="primary"
                  key="back"
                  iconProps={backIconProps}
                  onClick={this.props.backAction}
                  className={"mr4"}
                />
              )}
            </div>
            
            <div className="small-10">
              <h3>{titles.stepTitle}</h3>
              <h4>{titles.subTitle}</h4>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

ProgressHeader.propTypes = {
  titles: PropTypes.object,
  backAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  subTitle: PropTypes.string,
  progressPercentage: PropTypes.number
};

ProgressHeader.defaultProps = {
  titles: {
    stepTitle: "",
    subTitle: ""
  },
  backAction: false
};

export default ProgressHeader;
