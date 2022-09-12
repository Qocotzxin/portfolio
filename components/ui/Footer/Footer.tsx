import { Flex, HStack } from "@chakra-ui/react";
import LanguageSelector from "@ui/Footer/LanguageSelector";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      w="100%"
      px="8"
      py="4"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      bottom="0"
      left="0"
    >
      <HStack />
      <HStack>
        <LanguageSelector />
      </HStack>
    </Flex>
  );
};

export default Footer;
