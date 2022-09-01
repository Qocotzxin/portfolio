const global = (props: { colorMode: "light" | "dark" }) => ({
  "html, body": {
    color: props.colorMode === "light" ? "gray.600" : "white",
  },
});

export default global;
