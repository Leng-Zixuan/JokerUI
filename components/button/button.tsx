import React, { FC, ButtonHTMLAttributes } from 'react';

import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary: boolean;
  backgroundColor: string | undefined;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { primary, backgroundColor, size, label } = props;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ?? { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  backgroundColor: undefined,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;