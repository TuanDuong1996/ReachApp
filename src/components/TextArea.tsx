import React from "react";
import { useState } from "react";

export interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

function TextArea(props: TextAreaProps) {
  const [focus, setFocus] = useState(false);

  return (
    <textarea
      className={`h-8 w-full bg-transparent border-b border-gray-400 hover:border-gray-800 resize-none ${
        focus ? "border-gray-800" : ""
      }`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rows={4}
      style={{ height: 78 }}
      {...props}
    />
  );
}

export default TextArea;
