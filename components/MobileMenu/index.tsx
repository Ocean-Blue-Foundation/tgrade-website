import { NavLink, StyledNav, StyledContainer, btn } from "./style";
import ReactDom from "react-dom";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Link from "next/link";
import BtnLink from "../BtnLink";

interface MobileMenuProps {
  onClose: () => void;
  mobileMenuContent: Array<{
    link: string;
    text: string;
  }>;
  activeHeaderLink?: number | null;
}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  onClose,
  mobileMenuContent,
  activeHeaderLink = null,
}) => {
  useLockBodyScroll();
  const element = document.getElementById("mobile-menu");

  if (!element) {
    return null;
  }

  return ReactDom.createPortal(
    <StyledContainer>
      <StyledNav>
        {mobileMenuContent.map(({ link, text }, index) => {
          return (
            <Link key={text} href={link} passHref={true}>
              <NavLink active={activeHeaderLink === index} onClick={onClose}>
                {text}
              </NavLink>
            </Link>
          );
        })}
        <BtnLink
          text="Try Tgrade App"
          link="https://dapp.tgrade.finance/trustedcircle"
          color="var(--color-white)"
          borderColor="var(--color-white)"
          backgroundColor="transparent"
          cssBtn={btn}
        />
      </StyledNav>
    </StyledContainer>,
    element,
  );
};

export default MobileMenu;
