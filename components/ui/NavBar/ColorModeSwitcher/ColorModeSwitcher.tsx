import { useThemeContext } from "@contexts/themeContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { Components } from "@models/hygraph";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import { FC } from "react";
import { BsFillCloudsFill, BsStars } from "react-icons/bs";
import { ColorMode } from "types";
import { Classes } from "./styles";

const ColorModeSwitcher: FC = () => {
  const { toggleColorMode } = useThemeContext();
  const isDark = useIsDarkMode();

  const ariaLabel = useAriaLabel({
    component: Components.ColorModeSwitcher,
    metadata: isDark ? ColorMode.light : ColorMode.dark,
  });

  return (
    <button
      className={concatClassNames(
        Classes.base,
        applyConditionalClass(isDark, Classes.baseDark)
      )}
      onClick={toggleColorMode}
      aria-label={ariaLabel?.content}
      aria-live="polite"
    >
      {/* Visually hidden circle */}
      <div
        className={concatClassNames(
          Classes.circle,
          Classes.outterCircle,
          applyConditionalClass(isDark, Classes.outterCircleDark)
        )}
      />
      {/* Main circle (sun/moon) */}
      <div
        className={concatClassNames(
          Classes.circle,
          Classes.innerCircle,
          applyConditionalClass(isDark, Classes.innerCircleDark)
        )}
      />
      {/* Stars */}
      <BsStars
        className={concatClassNames(
          Classes.icon,
          Classes.stars,
          applyConditionalClass(isDark, Classes.starsDark)
        )}
      />
      {/* Clouds */}
      <BsFillCloudsFill
        className={concatClassNames(
          Classes.icon,
          Classes.clouds,
          applyConditionalClass(isDark, Classes.cloudsDark)
        )}
      />
    </button>
  );
};

export default ColorModeSwitcher;
