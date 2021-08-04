import React from "react";
import { useState } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Input(props: InputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <input
      className={`h-8 w-full bg-transparent border-b border-gray-400 hover:border-gray-800 ${
        focus ? "border-gray-800" : ""
      }`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
}

export default Input;
