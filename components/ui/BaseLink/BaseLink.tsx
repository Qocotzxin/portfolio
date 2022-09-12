import { Link, LinkProps, MenuItem, MenuItemProps } from "@chakra-ui/react";
import { NavLink } from "@models/hygraph";
import NextLink from "next/link";
import { FC } from "react";

interface BaseLinkProps {
  activeRoute: string;
  link: NavLink;
  isMenuItem?: boolean;
  locale?: string;
  isCurrentLocale?: boolean;
}

const BaseLink: FC<BaseLinkProps & LinkProps> = ({
  activeRoute,
  link,
  isMenuItem,
  locale,
  isCurrentLocale,
}) => {
  const linkProps: MenuItemProps & LinkProps = {
    variant: (
      isCurrentLocale === undefined ? activeRoute === link.url : isCurrentLocale
    )
      ? "selected"
      : "body",
    order: link.order,
    textTransform: "capitalize",
    "aria-current":
      isCurrentLocale == undefined ? activeRoute === link.url : isCurrentLocale,
  };

  return (
    <NextLink
      href={activeRoute === link.url ? "#main" : link.url}
      passHref
      locale={locale}
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
