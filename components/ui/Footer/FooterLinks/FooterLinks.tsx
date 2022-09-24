import { HStack, Link } from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { ICON_MAP } from "@models/hygraph";
import { FC } from "react";

const FooterLinks: FC = () => {
  const { footerLinks } = useHygraphContext();

  return (
    <HStack spacing={4} mr="4">
      {footerLinks?.map((link) => {
        const LinkIcon = ICON_MAP[link.icon];
        return (
          Boolean(LinkIcon) &&
          link.isActive && (
            <Link
              key={link.url}
              display="flex"
              href={link.url}
              isExternal
              aria-label={link.ariaLabel}
            >
              <LinkIcon _hover={{ color: "blue.400" }} />
            </Link>
          )
        );
      })}
    </HStack>
  );
};

export default FooterLinks;
