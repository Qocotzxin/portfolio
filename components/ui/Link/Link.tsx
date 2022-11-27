import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { NavLink } from "@models/hygraph";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import NextLink from "next/link";
import { FC } from "react";
import { Classes } from "./styles";

interface LinkProps {
  activeRoute: string;
  link: NavLink;
  isMenuItem?: boolean;
  locale?: string;
  isCurrentLocale?: boolean;
}

const Link: FC<LinkProps> = ({
  activeRoute,
  link,
  isMenuItem,
  locale,
  isCurrentLocale,
}) => {
  const isDark = useIsDarkMode();

  return (
    <NextLink
      href={activeRoute === link.url ? "#main" : link.url}
      legacyBehavior
      locale={locale}
    >
      <a
        tabIndex={isMenuItem ? -1 : undefined}
        role={isMenuItem ? "menuitem" : undefined}
        data-order={link.order}
        aria-current={
          isCurrentLocale == undefined
            ? activeRoute === link.url
            : isCurrentLocale
        }
        className={concatClassNames(
          Classes.base,
          applyConditionalClass(isDark, Classes.baseDark)
        )}
        style={{ order: link.order }}
      >
        {link.text}
      </a>
    </NextLink>
  );
};

export default Link;
