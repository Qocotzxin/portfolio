import { Flex, HStack } from "@chakra-ui/react";
import FooterLinks from "@ui/Footer/FooterLinks";
import LanguageSelector from "@ui/Footer/LanguageSelector";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      w="100%"
      h="16"
      px="8"
      bg="white"
      _dark={{ bg: "gray.800" }}
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      bottom="0"
      left="0"
    >
      <FooterLinks />
      <HStack>
        <LanguageSelector />
      </HStack>
    </Flex>
  );
};

export default Footer;
