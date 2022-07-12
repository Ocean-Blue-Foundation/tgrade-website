import { StyledContainer, StyledContent, heading, headingSmall } from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";

interface FullBackgroundVideoProps {
  video: string;
  headingText: string;
  subHeadingText?: string;
  children: React.ReactNode;
  textColor?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  maxWidth?: number;
  poster: string;
}

const FullBackgroundVideo: React.FunctionComponent<FullBackgroundVideoProps> = ({
  headingText,
  video,
  children,
  textColor,
  headingLevel = 1,
  maxWidth = 62,
  poster,
}) => {
  return (
    <>
      <StyledContainer>
        <video id="background-video" loop autoPlay muted poster={poster}>
          <source src={video} type="video/mp4" />
        </video>
        {console.log("video", video)}
        <MainContainer>
          <StyledContent maxWidth={maxWidth}>
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
    </>
  );
};

export default FullBackgroundVideo;
