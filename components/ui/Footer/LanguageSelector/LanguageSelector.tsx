import { useHygraphContext } from "@contexts/hygraphContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Languages } from "@icons";
import { Components } from "@models/hygraph";
import BaseLink from "@ui/BaseLink";
import FloatingMenu from "@ui/FloatingMenu";
import { removeForwardSlash } from "@utils/url";
import { useRouter } from "next/router";
import { FC } from "react";

const LanguageSelector: FC = () => {
  const { languages } = useHygraphContext();
  const router = useRouter();
  const currentPath = removeForwardSlash(router.pathname);
  const ariaLabel = useAriaLabel({
    component: Components.LanguageSelector,
  });

  return (
    <FloatingMenu
      ariaLabel={ariaLabel?.content}
      ButtonIcon={<Languages />}
      data-testid="LanguageSelector"
    >
      {languages
        ?.filter((l) => l.isActive)
        .map((l, index) => (
          <BaseLink
            key={l.code}
            isMenuItem
            activeRoute={currentPath}
            link={{
              url: currentPath,
              order: index,
              text: l.displayName,
            }}
            locale={l.code}
            isCurrentLocale={router.locale === l.code}
          />
        ))}
    </FloatingMenu>
  );
};

export default LanguageSelector;
