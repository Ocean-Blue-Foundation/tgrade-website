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
            <Link href={link} passHref={true}>
              <NavLink key={index} active={activeHeaderLink === index} onClick={onClose}>
                {text}
              </NavLink>
            </Link>
          );
        })}
        <BtnLink
          text="Subscribe"
          link="/#subscribe"
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
