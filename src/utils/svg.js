/**
 * This is imported and called in order to prepare the global <svg>
 * that the Icon component references icons IDs from.
 */
export const buildIconSprite = () => {
  const files = require.context(
    '!svg-sprite-loader!../assets/icons/',
    true,
    /^((?!inline).)*.svg$/
  );
  files.keys().forEach(files);
};
