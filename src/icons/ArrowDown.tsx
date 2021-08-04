import React from "react";

export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {}

function ArrowDown(props: ArrowDownProps) {
  return (
    <svg
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1.5L8 8.5L1 1.5"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;
