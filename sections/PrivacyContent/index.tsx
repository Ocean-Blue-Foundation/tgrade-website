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

const PrivacyContent = () => {
  return (
    <MainContainer>
      <StyledContainer>
        <StyledBreadcrumb>
          <Link href="/" passHref={true}>
            <StyledBreadcrumbLink>Home</StyledBreadcrumbLink>
          </Link>
          <span>&nbsp;» Privacy Policy</span>
        </StyledBreadcrumb>
        <StyledContentBlock>
          <Heading level={1} text="Privacy Policy" cssHeading={mainHeading} />
          <Heading level={2} text="OCEAN BLUE’S PRIVACY STATEMENT " cssHeading={heading} />
          <p>
            By using the website https://tgrade.finance/ and subsequent webpages related thereto (the
            “Website”), you hereby agree (i) to become a party to this agreement (the/this “Privacy
            Statement”) and (ii) that your counterparty is STICHTING OCEAN BLUE, a foundation incorporated
            under the laws of the Netherlands (stichting), having its statutory seat in (1018 RG) Amsterdam,
            the Netherlands and registered offices at the address of Kraijenhoffstraat 137 A, Amsterdam, the
            Netherlands, registered with the Dutch Chamber of Commerce (Kamer van Koophandel) under file
            number 80743218 (“Ocean Blue”). We at Ocean Blue take your privacy and the security of your
            information seriously. We are committed to being responsible custodians of the information you
            provide to us and the information we use in the course of operating our business. Personal
            information (persoonsgegevens) entails all information about a specific person, this also goes for
            information that can be used to (indirectly) identify you or that we can link to you. By using
            this Privacy Statement, we at Ocean Blue wish to comply and act in accordance with our obligation
            to inform the persons from who we use data, as is required under the General Data Protection
            Regulation (Algemene Verordening Gegevensverwerking or the “GDPR”). 1 We will only use your
            personal information (if any) as set out in this section of the Privacy Statement.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading
            level={2}
            text="THE TYPES OF PERSONAL DATA WE COLLECT AND THE USAGE THEREOF "
            cssHeading={heading}
          />
          <p>
            In order to respond to your questions, requests and/or instructions, Ocean Blue may collect the
            following data from you, which is sent by you to us via e-mail: your first and last name; your
            e-mail address; and the content of your (online) communication. By submitting your personal data
            you agree to the transfer, storing and processing thereof. We will take all the necessary steps to
            ensure that your data is treated securely and in accordance with this Privacy Statement. Ocean
            Blue will process your above-mentioned personal data exclusively on the (legal) basis listed
            below, as such in accordance with clause 6 of the GDPR: given consent to the processing; for
            compliance with a legal obligation to which Ocean Blue may be or is subject(ed); and for the
            purposes of the legitimate interests pursued by Ocean Blue. Ocean Blue will not share your
            personal data with any third party except when there is a legal obligation to do so. To minimise
            the risk of obliged sharing of data, Ocean Blue only stores the absolute minimum of data that is
            required and can be linked to Ocean Blue's users.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="STORAGE OF YOUR PERSONAL DATA" cssHeading={heading} />
          <p>
            The personal data that we collect from you will be transferred to and stored at a secure server
            administered by Ocean Blue or a service provider appointed by Ocean Blue. We will take all the
            necessary steps to ensure that your data is treated securely and in accordance with this Privacy
            Statement. Unfortunately, the transmission of information via the internet is not completely
            secure. Although we will do our best to protect your personal data, we cannot guarantee the
            security of the connection on your end of the connection and/or your data transmitted to and
            through our Website. You are responsible for selecting a trusted and secure network (service)
            provider. Therefore, any transmission is at your own risk. Once we have received your personal
            information, we will use strict procedures and security features to try to prevent any
            unauthorized access.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="HOW LONG DO WE KEEP YOUR PERSONAL DATA " cssHeading={heading} />
          <p>
            We will keep your personal data no longer than is necessary in accordance with the (legal) basis
            and purposes stated above and/or to meet legal and regulatory requirements.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="YOUR RIGHTS " cssHeading={heading} />
          <p>
            You have the right under the data protection laws to access and review the information we hold
            about you, subject to certain conditions. If you wish to make an application to access this
            information, please contact us. You also have the right to amend or update the information which
            we hold about you. To do so, or if you wish us to stop using your personal data, you can also
            contact us. Specific circumstances may arise because of which Ocean Blue cannot (fully) execute
            your request as mentioned above. Such circumstances may include, amongst other things, compliance
            with a legal obligation to which Ocean Blue may be or is subject(ed). If you are of the opinion
            that we are not treating your personal information with an adequate level of precision and/or
            confidentiality, you also have the right to file a complaint with the Dutch Data Protection
            Authority (Autoriteit Persoonsgegevens).
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="AMENDMENTS TO THIS PRIVACY STATEMENT " cssHeading={heading} />
          <p>
            Ocean Blue has the right to change the contents of this Privacy Statement at any time without any
            prior notice. Amendments to this Privacy Statement are published on the Website. Therefore, we
            advise you to consult the Website on a regular basis.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="INVALIDITY" cssHeading={heading} />
          <p>
            If terms in this Privacy Statement are or become partially invalid, you and Ocean Blue will
            continue to be bound to the remaining terms. The invalid terms shall be considered as being
            replaced by terms that are valid and achieve so far as possible the intended effect of the invalid
            terms, taking into account the content and purpose of this Privacy Statement.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="FINAL PROVISIONS " cssHeading={heading} />
          <p>
            Notwithstanding the provisions in this Privacy Statement, you hereby waive your rights to annul
            and/or dissolve this Privacy Statement, or cause it to be annulled or dissolved, on any grounds
            whatsoever, including, but not limited to, pursuant to section 6:265 to section 6:272, and section
            6:228 of the Dutch Civil Code (Burgerlijk Wetboek) that relate to the annulment or dissolving of
            this Privacy Statement on account of an error or to apply to a court of law to annul or dissolve
            this Privacy Statement. Furthermore, you waive your right to demand this Privacy Statement to be
            amended on any grounds whatsoever including, but not limited to, pursuant to section 6:230(2) or
            section 6:258 of the Dutch Civil Code. This Privacy Statement, the execution thereof, and any
            non-contractual obligations arising out of or in connection with this Privacy Statement are
            exclusively governed by and shall be construed in accordance with the laws of the Netherlands. Any
            disputes arising out of or in connection with this Privacy Statement, including regarding the
            existence or validity of this Privacy Statement, the execution thereof, and any non-contractual
            obligations arising out of or in connection with this Privacy Statement, are subject to the
            exclusive jurisdiction of the competent court in Amsterdam, the Netherlands.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <p>
            1 Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the
            protection of natural persons with regard to the processing of personal data and on the free
            movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation), to
            be found at the following website: https://eur-lex.europa.eu/legal
          </p>
        </StyledContentBlock>
      </StyledContainer>
    </MainContainer>
  );
};

export default PrivacyContent;
