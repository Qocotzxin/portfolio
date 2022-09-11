import { Flex, HStack } from "@chakra-ui/react";
import LanguageSelector from "@ui/Footer/LanguageSelector";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      h="64px"
      w="100%"
      px="8"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      bottom="0"
      left="0"
      borderTop="1px solid var(--chakra-colors-gray-100)"
    >
      <HStack />
      <HStack>
        <LanguageSelector />
      </HStack>
    </Flex>
  );
};

export default Footer;
