import React from 'react';
import iconPaths from '../icons/icons.js';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

const Icon = props => (
    <span className="icon">
        <svg width="22" height="22" viewBox="0 0 1024 1024">
          <path fill="currentColor" d={getPath(props.icon)}></path>
        </svg>
    </span>
);

export default Icon;
