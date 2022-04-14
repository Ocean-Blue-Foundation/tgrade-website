import {
  StyledEmailLink,
  FooterContainer,
  Wrapper,
  WrapperLeft,
  FooterNav,
  FooterContent,
  logo,
} from "./style";
import MainContainer from "../../containers/MainContainer";
import FooterLink from "../../components/FooterLink";
import SvgLogo from "../../components/SvgLogo";
import SocialIcons from "../../components/SocialIcons";
import ReusableStyles from "../../theme/ReusableStyles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <FooterContent>
          <WrapperLeft>
            <SvgLogo css={logo} />
            <p css={ReusableStyles.paragraphWhite}>
              This website is maintained by Confio. The contents and opinions of this website are those of
              Confio and might not be consessus in the Tgrade ecosystem.
            </p>
          </WrapperLeft>
          <FooterNav>
            <FooterLink text="Privacy Policy" link="/privacy-policy" />
            <FooterLink text="Press kit" link="/press-kit" />
            <FooterLink text="Impressum" link="/impressum" />
          </FooterNav>
          <Wrapper>
            <p css={ReusableStyles.paragraphWhite}>Contact us</p>
            <Link href="mailto:hello@confio.gmbh" passHref={true}>
              <StyledEmailLink>hello@confio.gmbh</StyledEmailLink>
            </Link>
            <SocialIcons />
          </Wrapper>
        </FooterContent>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
