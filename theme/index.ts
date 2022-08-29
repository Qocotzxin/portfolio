import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import config from "./config";
import fonts from "./fonts";

const theme = extendTheme({ config, fonts, components });

export default theme;
