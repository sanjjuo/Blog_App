import * as React from "react";
import { SVGProps } from "react";
const AppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-11.56 2.36L7.68 11.6l2.76-2.76L9.6 8 6 11.6l3.6 3.6.84-.84Zm3.12 0 2.76-2.76-2.76-2.76.84-.84 3.6 3.6-3.6 3.6-.84-.84Z"
      clipRule="evenodd"
    />
  </svg>
);
export default AppIcon;
