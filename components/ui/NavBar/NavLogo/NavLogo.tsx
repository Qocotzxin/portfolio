import { FC } from "react";
import styles from "./NavLogo.module.css";

interface NavLogoProps {
  withAnimation?: boolean;
}

const NavLogo: FC<NavLogoProps> = ({ withAnimation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      aria-labelledby="title"
      role="presentation"
    >
      <title id="title" lang="en">
        Logo
      </title>
      <linearGradient
        id="gradient"
        x1="0"
        x2="0"
        y1="0"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4FD1C5" offset="40%" />
        <stop stopColor="#4299E1" offset="70%" />
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="20"
        data-testid="NavLogo-outter-circle"
        className={withAnimation ? styles.outterCircle : ""}
        fill="none"
        stroke="#4FD1C5"
        strokeWidth="1"
        strokeDasharray="128"
        strokeDashoffset="128"
      />
      <circle
        cx="24"
        cy="24"
        r="16"
        data-testid="NavLogo-inner-circle"
        className={withAnimation ? styles.innerCircle : ""}
        fill="none"
        stroke="#4299E1"
        strokeWidth="1"
        strokeDasharray="128"
        strokeDashoffset="128"
      />
      <text
        x="14"
        y="32"
        fill="url(#gradient)"
        data-testid="NavLogo-text"
        className={`${styles.text} ${withAnimation ? "fadeIn-regular" : ""}`}
      >
        CE
      </text>
    </svg>
  );
};

export default NavLogo;
