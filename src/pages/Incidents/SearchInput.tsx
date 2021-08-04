import React from "react";
import { useState } from "react";
import SearchSVG from "../../icons/SearchSVG";

export interface SearchInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function SearchInput(props: SearchInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`group flex space-x-1 px-2 items-center bg-white rounded-sm border hover:border-gray-400 ${
        focus ? "border border-gray-400" : "border-gray-300"
      }`}
    >
      <SearchSVG
        className={`w-4 h-4 text-gray-400 group-hover:text-gray-800 ${
          focus ? "text-gray-800" : ""
        }`}
      />
      <input
        className="flex-grow h-8 px-2"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
