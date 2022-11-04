import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import fonts from "./fonts";

const theme = extendTheme({ config, fonts });

export default theme;
