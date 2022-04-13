import {
  StyledContainer,
  StyledContentBlock,
  StyledBreadcrumb,
  StyledBreadcrumbLink,
  mainHeading,
  heading,
  StyledKitBlock,
  StyledKit,
  logo,
} from "./style";
import Heading from "../../components/Heading";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import Link from "next/link";
import BtnLink from "../../components/BtnLink";

const PressKitContent = () => {
  return (
    <StyledContainer>
      <MainContainer>
        <StyledBreadcrumb>
          <Link href="/" passHref={true}>
            <StyledBreadcrumbLink>Home</StyledBreadcrumbLink>
          </Link>
          <span>&nbsp;» Press kit</span>
        </StyledBreadcrumb>
        <StyledContentBlock>
          <Heading level={1} text="Press kit" cssHeading={mainHeading} />
          <StyledKitBlock>
            <StyledKit>
              <Heading level={3} text="Tgrade Guidelines" cssHeading={heading} />
              <BtnLink
                text="Learn More"
                link="/Tgrade_Logo_guidelines_2020.pdf"
                color="var(--color-black)"
                borderColor="var(--color-white)"
                backgroundColor="var(--color-white)"
              />
            </StyledKit>
            <svg css={logo} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M52.541 69.427a2.894 2.894 0 1 0 5.788 0 2.894 2.894 0 0 0-5.788 0ZM54.278 77.82a2.026 2.026 0 1 0 4.052 0 2.026 2.026 0 0 0-4.052 0ZM50.4 76.952a2.138 2.138 0 1 0 0-4.277 2.138 2.138 0 0 0 0 4.277ZM56.228 63.84a2.076 2.076 0 1 0 0-4.152 2.076 2.076 0 0 0 0 4.152ZM46.177 82.803a3.183 3.183 0 1 0 6.367 0 3.183 3.183 0 0 0-6.367 0ZM39.584 70.359a4.052 4.052 0 1 0 8.103 0 4.052 4.052 0 0 0-8.103 0Z"
                fill="#1A1D26"
                fillOpacity={0.1}
              />
              <path
                d="M41.698 36.156h16.608V56.92c0 .203-.212.331-.403.263a4.472 4.472 0 0 0-5.984 4.21v.744c0 .242.02.479.056.71.164 1.027-.205 2.256-1.24 2.346a8.408 8.408 0 0 1-1.875-.046c-1.283-.176-1.284-1.924-.542-2.986a5.536 5.536 0 0 0-4.543-8.7c-1.018 0-2.078-.71-2.078-1.727l.001-15.578Z"
                fill="#1A1D26"
                fillOpacity={0.1}
              />
              <path
                d="M43.772 56.228a2.768 2.768 0 1 0 0 5.537 2.768 2.768 0 0 0 0-5.537ZM20.935 29.239a6.92 6.92 0 0 1 6.92-6.92h44.291a6.92 6.92 0 1 1 0 13.84h-44.29a6.92 6.92 0 0 1-6.92-6.92Z"
                fill="#1A1D26"
                fillOpacity={0.1}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 50C0 22.386 22.386 0 50 0s50 22.386 50 50-22.386 50-50 50S0 77.614 0 50ZM50 3.114C24.106 3.114 3.114 24.106 3.114 50c0 25.894 20.992 46.886 46.886 46.886 25.894 0 46.886-20.992 46.886-46.886C96.886 24.106 75.894 3.114 50 3.114Z"
                fill="#1A1D26"
                fillOpacity={0.1}
              />
            </svg>
            <StyledKit>
              <Heading level={3} text="Logo Files" cssHeading={heading} />
              <BtnLink
                text="Download"
                link="/Tgrade_logo.zip"
                color="var(--color-black)"
                borderColor="var(--color-white)"
                backgroundColor="var(--color-white)"
                fileName="Tgrade_logo.zip"
              />
            </StyledKit>
          </StyledKitBlock>
        </StyledContentBlock>
      </MainContainer>
    </StyledContainer>
  );
};

export default PressKitContent;
