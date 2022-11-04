import { useIsDarkMode } from "@hooks/useIsDarkMode";
import FooterLinks from "@ui/Footer/FooterLinks";
import LanguageSelector from "@ui/Footer/LanguageSelector";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import { FC } from "react";
import { Classes } from "./styles";

const Footer: FC = () => {
  const isDark = useIsDarkMode();

  return (
    <div
      className={concatClassNames(
        Classes.base,
        applyConditionalClass(isDark, Classes.baseDark)
      )}
    >
      <FooterLinks />
      <div className={Classes.block}>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Footer;
