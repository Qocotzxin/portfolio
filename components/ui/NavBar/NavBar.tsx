import { Box, Flex, HStack, Link, Show } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import NavHeading from "./NavHeading";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import SkipLink from "./SkipLink";
import NextLink from "next/link";
import { FC } from "react";

const NavBar: FC = () => (
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

      <SkipLink />

      <HStack spacing={4}>
        <NavLinks />
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  </Flex>
);

export default NavBar;
