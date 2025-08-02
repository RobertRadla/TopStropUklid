import React from "react";

type ButtonProps = {
    buttonName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ( {buttonName, ...rest} ) => {
  return (
    <button {...rest}>{buttonName}</button>
  );
}

export default Button;