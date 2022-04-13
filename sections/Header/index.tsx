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
    link: "/#problem",
    text: "Problem",
  },
  {
    link: "/#solution",
    text: "Solution",
  },
  {
    link: "/#how-it-works",
    text: "How It Works",
  },
  {
    link: "/#features",
    text: "Features",
  },
  {
    link: "/#knowledge",
    text: "Knowledge",
  },
  {
    link: "/#game-of-engagement",
    text: "Game of Engagement",
  },
];

const Header: React.FunctionComponent<HeaderProps> = ({
  alternateHeader = false,
  activeHeaderLink = null,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <StyledContainer alternateHeader={alternateHeader}>
      <Headroom>
        <StyledHeader>
          <MainContainer>
            <StyledHeaderContainer>
              <SvgLogo css={logo} />
              <StyledNav>
                {navLinks.map(({ link, text }, index) => {
                  return (
                    <Link href={link} passHref={true}>
                      <NavLink key={index} active={activeHeaderLink === index}>
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
                />
              </StyledNav>
              <BurgerButton
                mobileMenuContent={navLinks}
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </StyledHeaderContainer>
          </MainContainer>
        </StyledHeader>
      </Headroom>
    </StyledContainer>
  );
};

export default Header;
