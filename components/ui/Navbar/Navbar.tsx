import {
  Box,
  Flex,
  HStack,
  Link,
  Show,
  VisuallyHidden,
} from "@chakra-ui/react";
import ColorModeSwitcher from "@ui/ColorModeSwitcher";
import NavHeading from "@ui/NavHeading";
import NavLinks from "@ui/NavLinks";
import NavLogo from "@ui/NavLogo";
import NextLink from "next/link";
import { FC } from "react";

const Navbar: FC = () => (
  <Flex
    as="nav"
    w="100%"
    h="16"
    px="12"
    py="2"
    bg="transparent"
    justifyContent="center"
  >
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxW="80em"
      w="100%"
    >
      <HStack spacing={2}>
        <NextLink href="/" passHref>
          <Link>
            <Show breakpoint="(max-width: 767px)">
              <Box>
                <NavLogo withAnimation />
              </Box>
            </Show>
            <Show above="md">
              <NavHeading />
            </Show>
          </Link>
        </NextLink>
      </HStack>

      <HStack spacing={4} fontSize="2xl" fontWeight="bold">
        <NavLinks />
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  </Flex>
);

export default Navbar;
