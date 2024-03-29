import { StyledContainer, StyledHeader, StyledHeaderContainer, StyledNav, logo, NavLink } from "./style";
import MainContainer from "../../containers/MainContainer";
import SvgLogo from "../../components/SvgLogo";
import Link from "next/link";
import BtnLink from "../../components/BtnLink";
import BurgerButton from "../../components/BurgerButton";
import Headroom from "react-headroom";
import { useState } from "react";

interface HeaderProps {
  alternateHeader?: boolean;
  activeHeaderLink?: number;
}

const navLinks = [
  {
    link: "/#welcome",
    text: "Welcome",
  },
  {
    link: "/#tgrade",
    text: "Tgrade",
  },
  {
    link: "/#trustedcircles",
    text: "Trusted Circles",
  },
  {
    link: "/#articles",
    text: "Articles",
  },
  {
    link: "/#about",
    text: "About",
  },
  {
    link: "/#getstarted",
    text: "Get Started",
  },
  // {
  //   link: "/#game-of-engagement",
  //   text: "Game of Engagement",
  // },
];

const Header: React.FunctionComponent<HeaderProps> = ({
  alternateHeader = false,
  activeHeaderLink = null,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <StyledContainer alternateHeader={alternateHeader} isMobileMenuOpen={isMobileMenuOpen}>
      <Headroom pinStart={0}>
        <StyledHeader>
          <MainContainer>
            <StyledHeaderContainer>
              <SvgLogo css={logo} />
              <StyledNav>
                {navLinks.map(({ link, text }, index) => {
                  return (
                    <Link key={text} href={link} passHref={true}>
                      <NavLink active={activeHeaderLink === index}>{text}</NavLink>
                    </Link>
                  );
                })}
              </StyledNav>
              <BurgerButton
                mobileMenuContent={navLinks}
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                activeHeaderLink={activeHeaderLink}
              />
            </StyledHeaderContainer>
          </MainContainer>
        </StyledHeader>
      </Headroom>
    </StyledContainer>
  );
};

export default Header;
