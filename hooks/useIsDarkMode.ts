import { useColorMode } from "@chakra-ui/react";
import { ColorMode } from "types";

export function useIsDarkMode() {
  const { colorMode } = useColorMode();

  return colorMode === ColorMode.dark;
}
