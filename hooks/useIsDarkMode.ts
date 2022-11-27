import { useThemeContext } from "@contexts/themeContext";
import { useEffect, useState } from "react";
import { ColorMode } from "types";

export function useIsDarkMode() {
  const { colorMode } = useThemeContext();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(colorMode === ColorMode.dark);
  }, [colorMode]);

  return isDark;
}
