
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Icon from "../Icon";
import style from "./button.css"

const propTypes = {
  className: PropTypes.string,
  variation: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  iconProps: PropTypes.object,
  IconAfterContent: PropTypes.bool,
  disabled: PropTypes.bool,
  isFetching: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  className: null,
  IconAfterContent: false,
  disabled: false
};

const fetchingIcon = () => {
  return <Icon key={"loader"} width={"31"} height={"31"} type={"loader"} />;
};

const getIcon = (iconProps, marginClassName) => {
  return (
    <Icon
      className={classnames(iconProps.className, marginClassName)}
      key={iconProps.type}
      width={iconProps.width}
      height={iconProps.height}
      type={iconProps.type}
      {...iconProps.attr}
    />
  );
};

const generateButtonContent = (
  children,
  iconProps,
  IconAfterContent,
  isFetching
) => {
  const child = isFetching ? fetchingIcon() : children;

  if (iconProps) {
    return IconAfterContent
      ? [child, getIcon(iconProps, "m-l-2")]
      : [getIcon(iconProps, "m-r-2"), child];
  }
  return child;
};

const Button = ({
  children,
  iconProps,
  IconAfterContent,
  variation,
  isFetching,
  onClick,
  className,
  ...otherProps
}) => {
  const classes = [classnames(style[variation], style[className])]
  return (
    <button
      type="button"
      {...otherProps}
      className={classes}
      onClick={e => {
        onClick(e);
      }}
    >
      {generateButtonContent(children, iconProps, IconAfterContent, isFetching)}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
