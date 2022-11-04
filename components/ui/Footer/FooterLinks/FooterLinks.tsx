import { useHygraphContext } from "@contexts/hygraphContext";
import { ICON_MAP } from "@models/hygraph";
import { FC } from "react";
import { Classes } from "./styles";

const FooterLinks: FC = () => {
  const { footerLinks } = useHygraphContext();

  return (
    <div className={Classes.base}>
      {footerLinks?.map((link) => {
        const LinkIcon = ICON_MAP[link.icon];
        return (
          Boolean(LinkIcon) &&
          link.isActive && (
            <a
              target="_blank"
              rel="noreferrer"
              key={link.url}
              href={link.url}
              aria-label={link.ariaLabel}
            >
              <LinkIcon className={Classes.icon} />
            </a>
          )
        );
      })}
    </div>
  );
};

export default FooterLinks;
