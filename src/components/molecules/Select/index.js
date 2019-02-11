import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import SelectComponent from "react-select";
import styles from "./select.css"

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dirty: false };
    this.getLabelElement = this.getLabelElement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getValidationMessage = this.getValidationMessage.bind(this);
  }

  getIsOptional(isOptional) {
    return isOptional ? <span>{" (Optional)"}</span> : null;
  }

  getLabelElement(label, isOptional) {
    return !_.isNil(label) && label.length > 0 ? (
      <label htmlFor={this.props.name}>
        <span />
        {this.getIsOptional(isOptional)}
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

  onChange(event) {
    this.props.onChange(this.props.name, event.value);
    this.setState({ dirty: true });
  }

  onBlur() {
    this.props.onBlur(this.props.name, true);
    this.setState({ dirty: true });
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
    return "";
  }

  render() {
    const {
      isOptional,
      label,
      options,
      searchable,
      placeholder,
      showIcons,
      value,
      name,
      autoFocus
    } = this.props;
    const inputProp = {
      type: "text",
      maxLength: ""
    };
    return (
      <React.Fragment>
        <SelectComponent
          className={
            this.isError()
              ? 'error select'
              : 'select'
          }
          id={name}
          value={value}
          inputProps={inputProp}
          autoFocus={autoFocus}
          options={options}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          searchable={searchable}
          placeholder={placeholder}
          optionRenderer={showIcons ? this.getCustomRender : null}
        />
        {this.getLabelElement(label, isOptional)}
      </React.Fragment>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  isOptional: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  showIcons: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  touched: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
  name: "",
  label: null,
  isOptional: false,
  searchable: false,
  showIcons: false
};

export default Select;
