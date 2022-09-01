import { HStack, Link, List, ListItem, VisuallyHidden } from "@chakra-ui/react";
import { useHygraphContext } from "@context/hygraphContext";
import NextLink from "next/link";
import { useRouter } from "next/router";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const router = useRouter();
  const { navLinks } = useHygraphContext();

  return (
    <List display="flex" alignItems="center" justifyContent="center">
      {navLinks?.map((link) => (
        <ListItem key={link.url} mx="2">
          <NextLink
            href={router.pathname === link.url ? "#main" : `/${link.url}`}
            passHref
          >
            <Link
              variant="base"
              order={link.order}
              aria-current={router.pathname === `/${link.url}`}
              transition="text-shadow 0.2s linear"
              className={router.pathname === `/${link.url}` ? styles.link : ""}
            >
              {link.text}
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavLinks;
