import { useHygraphContext } from "@contexts/hygraphContext";
import { FC } from "react";
import { Classes } from "./styles";

const SkipLink: FC = () => {
  const { skipLinks } = useHygraphContext();

  return skipLinks && skipLinks.length ? (
    <a data-testid="SkipLink" href="#main" className={Classes.base}>
      {skipLinks[0].text}
    </a>
  ) : null;
};

export default SkipLink;
