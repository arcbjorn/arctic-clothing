import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button type="submit" className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
