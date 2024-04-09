import React, { FC } from "react";

const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button {...props} className="rounded-md bg-slate-950 text-white px-2 py-1">
      {props.children}
    </button>
  );
};

export default Button;
