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
          <p>
            We are glad that you have chosen to visit our website. We take our data protection
            responsibilities very seriously.
          </p>
          <p>
            Confio GmbH operates{" "}
            <StyledRegularLink href="http://tgrade.finance">http://tgrade.finance</StyledRegularLink>&nbsp;
            (the “Site”). This page informs you of our policies regarding the collection, use and disclosure
            of Personal Information we receive from users of the Site. We use your Personal Information only
            for providing and improving the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="1. Information Collection And Use" cssHeading={heading} />
          <p>
            We may collect the personal data that you provide to us to subscribe to our email newsletter. This
            data may include:
          </p>
          <ol>
            <li>your email address;</li>
            <li>your first and last name;</li>
            <li>the date and time of registration;</li>
            <li>your IP address. </li>
          </ol>
          <p>
            This data is collected and processed to send you our newsletter. The legal basis for this
            processing is your consent as provided in the opt-in part of our newsletter sign-up process. Your
            email address will be stored as long as we have the consent to send you a newsletter.
          </p>
          <p>
            If you have subscribed to our newsletter each time you receive a newsletter from us, we may
            collect and process your personal data. This data may include:
          </p>
          <ol>
            <li>the date and time you opened the email;</li>
            <li>what (if any) links or URLs you accessed from our newsletter;</li>
            <li>the location it was accessed from;</li>
            <li>whether you signed up with Linkedin;</li>
            <li>the company you are working for;</li>
            <li>your job title</li>
          </ol>
          <p>
            We collect and process this data to improve our products and services. The legal basis for this
            processing is your consent as provided in the opt-in confirmation part of our newsletter sign-up
            process and is our legitimate business interests, monitoring and improving our products and
            services.
          </p>
          <p>
            We may process any of your personal data where it is necessary to establish, exercise or defend
            legal claims. The legal basis for this processing is our legitimate interests, namely the
            protection and assertion of our legal rights, your legal rights, and the legal rights of others.
          </p>
          <p>
            Further, we may process your personal data where such processing is necessary in order for us to
            comply with a legal obligation to which we are subject. The legal basis for this processing is to
            improve products and services including product marketing.
          </p>
          <p>
            You may refuse to provide us your personal data, but this may limit what we could provide you or
            how we can interact with you.
          </p>
          <p>
            In any case, we never give, rent, or sell any personal information to third parties as we value
            your privacy.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="2. Use Of 3rd Party Application" cssHeading={heading} />
          <p>
            On the Site, we store the information and use Hubspot, LinkedIn, and Google as a data processor.
            we may link to our social media profiles. Those services might collect Personal Data. Please refer
            to their privacy policies for more information.
          </p>
          <ul>
            <li>
              Twitter:{" "}
              <StyledRegularLink href="https://twitter.com/de/privacy">
                https://twitter.com/de/privacy
              </StyledRegularLink>
            </li>
            <li>
              Linkedin{" "}
              <StyledRegularLink href="https://www.linkedin.com/legal/privacy-policy">
                https://www.linkedin.com/legal/privacy-policy
              </StyledRegularLink>
            </li>
            <li>
              Medium{" "}
              <StyledRegularLink href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9">
                https://policy.medium.com/medium-privacy-policy-f03bf92035c9
              </StyledRegularLink>
            </li>
            <li>
              Discord{" "}
              <StyledRegularLink href="https://twitter.com/de/privacy">
                https://discord.com/new/privacy
              </StyledRegularLink>
            </li>
          </ul>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="3. Cookies" cssHeading={heading} />
          <p>
            Cookies are files with a small amount of data, which may include an anonymous unique identifier.
            You can find more details about cookies here.{" "}
            <StyledRegularLink href="https://www.allaboutcookies.org/">
              https://www.allaboutcookies.org/{" "}
            </StyledRegularLink>
          </p>
          <p>
            We have Hubspot, LinkedIn, and Google software run on this website, which leaves behind a cookie
            on your browser that helps Hubspot, LinkedIn, and Google identify you for us on future visits. We
            use cookies to collect data to better understand our visitors and improve our services. You may
            choose the use of cookies by clicking accept or decline when you first visit the Site. If you
            decline cookies, you may still use our website, but your ability to use our website might be
            limited. You can control the use of cookies at the individual browser level, already installed
            cookies can be removed also if you previously accepted cookies and changed your mind later.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="4. Your Right As A Data Subject" cssHeading={heading} />
          <p>
            You have certain rights under applicable legislation, and in particular under Regulation EU
            2016/679 (General Data Protection Regulation or ‘GDPR’). We explain these below. You can find out
            more about the GDPR and your rights by accessing the{" "}
            <StyledRegularLink href="https://ec.europa.eu/info/law/law-topic/data-protection_en">
              European Commission’s website
            </StyledRegularLink>
            .
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="4-1. Retention period" cssHeading={heading} />
          <p>
            We will retain your information for as long as it is necessary. For example, we keep your
            information that you shared with us when you subscribed to our newsletters until you unsubscribe
            it. If you share your information for inquiries and contact us, we will keep your personal data
            until we answer your questions and further 2 more years, at which point we will delete it. If you
            order our products and services, we will keep that information for a minimum period of six years
            following the end of the financial year in which you put your order.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="4-2. Right to request access" cssHeading={heading} />
          <p>
            Please note that you have the right to access your personal data. In addition, you have the right
            to ask for receiving your personal data that you provided to Confio GmbH and which Confio GmbH
            processes by automated means.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="4-3. Right to rectification" cssHeading={heading} />
          <p>
            Please note that you may request that your personal data be rectified or deleted. You are also
            entitled to request restriction of the processing of your personal data.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="4-5. Raising a complaint" cssHeading={heading} />
          <p>You may also raise a complaint about how we have handled your personal data.</p>
          <p>
            In case of any request or complaint, please contact us by sending an email to the below address.
            You have the right to lodge a complaint with a competent data protection authority.
          </p>
          <ul>
            <li>Confio GmbH</li>
            <li>7th Floor. Potsdamer Platz 1</li>
            <li>10785 Berlin</li>
            <li>
              Email: <StyledRegularLink href="hello@confio.gmbh">hello@confio.gmbh</StyledRegularLink>
            </li>
          </ul>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="5. Security" cssHeading={heading} />
          <p>
            The security of your Personal Information is important to us, but remember that no method of
            transmission over the Internet, or method of electronic storage, is 100% secure. While we strive
            to use commercially acceptable means to protect your Personal Information, we cannot guarantee its
            absolute security. Meantime, please be advised that we are taking necessary caution for
            cybersecurity and doing our best to put the appropriate security measurements in place.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="6. Changes To This Privacy Policy" cssHeading={heading} />
          <p>
            This Privacy Policy is effective as of 12th December 2020 and will remain in effect except with
            respect to any changes in its provisions in the future, which will be in effect immediately after
            being posted on this page. We reserve the right to update or change our Privacy Policy at any time
            and you should check this Privacy Policy periodically. Your continued use of the Service after we
            post any modifications to the Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the modified Privacy Policy. If we
            make any material changes to this Privacy Policy, we will place a prominent notice on our website
            prior to such changes taking effect.
          </p>
        </StyledContentBlock>
        <StyledContentBlock>
          <Heading level={2} text="7. Contact Us" cssHeading={heading} />
          <p>
            This website is owned and operated by Confio GmbH. We are registered in Germany under registration
            number DE339802279 If you have any questions about this Privacy Policy, please contact us via:
          </p>
          <p>
            Confio Gmb <span>7th Floor. Potsdamer Platz 1 10785 Berlin Germany</span>
          </p>
          <p>
            Email: <StyledRegularLink href="hello@confio.gmbh">hello@confio.gmbh</StyledRegularLink>
          </p>
        </StyledContentBlock>
      </StyledContainer>
    </MainContainer>
  );
};

export default PrivacyContent;
