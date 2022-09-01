import { ComponentStyleConfig } from "@chakra-ui/react";

const components: Record<string, ComponentStyleConfig> = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
      },
    },
    variants: {
      base: {
        position: "relative",
        _before: {
          content: '""',
          position: "absolute",
          display: "block",
          width: "100%",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "gray.800",
          transform: "scaleX(0)",
          transition: "transform 0.3s ease",
        },
        _hover: {
          _before: {
            transform: "scaleX(1)",
          },
        },
        _dark: {
          _before: {
            backgroundColor: "gray.50",
          },
        },
      },
    },
  },
};

export default components;
