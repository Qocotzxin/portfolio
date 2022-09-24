import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { FC } from "react";
import Disk from "./Disk";

const headingProps = (right = true) => ({
  size: { base: "2xl", lg: "4xl" },
  bgGradient: `linear(to-${
    right ? "r" : "l"
  }, var(--chakra-colors-teal-600), var(--chakra-colors-yellow-400))`,
  bgClip: "text",
  _dark: {
    bgGradient: `linear(to-${
      right ? "r" : "l"
    }, var(--chakra-colors-teal-400), var(--chakra-colors-yellow-300))`,
  },
});

const Hero: FC = () => {
  const { heroes } = useHygraphContext();

  if (!heroes || !heroes[0]) {
    return null;
  }

  const { title, subtitle } = heroes[0];

  return (
    <Flex
      bg="gray.100"
      _dark={{ bg: "black" }}
      h={{ base: "100%", md: "75%" }}
      w="100%"
      color="white"
      overflow="hidden"
      className="fadeIn-slower"
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      p="12"
      data-testid="Hero"
    >
      <VStack spacing={2} zIndex="1" className="fadeIn-slower">
        <Heading {...headingProps()} as="h1" pb="1">
          {title}
        </Heading>
        {subtitle && (
          <Heading {...headingProps(false)} as="h2">
            {subtitle}
          </Heading>
        )}
      </VStack>
      {/* Disk container to manipulate overflow */}
      <Disk alignSelf={{ base: "center", md: "baseline" }} />
    </Flex>
  );
};

export default Hero;
