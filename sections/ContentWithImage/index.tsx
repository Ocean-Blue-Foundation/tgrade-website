import { StyledContainer, StyledContent, heading, subHeading, StyledImage } from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import Image from "next/image";

interface FullBackgroundImageProps {
  image: string;
  headingText: string;
  subHeadingText?: string;
  children?: React.ReactNode;
  textColor?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  imageLeft?: boolean;
}

const FullBackgroundImage: React.FunctionComponent<FullBackgroundImageProps> = ({
  headingText,
  image,
  subHeadingText = "",
  children,
  textColor,
  headingLevel = 1,
  imageLeft = false,
}) => {
  return (
    <MainContainer>
      <StyledContainer imageLeft={imageLeft}>
        <StyledContent>
          {subHeadingText && (
            <Heading level={6} text={subHeadingText} cssHeading={subHeading} textColor={textColor} />
          )}
          <Heading level={headingLevel} text={headingText} cssHeading={heading} textColor={textColor} />
          {children}
        </StyledContent>
        <StyledImage>
          <Image src={image} alt="image" layout="fill" objectFit="contain" />
        </StyledImage>
      </StyledContainer>
    </MainContainer>
  );
};

export default FullBackgroundImage;
