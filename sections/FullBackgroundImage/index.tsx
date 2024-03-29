import { StyledContainer, StyledContent, heading, subHeading, headingSmall } from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";

interface FullBackgroundImageProps {
  image: string;
  headingText: string;
  subHeadingText?: string;
  children: React.ReactNode;
  textColor?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  responsive?: boolean;
  align?: "left" | "center" | "right";
  verticalAlign?: "start" | "center" | "end";
  maxWidth?: number;
}

const FullBackgroundImage: React.FunctionComponent<FullBackgroundImageProps> = ({
  headingText,
  image,
  subHeadingText = "",
  children,
  textColor,
  headingLevel = 1,
  responsive = false,
  align = "left",
  verticalAlign = "center",
  maxWidth = 63,
}) => {
  return (
    <StyledContainer image={image} responsive={responsive}>
      <MainContainer>
        <StyledContent align={align} verticalAlign={verticalAlign} maxWidth={maxWidth}>
          {subHeadingText && (
            <Heading level={6} text={subHeadingText} cssHeading={subHeading} textColor={textColor} />
          )}
          <Heading
            level={headingLevel}
            text={headingText}
            cssHeading={headingLevel !== 1 ? headingSmall : heading}
            textColor={textColor}
          />
          {children}
        </StyledContent>
      </MainContainer>
    </StyledContainer>
  );
};

export default FullBackgroundImage;
