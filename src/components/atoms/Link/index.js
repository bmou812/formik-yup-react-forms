/**
 * Button
 * @param  {string} className [string of all the classnames given by the user]
 * @param  {string} type [type of button for styling, 'small' | 'button' | 'normal']
 * @param  {string} variation [type of button for styling, 'primary' | 'secondary']
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  iconProps: PropTypes.object,
  IconAfterContent: PropTypes.bool,
  variation: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["small", "button", "normal"]),
  children: PropTypes.string
};

export const getIcon = (iconProps) => {
  return (
    <Icon
      className={classnames(iconProps.className)}
      key={iconProps.type}
      width={iconProps.width}
      height={iconProps.height}
      type={iconProps.type}
      {...iconProps.attr}
    />
  );
};

const getChildContent = (children, iconMarginClass) => {
  return (
    <span className={classnames(iconMarginClass)}>{children}</span> 
  )
}

const generateLinkContent = (children, iconProps, IconAfterContent) => {
  if (iconProps) {
    return IconAfterContent
      ? [children, getIcon(iconProps)]
      : [getIcon(iconProps), children];
  }
  return children;
};

const PrimaryLink = ({
  className,
  children,
  href,
  iconProps,
  IconAfterContent,
  variation,
  type,
  onClick,
  ...otherProps
}) => {
  const onLinkClick = (e) => {
    
    if(children && children.toString() != "CANCEL")
      window.lastTouched = children.toString();
    if(onClick){
      e.preventDefault();
      onClick();
    }
  }
  if (!href) return null;
  const variations = {
    primary: [classnames("is-primary", "has-text-white")],
    secondary: [classnames("has-text-dark")]
  };
  const types = {
    small: [classnames("is-size-6")],
    normal: [classnames("is-size-5")],
    button: [classnames("button", "is-cta")]
  };
  const levelClass = [classnames(iconProps ?  "level-item" : "")]
  const iconMarginClass = [classnames(iconProps ?  (IconAfterContent ? "m-r-2 is-hidden-mobile" : "m-l-2 is-hidden-mobile") : "")];
  const child = getChildContent(children, iconMarginClass);
  return (
    <Link
      {...otherProps}
      onClick={onLinkClick}
      className={classnames(variations[variation], types[type], levelClass, className)}
      to={href}
    > 
      {generateLinkContent(child, iconProps, IconAfterContent)}
      
    </Link>
  );
};

PrimaryLink.propTypes = propTypes;

PrimaryLink.defaultProps = {
  href: "#",
  type: "normal"
};

export default PrimaryLink;
