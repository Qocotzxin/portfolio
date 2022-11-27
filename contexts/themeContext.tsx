import { hasWindow } from "@utils/window";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ColorMode } from "types";

const COLOR_MODE_STORAGE_KEY = "color-mode";

enum CssVars {
  BodyLight = "var(--ce-color-body-light-bg)",
  BodyDark = "var(--ce-color-body-dark-bg)",
  BodyBg = "--ce-body-bg",
  BodyText = "--ce-body-text",
  InitialColorMode = "--initial-color-mode",
}

const BG_COLORS = {
  [ColorMode.light]: CssVars.BodyLight,
  [ColorMode.dark]: CssVars.BodyDark,
};

const TEXT_COLORS = {
  [ColorMode.light]: CssVars.BodyDark,
  [ColorMode.dark]: CssVars.BodyLight,
};

/**
 * Taken from https://www.joshwcomeau.com/react/dark-mode/
 */
export function getInitialColorMode(): ColorMode.light | ColorMode.dark {
  if (!hasWindow()) {
    return ColorMode.light;
  }

  const persistedColorPreference = window.localStorage.getItem(
    COLOR_MODE_STORAGE_KEY
  ) as ColorMode | null;
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? ColorMode.dark : ColorMode.light;
  }

  return ColorMode.light;
}

interface ThemeContextValue {
  colorMode: ColorMode;
  setColorMode: (value: ColorMode) => void;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<ColorMode>(
    getInitialColorMode()
  );

  const setColorMode = (value: ColorMode) => {
    rawSetColorMode(value);
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, value);
  };

  const toggleColorMode = () => {
    const newColorMode =
      colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark;
    rawSetColorMode(newColorMode);
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, newColorMode);
    const root = window.document.documentElement;
    root.style.setProperty(CssVars.BodyBg, BG_COLORS[newColorMode]);
    root.style.setProperty(CssVars.BodyText, TEXT_COLORS[newColorMode]);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      CssVars.InitialColorMode
    );

    rawSetColorMode((initialColorValue as ColorMode) || ColorMode.light);
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useThemeContext };
