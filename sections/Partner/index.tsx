import { StyledContainer, StyledContent, heading, StyledImage } from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import Image from "next/image";
import { baseUrl } from "../../utils/prefix";

interface PartnerProps {
  headingText: string;
  textColor?: string;
}

const Partner: React.FunctionComponent<PartnerProps> = ({ headingText, textColor }) => {
  return (
    <StyledContainer>
      <MainContainer>
        <StyledContent>
          <Heading level={2} text={headingText} cssHeading={heading} textColor={textColor} />
          <StyledImage>
            <Image src={`${baseUrl}/ignite-logo.png`} alt="ignite" layout="fill" objectFit="contain" />
          </StyledImage>
        </StyledContent>
      </MainContainer>
    </StyledContainer>
  );
};

export default Partner;
