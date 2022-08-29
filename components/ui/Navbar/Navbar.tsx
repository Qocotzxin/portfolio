import { Box, Flex, HStack, Link, Show } from "@chakra-ui/react";
import ColorModeSwitcher from "@ui/ColorModeSwitcher";
import NavHeading from "@ui/NavHeading";
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
    color="white"
    justifyContent="space-between"
    alignItems="center"
    bg="transparent"
  >
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

    <HStack spacing={4}>
      <NextLink href="/" passHref>
        <Link variant="body">About</Link>
      </NextLink>
      <ColorModeSwitcher ariaLabel="Test" />
    </HStack>
  </Flex>
);

export default Navbar;
