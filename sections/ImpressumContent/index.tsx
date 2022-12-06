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
          <span>&nbsp;» Terms & Conditions</span>
        </StyledBreadcrumb>
        <StyledContentBlock>
          <Heading level={1} text="Terms & Conditions" cssHeading={mainHeading} />
          <p>Information according to § 5 TMG / Angaben gemäß § 5 TMG:</p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="USER TERMS OCEAN BLUE’S TGRADE WEBSITE " cssHeading={heading} />
          <p>
            By using the website https://tgrade.finance and subsequent webpages related thereto (the
            “Website”), you hereby agree (i) to become a party to this agreement (the/this “Agreement”) and
            (ii) that your counterparty is STICHTING OCEAN BLUE, a foundation incorporated under the laws of
            the Netherlands (stichting), having its statutory seat in (1018 RG) Amsterdam, the Netherlands and
            registered offices at the address of Kraijenhoffstraat 137 A, Amsterdam, the Netherlands,
            registered with the Dutch Chamber of Commerce (Kamer van Koophandel) under file number 80743218
            (“Ocean Blue”).{" "}
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="WHAT THESE USER TERMS COVER :" cssHeading={heading} />
          <p>
            This Agreement applies to all visits to and use(s) of the Website and to all information,
            recommendations and services that Ocean Blue provides to you via the Website (the “Content”). The
            Content is made (technically) available to and accessible by you by Ocean Blue and/or by a third
            party designated thereto by Ocean Blue.{" "}
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="THE CONTENT AND OBLIGATIONS :" cssHeading={heading} />
          <p>
            By using the Website, Ocean Blue will provide the Content to you via the Website. This is
            exclusively done for your own use, in an orderly manner and according to the standards of
            reasonableness and fairness. You realise that using the Content via the Website and (therefore)
            entering into this Agreement does not give you any rights and/or does not oblige Ocean Blue to
            (do) anything, except for the actions expressed in this Agreement. More specifically and for the
            avoidance of doubt: using the Website and (therefore) entering into this Agreement does not give
            you the right and/or does not oblige Ocean Blue to enter into any further agreement whatsoever
            and/or to obtain (future) tokens in any form whatsoever.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="TERMS OF USE " cssHeading={heading} />
          <p>
            By entering into this Agreement, you hereby confirm and warrant to Ocean Blue that you will use
            and interact with the Content and (via) the Website: exclusively for yourself and not (also) for
            and/or on behalf of anybody else; at your own risk and expense; in an orderly manner and according
            to the standards of reasonableness and fairness; only if you are over 18 (eighteen) years old;
            only if you are legally permitted under the laws and regulations applicable to you and applicable
            to this Agreement to do so; in a legal and non-fraudulent manner - more specifically: you will
            only use and/or interact with the Content and via the Website. You will not circumvent the Website
            and also not use the Content via screen-scraping and/or via any other irregular and/or fraudulent
            way; and not directly via an API, unless approved by Ocean Blue in writing and beforehand and/or
            via (parts of) an API which is made publicly available for use by Ocean Blue. In the event that
            you breach any of the aforementioned confirmations and/or warranties, Ocean Blue is legally
            entitled, without giving you prior notice thereof, to exclude you from using and interacting with
            the Website and the Content. It is envisaged that Ocean Blue will implement a KYC (know your
            customer) and/or AML (anti money laundering) procedure and accompanying checks applied by her
            and/or a third party designated thereto by Ocean Blue in the future. This will result in Ocean
            Blue formally requesting you to complete said KYC and/or AML procedure(s) in order to be allowed
            to use and interact with the Content. Ocean Blue will inform you thereof in due time and grant you
            ample opportunity to complete said procedure(s). However, should you fail to successfully complete
            said procedure(s) - which is to be determined at the sole discretion of Ocean Blue and/or a third
            party designated by Ocean Blue - Ocean Blue is legally entitled to exclude you from using and
            interacting with the Website and the Content.{" "}
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="LIABILITY" cssHeading={heading} />
          <p>
            Ocean Blue, its directors, employees and/or any other (third) party involved with the creation of
            the Website, the Content and/or (the execution of) this Agreement, cannot be held liable for any
            damage, however named, resulting from your use of the Website and/or the Content. Ocean Blue, its
            directors, employees and/or any other (third) party involved with the creation of the Website, the
            Content and (the execution of) this Agreement, are also not liable for any for any damage, however
            named, resulting from hacks, soft- and/or hardware malfunctioning, (hardware) system down times,
            blockchain down times and/or any other soft- and/or hardware related malfunctioning that affects
            (the functioning of) the Website and/or the Content. By entering into this Agreement, you hereby
            agree that you will indemnify Ocean Blue, its directors, its employees and/or any third party
            involved with (the creation and/or execution of) the Website, the Content and/or this Agreement
            against (any) third-party claim(s), including but not limited to claims which arise from you
            entering into and executing this Agreement and/or a breach of any or all rights and/or warranties
            as described in this Agreement.{" "}
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="LINKED SITES " cssHeading={heading} />
          <p>
            The Website provides links to external internet sites, such as social media internet sites. Ocean
            Blue is not liable for the use or content of external sites that link to or from the Website.
            Ocean Blue’s privacy policy does not apply to the collection and processing of your personal data
            on or via those external sites - said privacy policy is only applicable to the information that is
            directly provided by you to Ocean Blue on and/or via the Website.{" "}
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="INTELLECTUAL PROPERTY RIGHTS " cssHeading={heading} />
          <p>
            Unless otherwise indicated, Ocean Blue is the exclusive owner all rights related to the Website
            and the Content, including copyrights and other intellectual property rights. Nothing in (the
            execution of) this Agreement shall be construed as granting any rights under any patent, copyright
            and/or other intellectual property right of Ocean Blue.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="INVALIDITY" cssHeading={heading} />
          <p>
            If terms in this Agreement are or become partially invalid, you and Ocean Blue will continue to be
            bound to the remaining terms. The invalid terms shall be considered as being replaced by terms
            that are valid and achieve so far as possible the intended effect of the invalid terms, taking
            into account the content and purpose of this Agreement.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="FINAL PROVISIONS " cssHeading={heading} />
          <p>
            Notwithstanding the provisions in this Agreement, you hereby waive your rights to annul and/or
            dissolve this Agreement, or cause it to be annulled or dissolved, on any grounds whatsoever,
            including, but not limited to, pursuant to section 6:265 to section 6:272, and section 6:228 of
            the Dutch Civil Code (Burgerlijk Wetboek) that relate to the annulment or dissolving of this
            Agreement on account of an error or to apply to a court of law to annul or dissolve this
            Agreement. Furthermore, you waive your right to demand this Agreement to be amended on any grounds
            whatsoever including, but not limited to, pursuant to section 6:230(2) or section 6:258 of the
            Dutch Civil Code. This Agreement, the execution thereof, and any non-contractual obligations
            arising out of or in connection with this Agreement are exclusively governed by and shall be
            construed in accordance with the laws of the Netherlands. Any disputes arising out of or in
            connection with this Agreement, including regarding the existence or validity of this Agreement,
            the execution thereof, and any non-contractual obligations arising out of or in connection with
            this Agreement, are subject to the exclusive jurisdiction of the competent court in Amsterdam, the
            Netherlands.
          </p>
        </StyledContentBlock>
      </StyledContainer>
    </MainContainer>
  );
};

export default ImpressumContent;
