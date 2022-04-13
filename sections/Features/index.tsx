import {
  StyledContainer,
  StyledWrapper,
  StyledRightContent,
  StyledLeftContent,
  heading,
  subHeading,
  paragraph,
  StyledVideo,
  StyledList,
  StyledListText,
} from "./style";
import Heading from "../../components/Heading";
import BtnLink from "../../components/BtnLink";
import React from "react";
import MainContainer from "../../containers/MainContainer";

interface FullBackgroundImageProps {}

const FullBackgroundImage: React.FunctionComponent<FullBackgroundImageProps> = () => {
  return (
    <StyledContainer>
      <MainContainer>
        <Heading level={6} text="Features" cssHeading={subHeading} />
        <Heading level={3} text="Trusted Circles" cssHeading={heading} />
        <p css={paragraph}>
          Trusted Circles are people you know and trust, created on Tgrade. Unleash your imagination on what
          digital assets you can build.
        </p>
        <BtnLink
          text="Create Trusted Circle"
          link="https://try.tgrade.finance/"
          color="var(--color-white)"
          borderColor="var(--color-black)"
          backgroundColor="var(--color-black)"
        />
        <StyledWrapper>
          <StyledLeftContent>
            <StyledVideo>
              <iframe
                src="https://www.youtube.com/embed/bHYwaXJXX50"
                frameBorder="0"
                allowFullScreen={true}
              />
            </StyledVideo>
          </StyledLeftContent>
          <StyledRightContent>
            <StyledList>
              <StyledListText>Regulatory compliant framework</StyledListText>
              <StyledListText>Benefits of blockchain technology</StyledListText>
              <StyledListText>Digitalize assets with a click</StyledListText>
              <StyledListText>Permissioned smart contracts</StyledListText>
              <StyledListText>Liquidity from legacy finance</StyledListText>
              <StyledListText>Secondary market for your assets</StyledListText>
            </StyledList>
          </StyledRightContent>
        </StyledWrapper>
      </MainContainer>
    </StyledContainer>
  );
};

export default FullBackgroundImage;
