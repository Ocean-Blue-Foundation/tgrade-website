import type { NextPage } from "next";
import FullBackgroundImage from "../sections/FullBackgroundImage";
import FullBackgroundVideo from "../sections/FullBackgroundVideo";
import Partner from "../sections/Partner";
import ReusableStyles from "../theme/ReusableStyles";
import BtnLink from "../components/BtnLink";
import cn from "../utils/cn";
import MainLayout from "../layouts/MainLayout";
import useScrollSpy from "react-use-scrollspy";
import { useRef } from "react";

const Home: NextPage = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const activeHeaderLink = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <MainLayout activeHeaderLink={activeHeaderLink}>
      <section id="welcome" ref={sectionRefs[0]}>
        <FullBackgroundImage
          image="tg_dark_bgpattern.png"
          headingText="Your Real World Assets protected by Trusted Circles"
          textColor="var(--color-white)"
          headingLevel={2}
          align="center"
          verticalAlign="center"
        >
          <p css={cn(ReusableStyles.paragraphWhite, ReusableStyles.maxWidth1, ReusableStyles.paragraphBig)}>
            Real-world problems, solved by innovative businesses,{" "}
            <span css={ReusableStyles.paragraphWhite}>powered by the Tgrade blockchain</span>.
          </p>
          <BtnLink
            text="Go to the Tgrade App"
            link="https://dapp.tgrade.finance/"
            color="var(--color-black)"
            borderColor="var(--color-white)"
            backgroundColor="var(--color-white)"
          />
        </FullBackgroundImage>
      </section>
      <section id="people" ref={sectionRefs[1]}>
        <FullBackgroundImage
          image="platform-bg.png"
          headingText="A public, decentralised blockchain"
          textColor="var(--color-black)"
          headingLevel={2}
          align="left"
          verticalAlign="center"
        >
          <p css={cn(ReusableStyles.paragraphBlack, ReusableStyles.maxWidth2)}>
            The case for a public, decentralised, secure blockchain is strong. Public blockchains are
            resilient by design as they are run by a group of independent node operators who are aligned
            through a framework of incentives and punishments.
            <br />
            <br />
            Tgrade is a chain that has been designed to support high value businesses in a very secure and
            decentralised model that is robust and safe.
          </p>
        </FullBackgroundImage>
      </section>
      <section id="people" ref={sectionRefs[1]}>
        <FullBackgroundImage
          image="platform-bg.png"
          headingText="Trusted Circles unleashed"
          textColor="var(--color-black)"
          headingLevel={2}
          align="left"
          verticalAlign="center"
        >
          <p css={cn(ReusableStyles.paragraphBlack, ReusableStyles.maxWidth2)}>
            The biggest problem for regulated businesses or businesses that need to know about the origin of
            funds or who they are dealing with is the pseudo-anonymous blockchain addresses.
            <br />
            <br />
            The solution was to build an on-chain governance system that allowed for the creation and
            maintenance of permissioned groups.
            <br />
            The permissioned groups are referred to in Tgrade as Trusted Circles.
            <br />
            <br />
            Care was taken to ensure that the mechanism is self-sovereign and that whoever sets up and
            maintains a Trusted Circle is free to decide the governance.
            <br />
            <br />
            The Trusted Circles have the tools to issue digital assets and permission them to the group or to
            link custom smart contracts to a Trusted Circle. Linking smart contracts and/or digital assets to
            Trusted Circles ensure only those addresses that belong to the Trusted Circle can swap or transfer
            assets that are tied to the Trusted Circle.
          </p>
        </FullBackgroundImage>
      </section>
      <section id="platform" ref={sectionRefs[2]}>
        <FullBackgroundImage
          image="platform-bg.png"
          headingText="Articles"
          textColor="var(--color-black)"
          headingLevel={2}
          align="left"
          maxWidth={90}
        >
          <p css={ReusableStyles.paragraphBlack}>
            <br />
            <a href="https://medium.com/tgradefinance/securitization-of-proof-of-stake-the-path-to-regulated-validators-9574f52c82e8">
              <b>Securitization of Proof of Stake, the path to regulated validators?</b>
            </a>
            <br />

            <a href="https://medium.com/tgradefinance/tgrade-trusted-circles-and-logistics-9f1a75f80fa9">
              <b>Tgrade, Trusted Circles and Logistics</b>
            </a>
            <br />

            <a href="https://medium.com/tgradefinance/tgrade-the-case-for-a-wholesale-cbdc-platform-5847cb683f61">
              <b>Tgrade, the case for a wholesale CBDC platform</b>
            </a>
            <br />

            <a href="https://medium.com/tgradefinance/tgrade-the-case-for-a-wholesale-cbdc-platform-5847cb683f61">
              <b>Tgrade: The blockchain made for business</b>
            </a>
          </p>
          <BtnLink
            text="Try Tgrade App"
            link="https://dapp.tgrade.finance/"
            color="var(--color-white)"
            borderColor="var(--color-black)"
            backgroundColor="var(--color-black)"
          />
        </FullBackgroundImage>
        <FullBackgroundImage
          image="safe-bg.png"
          headingText="About Tgrade"
          textColor="var(--color-black)"
          headingLevel={2}
          align="right"
          maxWidth={51}
        >
          <p css={ReusableStyles.paragraphBlack}>
            Stichting Ocean Blue, incorporated in Amsterdam, Netherlands, is the legal entity behind Tgrade.
            There is a written cvonstitution for Tgrade which sets out the rules, who has authority, and how
            it is derived.
            <br />
            <br />A lot of work was done at the consensus layer to address the issues wer found in Proof of
            Stake, which we implemented as Proof of Engagement. We opted not to include delegators, thus
            making validators principals and not agents. The layers make a very robust chain and make us
            confident that the value of the assets issued on Tgrade can far exceed the market capitalisation.
          </p>
        </FullBackgroundImage>
      </section>
      <section id="business" ref={sectionRefs[3]}></section>
      <section id="partner" ref={sectionRefs[4]}>
        <Partner headingText="Investor & Strategic partner" />
      </section>
      {/* <section id="game-of-engagement" ref={sectionRefs[5]}>
        <FullBackgroundImage
          image="engagement-bg.png"
          headingText="Play a Game of Tgrade Engagement 2022"
          textColor="var(--color-white)"
          headingLevel={2}
          align="center"
          maxWidth={88}
        >
          <p css={cn(ReusableStyles.paragraphWhite, ReusableStyles.maxWidth3)}>
            Following the launch of Tgrade there will be a Game of Engagement which will be run over a 4 week
            period. There will be double engagement points on offer, a series of challenges, some will be
            announced in advance to help people with planning and others will be flash challenges on the same
            time on each Monday morning.
          </p>
          <p css={cn(ReusableStyles.paragraphWhite, ReusableStyles.maxWidth3)}>
            Dates and challenges will be announced in Q4 2022.
          </p>
        </FullBackgroundImage>
      </section> */}
    </MainLayout>
  );
};

export default Home;
