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
import { baseUrl } from "../../utils/prefix";

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <FooterContent>
          <WrapperLeft>
            <SvgLogo css={logo} />
            <p css={ReusableStyles.copyright}>© {new Date().getFullYear()} by Stichting Ocean Blue</p>
          </WrapperLeft>
          <FooterNav>
            <FooterLink text="Privacy Policy" link={`${baseUrl}/privacy-policy`} />
            <FooterLink text="Press kit" link={`${baseUrl}/press-kit`} />
            <FooterLink text="Impressum" link={`${baseUrl}/impressum`} />
          </FooterNav>
          <Wrapper>
            <p css={ReusableStyles.paragraphWhite}>Contact us</p>
            <Link href="mailto:hallo@oceanblue.foundation" passHref={true}>
              <StyledEmailLink>hallo@oceanblue.foundation</StyledEmailLink>
            </Link>
            <SocialIcons />
          </Wrapper>
        </FooterContent>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
