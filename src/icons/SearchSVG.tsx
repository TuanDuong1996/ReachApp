import React from "react";

export interface SearchSVGProps extends React.SVGProps<SVGSVGElement> {}

function SearchSVG(props: SearchSVGProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8688 13.4575C17.3126 10.319 17.0918 5.77838 14.2067 2.89319C11.0825 -0.231 6.01714 -0.231 2.89295 2.89319C-0.231244 6.01739 -0.231244 11.0827 2.89295 14.2069C5.77813 17.0921 10.3188 17.3128 13.4573 14.8691C13.4708 14.8844 13.4849 14.8994 13.4996 14.914L17.7422 19.1567C18.1327 19.5472 18.7659 19.5472 19.1564 19.1567C19.5469 18.7661 19.5469 18.133 19.1564 17.7424L14.9138 13.4998C14.8991 13.4852 14.8841 13.4711 14.8688 13.4575ZM12.7924 4.30741C15.1356 6.65055 15.1356 10.4495 12.7924 12.7927C10.4493 15.1358 6.65031 15.1358 4.30716 12.7927C1.96402 10.4495 1.96402 6.65055 4.30716 4.30741C6.65031 1.96426 10.4493 1.96426 12.7924 4.30741Z"
      />
    </svg>
  );
}

export default SearchSVG;