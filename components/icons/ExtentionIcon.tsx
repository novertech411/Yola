import React from "react";
import { IconType } from "./type/Icon.type";
const ExtentionIcon = ({
  className = "",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ""} ${color || ""}`}
    >
      <path
        d="M8 12C8.55 12 9.02083 11.8042 9.4125 11.4125C9.80417 11.0208 10 10.55 10 10C10 9.45 9.80417 8.97917 9.4125 8.5875C9.02083 8.19583 8.55 8 8 8C7.45 8 6.97917 8.19583 6.5875 8.5875C6.19583 8.97917 6 9.45 6 10C6 10.55 6.19583 11.0208 6.5875 11.4125C6.97917 11.8042 7.45 12 8 12ZM4 16H12V15.425C12 15.025 11.8917 14.6583 11.675 14.325C11.4583 13.9917 11.1583 13.7417 10.775 13.575C10.3417 13.3917 9.89583 13.25 9.4375 13.15C8.97917 13.05 8.5 13 8 13C7.5 13 7.02083 13.05 6.5625 13.15C6.10417 13.25 5.65833 13.3917 5.225 13.575C4.84167 13.7417 4.54167 13.9917 4.325 14.325C4.10833 14.6583 4 15.025 4 15.425V16ZM14.5 20H1.5C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H9.4C9.6074 0 9.80508 0.0416667 9.99305 0.125C10.181 0.208333 10.3417 0.316667 10.475 0.45L15.55 5.525C15.6833 5.65833 15.7917 5.81898 15.875 6.00695C15.9583 6.19492 16 6.3926 16 6.6V18.5C16 18.9 15.85 19.25 15.55 19.55C15.25 19.85 14.9 20 14.5 20ZM14.5 18.5V6.65L9.35 1.5H1.5V18.5H14.5Z"
        fill="CurrentColor"
      />
    </svg>
  );
};

export default ExtentionIcon;