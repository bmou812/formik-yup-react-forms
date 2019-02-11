import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import styles from "./input.css";
import classnames from "classnames";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dirty: false };
    this.getLabelElement = this.getLabelElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getValidationMessage = this.getValidationMessage.bind(this);
    this.getValidationFailElement = this.getValidationFailElement.bind(this);
    this.handleResetInput = this.handleResetInput.bind(this);
  }

  getIsOptional(isOptional) {
    return isOptional ? <span>{" (Optional)"}</span> : null;
  }

  getLabelElement(label, isOptional) {
    return !_.isNil(label) && label.length > 0 ? (
      <label htmlFor={this.props.name}>
        <span> </span>
        <span>{this.getIsOptional(isOptional)}</span>
        {!isOptional ? this.getValidationMessage() : null}
      </label>
    ) : null;
  }

  getValidationFailElement() {
    return (
      <div className={styles.errorItem}>
        <span className={styles.errorLabel}>* {this.props.error}</span>
      </div>
    );
  }

  isError() {
    if (this.state.dirty || this.props.touched) {
      if (this.props.error) {
        return true;
      }
    }
    return false;
  }

  getValidationMessage() {
    if (this.state.dirty || this.props.touched) {
      if (this.props.error) {
        return this.getValidationFailElement();
      }
    }
    return '';
  }

  disableSubmit(e) {
    let key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  }

  handleReset() {
    this.currentInput.setFocus();
  }

  getInput() {  
    const {
      placeholder,
      type,
      disabled,
      name,
      value,
      maxlength,
      autoFocus,
      
    } = this.props;

    return (
      <input
        name={name}
        id={name}
        value={value}
        onChange={this.handleChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        placeholder={placeholder}
        
        className={
          this.isError()
            ? classnames(styles.input, styles.error)
            : classnames(styles.input)
        }
        type={type}
        ref={input => {
          this.currentInput = input;
        }}
        disabled={disabled}
        onKeyDown={this.onKeyDown}
        maxLength={maxlength}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        autoFocus={autoFocus}
      />
    );
  }

  handleChange(event) {
    event.target.name = this.props.name;
    this.props.onChange(event);
    if (this.props.liveValidate) this.setState({ dirty: true });
  }

  handleResetInput(event) {
    event.target.name = this.props.name;
    event.target.value = "";
    this.props.onChange(event);
    this.props.onBlur(this.props.name, false);
    this.setState({ dirty: false });
  }

  onBlur() {
    this.props.onBlur(this.props.name, true);
    this.setState({ dirty: true });
  }

  render() {
    const { label, isOptional } = this.props;
    return (
      <React.Fragment>
        <div>{this.getInput()}</div>
        {this.getLabelElement(label, isOptional)}
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string,
  maxlength: PropTypes.number,
  touched: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  liveValidate: PropTypes.bool,
  autoFocus: PropTypes.bool
};

Input.defaultProps = {
  placeholder: "",
  label: null,
  isOptional: false,
  disabled: false,
  error: ""
};

export default Input;
