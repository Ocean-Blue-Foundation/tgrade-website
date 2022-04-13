import { StyledContainer, StyledContent, heading } from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import Subscribe from "../../components/Subscribe";

interface SubscribeSectionProps {
  headingText: string;
  subHeadingText?: string;
  textColor?: string;
}

const SubscribeSection: React.FunctionComponent<SubscribeSectionProps> = ({ headingText, textColor }) => {
  return (
    <StyledContainer>
      <MainContainer>
        <StyledContent>
          <Heading level={2} text={headingText} cssHeading={heading} textColor={textColor} />
          <Subscribe />
        </StyledContent>
      </MainContainer>
    </StyledContainer>
  );
};

export default SubscribeSection;
