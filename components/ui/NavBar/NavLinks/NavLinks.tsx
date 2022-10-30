import { useHygraphContext } from "@contexts/hygraphContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Hamburger } from "@icons";
import { Components } from "@models/hygraph";
import BaseLink from "@ui/BaseLink";
import FloatingMenu from "@ui/FloatingMenu";
import { removeForwardSlash } from "@utils/url";
import { useRouter } from "next/router";
import { FC } from "react";
import { Classes } from "./styles";

const NavLinks: FC = () => {
  const router = useRouter();
  const currentPath = removeForwardSlash(router.pathname);
  const { navLinks } = useHygraphContext();
  const ariaLabel = useAriaLabel({ component: Components.NavLinks });

  return (
    <>
      {/* Desktop */}
      <ul data-testid="NavLinks-desktop" className={Classes.navLinks}>
        {navLinks?.map((link) => (
          <li key={link.url}>
            <BaseLink activeRoute={currentPath} link={link} />
          </li>
        ))}
      </ul>
      {/* Mobile */}
      <div className={Classes.floatingMenu}>
        <FloatingMenu
          ariaLabel={ariaLabel?.content}
          ButtonIcon={<Hamburger />}
          data-testid="NavLinks-mobile"
        >
          {navLinks?.map((link) => (
            <BaseLink
              key={link.url}
              isMenuItem
              activeRoute={currentPath}
              link={link}
            />
          ))}
        </FloatingMenu>
      </div>
    </>
  );
};

export default NavLinks;
