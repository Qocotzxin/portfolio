import { Link } from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { FC } from "react";

const SkipLink: FC = () => {
  const { skipLinks } = useHygraphContext();

  return skipLinks && skipLinks.length ? (
    <Link
      data-testid="SkipLink"
      px="2"
      py="1"
      bg="teal.500"
      color="gray.100"
      fontSize="sm"
      fontWeight="bold"
      position="absolute"
      left="50%"
      borderRadius="sm"
      transform="translateY(-250%)"
      transition="transform 0.3s"
      _focus={{
        transform: "translateY(-50%)",
      }}
      href="#main"
    >
      {skipLinks[0].text}
    </Link>
  ) : null;
};

export default SkipLink;
