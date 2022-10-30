import { useColorMode } from "@chakra-ui/react";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Components } from "@models/hygraph";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import { FC, useEffect, useMemo, useState } from "react";
import { BsFillCloudsFill, BsStars } from "react-icons/bs";
import { ColorMode } from "types";
import { Classes } from "./styles";

const ColorModeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorModeIsDark = useMemo(
    () => colorMode === ColorMode.dark,
    [colorMode]
  );
  const ariaLabel = useAriaLabel({
    component: Components.ColorModeSwitcher,
    metadata: colorModeIsDark ? ColorMode.light : ColorMode.dark,
  });
  const [isDark, setIsDark] = useState(colorModeIsDark);

  useEffect(() => {
    setIsDark(colorModeIsDark);
  }, [colorModeIsDark]);

  const onToggle = () => {
    setIsDark((isDark) => !isDark);
    setTimeout(toggleColorMode, 300);
  };

  return (
    <button
      className={concatClassNames(
        Classes.base,
        applyConditionalClass(isDark, Classes.baseDark)
      )}
      onClick={onToggle}
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
