import { useColorMode } from "@chakra-ui/react";
import { useHygraphContext } from "@contexts/hygraphContext";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import { FC } from "react";
import { ColorMode } from "types";
import Disk from "../../ui/Disk";
import { Classes } from "./styles";

const Home: FC = () => {
  const { heroes } = useHygraphContext();
  const { colorMode } = useColorMode();

  if (!heroes || !heroes[0]) {
    return null;
  }

  const { title, subtitle } = heroes[0];

  return (
    <div data-testid="Home" className={Classes.home}>
      <div
        className={concatClassNames(
          Classes.home,
          Classes.homeHero,
          applyConditionalClass(
            colorMode === ColorMode.dark,
            Classes.homeHeroDark
          )
        )}
        data-testid="Hero"
      >
        <div
          className={concatClassNames(
            Classes.homeHeroTitle,
            applyConditionalClass(
              colorMode === ColorMode.dark,
              Classes.homeHeroTitleDark
            )
          )}
        >
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </div>
        {/* Disk container to manipulate overflow */}
        <Disk />
      </div>
    </div>
  );
};

export default Home;
