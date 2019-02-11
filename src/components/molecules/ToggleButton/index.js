import PropTypes from 'prop-types';
import React from 'react';
import Atom from '../../atoms/ToggleButton'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  labelLeft: PropTypes.string
};

const defaultProps = {
  enabled: true,
  onDisabledClick: () => {}
};

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    window.lastTouched = this.props.name;
    this.props.onChange(this.props.name, !this.props.value);
  }

  render() {
    return (
      <div className="flex-container align-right align-middle">
        {this.props.labelLeft ? <span className="mr1">{this.props.labelLeft}</span> : '' }
        <Atom onToggle={this.onChange} on={this.props.value} name={this.props.name} />
        {this.props.label ? <span className="ml1">{this.props.label}</span> : '' }
      </div>
    );
  }
}

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;