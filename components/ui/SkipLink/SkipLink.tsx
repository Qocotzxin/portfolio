import { Link, VisuallyHidden } from "@chakra-ui/react";

const SkipLink = () => {
  return (
    <VisuallyHidden>
      <Link href="#main"></Link>
    </VisuallyHidden>
  );
};

export default SkipLink;
