import React from "react";

import { IconType } from "./type/Icon.type";

const ReportIcon = ({ className = " ", color = "" }: IconType): JSX.Element => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ""} ${color || ""}`}
    >
      <path
        d="M9 13.975C9.23333 13.975 9.4375 13.8875 9.6125 13.7125C9.7875 13.5375 9.875 13.3333 9.875 13.1C9.875 12.8667 9.7875 12.6625 9.6125 12.4875C9.4375 12.3125 9.23333 12.225 9 12.225C8.76667 12.225 8.5625 12.3125 8.3875 12.4875C8.2125 12.6625 8.125 12.8667 8.125 13.1C8.125 13.3333 8.2125 13.5375 8.3875 13.7125C8.5625 13.8875 8.76667 13.975 9 13.975ZM9 10.375C9.21667 10.375 9.39583 10.3042 9.5375 10.1625C9.67917 10.0208 9.75 9.84167 9.75 9.625V4.55C9.75 4.33333 9.67917 4.15417 9.5375 4.0125C9.39583 3.87083 9.21667 3.8 9 3.8C8.78333 3.8 8.60417 3.87083 8.4625 4.0125C8.32083 4.15417 8.25 4.33333 8.25 4.55V9.625C8.25 9.84167 8.32083 10.0208 8.4625 10.1625C8.60417 10.3042 8.78333 10.375 9 10.375ZM5.875 18C5.675 18 5.47917 17.9583 5.2875 17.875C5.09583 17.7917 4.93333 17.6833 4.8 17.55L0.45 13.2C0.316667 13.0667 0.208333 12.9042 0.125 12.7125C0.0416667 12.5208 0 12.325 0 12.125V5.875C0 5.675 0.0416667 5.47917 0.125 5.2875C0.208333 5.09583 0.316667 4.93333 0.45 4.8L4.8 0.45C4.93333 0.316667 5.09583 0.208333 5.2875 0.125C5.47917 0.0416667 5.675 0 5.875 0H12.125C12.325 0 12.5208 0.0416667 12.7125 0.125C12.9042 0.208333 13.0667 0.316667 13.2 0.45L17.55 4.8C17.6833 4.93333 17.7917 5.09583 17.875 5.2875C17.9583 5.47917 18 5.675 18 5.875V12.125C18 12.325 17.9583 12.5208 17.875 12.7125C17.7917 12.9042 17.6833 13.0667 17.55 13.2L13.2 17.55C13.0667 17.6833 12.9042 17.7917 12.7125 17.875C12.5208 17.9583 12.325 18 12.125 18H5.875ZM5.875 16.5H12.125L16.5 12.125V5.875L12.125 1.5H5.875L1.5 5.875V12.125L5.875 16.5Z"
        fill="CurrentColor"
      />
    </svg>
  );
};

export default ReportIcon;