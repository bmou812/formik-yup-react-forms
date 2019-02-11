import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

/**
 * An atom that renders svg icon files
 *
 * @example ./index.stories.jsx
 */
const Icon = ({ type, className, height, width, focusable }) => (
  <svg
    className={classnames(className)}
    height={height || '18px'}
    width={width || '18px'}
    focusable={focusable}
    tabIndex={focusable === 'false' ? -1 : 0}
    aria-hidden={focusable === 'false'}
    aria-disabled={focusable === 'false'} // For VoiceOver to not call out the image.
  >
    <use xlinkHref={`#${type}`} />
  </svg>
);

/**
 * @param {string} type The name of the icon file in ./app/assets/icons
 * @param {string} className Allows for custom styling to be passed to the component.
 * @param {string} height Determines the height of icon
 * @param {string} width Determines the width of icon
 * @param {string} focusable Determines whether an icon can be focused on - Icon in a button VS a standalone icon
 */
Icon.propTypes = {
  type: string.isRequired,
  className: string,
  height: string,
  width: string,
  focusable: string,
};

Icon.defaultProps = {
  focusable: 'false', // Stop SVGs from gaining focus in ie11
};

export default Icon;
