import { ComponentStyleConfig } from "@chakra-ui/react";

const components: Record<string, ComponentStyleConfig> = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
      },
    },
    variants: {
      body: {
        _hover: {
          _after: {
            content: '""',
            width: "100%",
            height: "1px",
            color: "white",
            backgroundColor: "white",
          },
        },
        _dark: {
          // boxShadow: "inset 0 0 0 0 var(--chakra-colors-gray-800)",
          // _hover: {
          //   boxShadow: "inset 200px 0 0 0 var(--chakra-colors-gray-50)",
          // },
        },
      },
    },
  },
};

export default components;
