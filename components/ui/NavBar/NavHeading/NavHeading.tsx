import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import styles from "./NavHeading.module.css";

const NavHeading: FC = () => (
  <Heading
    as="h1"
    position="relative"
    pl="15px"
    pt="1px"
    w="100%"
    fontSize="xl"
    fontWeight="normal"
    fontFamily="Oswald"
    bgGradient="linear(to-r, teal.300, blue.300)"
    bgClip="text"
    className={styles.heading}
  >
    <span className={styles.firstName}>C</span>
    <span className={styles.lastName}>E</span>
  </Heading>
);

export default NavHeading;
