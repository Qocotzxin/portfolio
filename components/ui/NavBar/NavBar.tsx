import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { applyConditionalClass, concatClassNames } from "@utils/classnames";
import NextLink from "next/link";
import { FC } from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import SkipLink from "./SkipLink";
import { Classes } from "./styles";

const NavBar: FC = () => {
  const isDark = useIsDarkMode();

  // TODO: analyze if hiding/showing nav based on scroll is required.
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [navPosition, setNavPosition] = useState<"relative" | "fixed">(
  //   "relative"
  // );

  // const lastScrollTopRef = useRef(lastScrollTop);
  // lastScrollTopRef.current = lastScrollTop;

  // useEffect(() => {
  //   const onScroll = () => {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTopRef.current) {
  //       setNavPosition("relative");
  //     } else {
  //       setNavPosition("fixed");
  //     }

  //     setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <nav
      className={concatClassNames(
        Classes.base,
        applyConditionalClass(isDark, Classes.baseDark)
      )}
    >
      <div className={Classes.block}>
        <NextLink href="/" legacyBehavior>
          <a>
            <NavLogo withAnimation />
          </a>
        </NextLink>
      </div>

      <SkipLink />

      <div className={concatClassNames(Classes.block, Classes.blockWide)}>
        <NavLinks />
        <ColorModeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
