import {
  StyledContainer,
  StyledBreadcrumb,
  StyledBreadcrumbLink,
  mainHeading,
  heading,
  StyledContentBlock,
  StyledRegularLink,
} from "./style";
import Link from "next/link";
import MainContainer from "../../containers/MainContainer";
import Heading from "../../components/Heading";

const ImpressumContent = () => {
  return (
    <MainContainer>
      <StyledContainer>
        <StyledBreadcrumb>
          <Link href="/" passHref={true}>
            <StyledBreadcrumbLink>Home</StyledBreadcrumbLink>
          </Link>
          <span>&nbsp;» Impressum</span>
        </StyledBreadcrumb>
        <StyledContentBlock>
          <Heading level={1} text="Impressum" cssHeading={mainHeading} />
          <p>Information according to § 5 TMG / Angaben gemäß § 5 TMG:</p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="Provider / Anbieter:" cssHeading={heading} />
          <ul>
            <li>Confio GmbH</li>
            <li>7th Floor</li>
            <li>Potsdamer Platz 1</li>
            <li>10785 Berlin</li>
          </ul>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading
            level={2}
            text="Managing Director / Vertretungsberechtigter Geschäftsführer:"
            cssHeading={heading}
          />
          <p>Simon Warta</p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="Contact / Kontakt:" cssHeading={heading} />
          <p>
            <StyledRegularLink href="hello@confio.gmbh">hello@confio.gmbh</StyledRegularLink>
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="Commercial Register / Handelsregister:" cssHeading={heading} />
          <p>HRB 221575, Amtsgericht Charlottenburg</p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="VAT number / Umsatzsteuer-Identifikationsnummer:" cssHeading={heading} />
          <p>DE339802279</p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading
            level={2}
            text="Responsible for the content / Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
            cssHeading={heading}
          />
          <ul>
            <li>Simon Warta</li>
            <li>c/o Confio GmbH</li>
            <li>7th Floor</li>
            <li>Potsdamer Platz 1</li>
            <li>10785 Berlin</li>
          </ul>
        </StyledContentBlock>
      </StyledContainer>
    </MainContainer>
  );
};

export default ImpressumContent;
