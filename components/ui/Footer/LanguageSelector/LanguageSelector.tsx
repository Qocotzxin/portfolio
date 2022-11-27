import { useHygraphContext } from "@contexts/hygraphContext";
import { useAriaLabel } from "@hooks/useAriaLabel";
import { Components } from "@models/hygraph";
import Link from "@ui/Link";
import FloatingMenu from "@ui/FloatingMenu";
import { removeForwardSlash } from "@utils/url";
import { useRouter } from "next/router";
import { FC } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageSelector: FC = () => {
  const { languages } = useHygraphContext();
  const router = useRouter();
  const currentPath = removeForwardSlash(router.pathname);
  const ariaLabel = useAriaLabel({
    component: Components.LanguageSelector,
  });

  return (
    <FloatingMenu
      aria-label={ariaLabel?.content}
      icon={<MdLanguage />}
      data-testid="LanguageSelector"
    >
      {languages
        ?.filter((l) => l.isActive)
        .map((l, index) => (
          <Link
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
