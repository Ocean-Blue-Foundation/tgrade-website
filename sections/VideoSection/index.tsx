import {
  StyledContainer,
  StyledWrapper,
  StyledRightContent,
  StyledLeftContent,
  heading,
  StyledVideo,
  StyledLinksContainer,
  StyledLink,
  StyledLinkText,
} from "./style";
import Heading from "../../components/Heading";
import ReadLink from "../../components/ReadLink";
import React from "react";
import MainContainer from "../../containers/MainContainer";

interface FullBackgroundImageProps {}

const FullBackgroundImage: React.FunctionComponent<FullBackgroundImageProps> = () => {
  return (
    <StyledContainer>
      <MainContainer>
        <StyledWrapper>
          <StyledLeftContent>
            <Heading level={3} text="Watch video" cssHeading={heading} />
            <StyledVideo>
              <iframe
                src="https://www.youtube.com/embed/6TI8f7X_Mnk"
                frameBorder="0"
                allowFullScreen={true}
              />
            </StyledVideo>
          </StyledLeftContent>
          <StyledRightContent>
            <Heading level={3} text="Read articles" cssHeading={heading} />
            <StyledLinksContainer>
              <StyledLink>
                <StyledLinkText>Securing a blockchain with Proof of Engagement</StyledLinkText>
                <ReadLink link="https://medium.com/tgradefinance/securing-a-blockchain-with-proof-of-engagement-b13daa9befc" />
              </StyledLink>
              <StyledLink>
                <StyledLinkText>What is Institutional DeFi?</StyledLinkText>
                <ReadLink link="https://medium.com/tgradefinance/what-is-institutional-defi-6ad84f61ac82" />
              </StyledLink>
              <StyledLink>
                <StyledLinkText>How to build a MiCA compliant business on Tgrade</StyledLinkText>
                <ReadLink link="https://medium.com/tgradefinance/how-to-build-a-mica-compliant-business-on-tgrade-556feb656a21" />
              </StyledLink>
              <StyledLink>
                <StyledLinkText>A Decentralised Social Organisation</StyledLinkText>
                <ReadLink link="https://medium.com/tgradefinance/a-decentralised-social-organisation-770835595c3d" />
              </StyledLink>
            </StyledLinksContainer>
          </StyledRightContent>
        </StyledWrapper>
      </MainContainer>
    </StyledContainer>
  );
};

export default FullBackgroundImage;
