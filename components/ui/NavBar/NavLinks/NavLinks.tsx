import { List, ListItem, Show } from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Hamburger } from "@icons";
import { Components } from "@models/hygraph";
import BaseLink from "@ui/BaseLink";
import FloatingMenu from "@ui/FloatingMenu";
import { removeForwardSlash } from "@utils/url";
import { useRouter } from "next/router";
import { FC } from "react";

const NavLinks: FC = () => {
  const router = useRouter();
  const { navLinks } = useHygraphContext();
  const ariaLabel = useAriaLabel({ component: Components.NavLinks });

  return (
    <>
      {/* Desktop */}
      <Show above="md">
        <List
          display="flex"
          alignItems="center"
          justifyContent="center"
          data-testid="NavLinks-desktop"
        >
          {navLinks?.map((link) => (
            <ListItem key={link.url} mx="2">
              <BaseLink activeRoute={router.pathname} link={link} />
            </ListItem>
          ))}
        </List>
      </Show>
      {/* Mobile */}
      <Show breakpoint="(max-width: 767px)">
        <FloatingMenu
          ariaLabel={ariaLabel?.content}
          ButtonIcon={<Hamburger />}
          data-testid="NavLinks-mobile"
        >
          {navLinks?.map((link) => (
            <BaseLink
              key={link.url}
              isMenuItem
              activeRoute={removeForwardSlash(router.pathname)}
              link={link}
            />
          ))}
        </FloatingMenu>
      </Show>
    </>
  );
};

export default NavLinks;
