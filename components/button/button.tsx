import React, { FC, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: FC<ButtonProps> = (props) => {

  const { children } = props;

  return <button>{children}</button>
}

export default Button;