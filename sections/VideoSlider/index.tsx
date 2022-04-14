import {
  StyledContainer,
  StyledWrapper,
  StyledTopContent,
  heading,
  videoHeading,
  StyledVideo,
  StyledSlide,
} from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import Slider from "react-slick";
import BtnLink from "../../components/BtnLink";

interface FullBackgroundImageProps {}

const FullBackgroundImage: React.FunctionComponent<FullBackgroundImageProps> = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
    ],
  };

  return (
    <StyledContainer>
      <MainContainer>
        <StyledWrapper>
          <StyledTopContent>
            <Heading level={2} text="We want to share with you our knowledge" cssHeading={heading} />
            <BtnLink
              text="Visit Our Blog"
              link="https://medium.com/tgradefinance"
              color="var(--color-black)"
              borderColor="var(--color-black)"
              backgroundColor="var(--color-white)"
            />
          </StyledTopContent>
          <Slider {...settings}>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/rbD2A_Gj3pc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cryptocito" cssHeading={videoHeading} />
              <p>Cosmos Smart Contracts (COSMWASM) and Cosmos for Institutions (Tgrade Finance)</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/fQAwy7M_2uc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Citizen Cosmos" cssHeading={videoHeading} />
              <p>Citizen Cosmos: Ethan Frey, values, engagement & the interchain, #35</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/DKK0MG-Uv5U"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cøsmoverse" cssHeading={videoHeading} />
              <p>Martin Worner - T-Grade Regulating DEFI through CØSMOS</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/rbD2A_Gj3pc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cryptocito" cssHeading={videoHeading} />
              <p>Cosmos Smart Contracts (COSMWASM) and Cosmos for Institutions (Tgrade Finance)</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/fQAwy7M_2uc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Citizen Cosmos" cssHeading={videoHeading} />
              <p>Citizen Cosmos: Ethan Frey, values, engagement & the interchain, #35</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/DKK0MG-Uv5U"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cøsmoverse" cssHeading={videoHeading} />
              <p>Martin Worner - T-Grade Regulating DEFI through CØSMOS</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/rbD2A_Gj3pc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cryptocito" cssHeading={videoHeading} />
              <p>Cosmos Smart Contracts (COSMWASM) and Cosmos for Institutions (Tgrade Finance)</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/fQAwy7M_2uc"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Citizen Cosmos" cssHeading={videoHeading} />
              <p>Citizen Cosmos: Ethan Frey, values, engagement & the interchain, #35</p>
            </StyledSlide>
            <StyledSlide>
              <StyledVideo>
                <iframe
                  src="https://www.youtube.com/embed/DKK0MG-Uv5U"
                  frameBorder="0"
                  allowFullScreen={true}
                />
              </StyledVideo>
              <Heading level={4} text="Cøsmoverse" cssHeading={videoHeading} />
              <p>Martin Worner - T-Grade Regulating DEFI through CØSMOS</p>
            </StyledSlide>
          </Slider>
        </StyledWrapper>
      </MainContainer>
    </StyledContainer>
  );
};

export default FullBackgroundImage;
