import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

export type ButtonProps = PropsWithChildren<
  {
    isFullWidth?: boolean;
  } & ComponentPropsWithoutRef<"button">
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isFullWidth, ...buttonProps }, ref) => {
    const isDark = useIsDarkMode();

    return (
      <button
        className={concatClassNames(
          styles.Button,
          applyConditionalClass(isDark, styles["Button--dark"])
        )}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
