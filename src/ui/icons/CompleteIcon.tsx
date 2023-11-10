import React, { FC } from "react";
import st from "./icons.module.scss";
interface Props {
  className?: string;
}
const CompleteIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className} ${st.completeIcon}`}
      width="20"
      height="20"
      viewBox="0 0 240 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="29"
        width="213"
        height="264"
        rx="22"
        stroke="#7e7a7a"
        stroke-width="30"
      />
      <rect x="69" width="102" height="58" rx="15" fill="#7e7a7a" />
      <path
        d="M68.0764 164.597C65.645 162.346 61.8488 162.492 59.5974 164.924C57.3461 167.355 57.4921 171.151 59.9236 173.403L68.0764 164.597ZM59.9236 173.403L113.924 223.403L122.076 214.597L68.0764 164.597L59.9236 173.403Z"
        fill="#7e7a7a"
      />
      <path
        d="M181.023 121.282C182.835 118.508 182.056 114.79 179.282 112.977C176.508 111.165 172.79 111.944 170.977 114.718L181.023 121.282ZM170.977 114.718L104.977 215.718L115.023 222.282L181.023 121.282L170.977 114.718Z"
        fill="#7e7a7a"
      />
    </svg>
  );
};

export default CompleteIcon;
