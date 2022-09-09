import { Link, LinkProps, MenuItem, MenuItemProps } from "@chakra-ui/react";
import { NavLink } from "@models/hygraph";
import NextLink from "next/link";
import { FC } from "react";

interface BaseLinkProps {
  activeRoute: string;
  link: NavLink;
  isMenuItem?: boolean;
}

const BaseLink: FC<BaseLinkProps & LinkProps> = ({
  activeRoute,
  link,
  isMenuItem,
}) => {
  const linkProps: MenuItemProps & LinkProps = {
    variant: activeRoute === `/${link.url}` ? "selected" : "body",
    order: link.order,
    "aria-current": activeRoute === `/${link.url}`,
  };

  return (
    <NextLink
      href={activeRoute === `/${link.url}` ? "#main" : `/${link.url}`}
      passHref
    >
      {isMenuItem ? (
        <MenuItem as={Link} {...linkProps}>
          {link.text}
        </MenuItem>
      ) : (
        <Link {...linkProps}>{link.text}</Link>
      )}
    </NextLink>
  );
};

export default BaseLink;
