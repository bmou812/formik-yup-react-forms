import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import styles from './toggle.css';

const propTypes = {
  on: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.object
};

const defaultProps = {
  enabled: true,
  className: '',
};

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.getIcon = this.getIcon.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    e.preventDefault();
  if (e.keyCode === 13) {
      this.props.onToggle();
    }
  }

  getIcon() {
    return (this.props.on ? <Icon type="toggleEnabled" height="20" width="20" /> : '' )
  }

  render() {
    const {on, onToggle, className} = this.props;
    const classes = [styles.switch, className, (on ? styles.on : '')].join(' ');
    return (
      <a className={classes} tabIndex="0" onClick={(e) => {onToggle(e)}} onKeyUp={this.onKeyUp}>
        <div className={styles.switchToggle} >{this.getIcon()}</div>
      </a>
    );
  }
}

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;