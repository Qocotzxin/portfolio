import { Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import SkipLink from "./SkipLink";

const NavBar: FC = () => {
  // TODO: analyze if hiding/showing nav based on scroll is required.
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [navPosition, setNavPosition] = useState<"relative" | "fixed">(
  //   "relative"
  // );

  // const lastScrollTopRef = useRef(lastScrollTop);
  // lastScrollTopRef.current = lastScrollTop;

  // useEffect(() => {
  //   const onScroll = () => {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTopRef.current) {
  //       setNavPosition("relative");
  //     } else {
  //       setNavPosition("fixed");
  //     }

  //     setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <Flex
      as="nav"
      w="100%"
      h="16"
      px="8"
      py="2"
      bg="white"
      _dark={{ bg: "gray.800" }}
      justifyContent="space-between"
      position="fixed"
      // position={navPosition}
      top="0"
      left="0"
    >
      <HStack spacing={2}>
        <NextLink href="/" passHref>
          <Link>
            <NavLogo withAnimation />
          </Link>
        </NextLink>
      </HStack>

      <SkipLink />

      <HStack spacing={4}>
        <NavLinks />
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};

export default NavBar;
