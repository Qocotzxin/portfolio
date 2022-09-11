import { Box, Icon, useColorMode } from "@chakra-ui/react";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Clouds, Stars } from "@icons";
import { Components } from "@models/hygraph";
import { FC, useEffect, useState } from "react";
import styles from "./ColorModeSwitcher.module.css";

const ColorModeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ariaLabel = useAriaLabel({
    component: Components.ColorModeSwitcher,
    metadata: colorMode === "dark" ? "light" : "dark",
  });
  const [isDark, setIsDark] = useState(colorMode === "dark");

  useEffect(() => {
    setIsDark(colorMode === "dark");
  }, [colorMode]);

  const onToggle = () => {
    setIsDark((isDark) => !isDark);
    setTimeout(toggleColorMode, 300);
  };

  return (
    <Box
      as="button"
      w="64px"
      h="32px"
      bg={isDark ? "blue.700" : "blue.200"}
      borderRadius="18px"
      _dark={{ borderColor: "gray.50" }}
      onClick={onToggle}
      position="relative"
      aria-label={ariaLabel?.content}
    >
      {/* Visually hidden circle */}
      <Box
        borderRadius="50%"
        bg={isDark ? "blue.700" : "blue.200"}
        w="18px"
        h="18px"
        position="absolute"
        left="0"
        top="7px"
        zIndex="3"
      />
      {/* Main circle (sun/moon) */}
      <Box
        borderRadius="50%"
        bg="yellow.400"
        w="18px"
        h="18px"
        position="absolute"
        left="6px"
        top="7px"
        transform={`translateX(${isDark ? 0 : 34}px)`}
        transition="transform 0.5s"
        zIndex="2"
      />
      {/* Stars */}
      <Icon
        h="16px"
        w="16px"
        as={Stars}
        position="absolute"
        right="8px"
        top="7px"
        color="white"
        opacity={isDark ? 1 : 0}
        transition="opacity 0.3s"
        className={styles.stars}
        zIndex="1"
      />
      {/* Clouds */}
      <Icon
        h="16px"
        w="16px"
        position="absolute"
        left="8px"
        top="7px"
        color="white"
        as={Clouds}
        opacity={isDark ? 0 : 1}
        transition="opacity 0.4s"
        zIndex="4"
        className={styles.cloud}
      />
    </Box>
  );
};

export default ColorModeSwitcher;
