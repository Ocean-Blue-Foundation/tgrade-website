import { StyledContainer, StyledHeader, StyledHeaderContainer, StyledNav, logo, NavLink } from "./style";
import MainContainer from "../../containers/MainContainer";
import SvgLogo from "../../components/SvgLogo";
import Link from "next/link";
import BtnLink from "../../components/BtnLink";
import Headroom from "react-headroom";

interface HeaderProps {
  alternateHeader?: boolean;
  activeHeaderLink: number;
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

const Header: React.FunctionComponent<HeaderProps> = ({ alternateHeader = false, activeHeaderLink }) => {
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
                {/* <Link href="/#welcome" passHref={true}>
                  <NavLink>Welcome</NavLink>
                </Link> */}
                {/* <Link href="/#problem" passHref={true}>
                  <NavLink>Problem</NavLink>
                </Link> */}
                {/* <Link href="/#solution" passHref={true}>
                  <NavLink>Solution</NavLink>
                </Link> */}
                {/* <Link href="/#how-it-works" passHref={true}>
                  <NavLink>How It Works</NavLink>
                </Link> */}
                {/* <Link href="/#features" passHref={true}>
                  <NavLink>Features</NavLink>
                </Link> */}
                {/* <Link href="/#knowledge" passHref={true}>
                  <NavLink>Knowledge</NavLink>
                </Link>
                <Link href="/#game-of-engagement" passHref={true}>
                  <NavLink>Game of Engagement</NavLink>
                </Link> */}
                <BtnLink
                  text="Subscribe"
                  link="/#subscribe"
                  color="var(--color-white)"
                  borderColor="var(--color-white)"
                  backgroundColor="transparent"
                />
              </StyledNav>
            </StyledHeaderContainer>
          </MainContainer>
        </StyledHeader>
      </Headroom>
    </StyledContainer>
  );
};

export default Header;
