const bodyVariant = {
  position: "relative",
  _before: {
    content: '""',
    position: "absolute",
    display: "block",
    width: "100%",
    height: "2px",
    bottom: -1,
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
};

const Link = {
  baseStyle: {
    transition: "text-shadow 0.2s linear, color 0.2s linear",
    _hover: {
      textDecoration: "none",
    },
  },
  variants: {
    body: bodyVariant,
    selected: {
      ...bodyVariant,
      color: "blue.600 !important",
      textShadow:
        "0 0 12px var(--chakra-colors-blue-100), 0 0 12px var(--chakra-colors-blue-100), 0px 0 12px var(--chakra-colors-teal-300), 0px 0 12px var(--chakra-colors-teal-300)",
      _before: {
        ...bodyVariant._before,
        backgroundColor: "blue.600",
      },
      _dark: {
        ...bodyVariant._dark,
        color: "white !important",
        textShadow:
          "0 0 12px var(--chakra-colors-teal-100), 0 0 12px var(--chakra-colors-teal-100), 0px 0 12px var(--chakra-colors-blue-300), 0px 0 12px var(--chakra-colors-blue-300)",
      },
    },
  },
};

export { Link };
