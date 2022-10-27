import type { NextPage } from "next";
import FullBackgroundImage from "../sections/FullBackgroundImage";
import Partner from "../sections/Partner";
import ReusableStyles from "../theme/ReusableStyles";
import BtnLink from "../components/BtnLink";
import cn from "../utils/cn";
import MainLayout from "../layouts/MainLayout";
import useScrollSpy from "react-use-scrollspy";
import { useRef } from "react";
import { GlassWrapper } from "../components/GlassWrapper/style";

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
          image="2.jpg"
          headingText=""
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          verticalAlign="center"
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Your Real World Assets</h1>
            <br />
            <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>protected by Trusted Circles</h1>
            <p css={cn(ReusableStyles.paragraphBlack, ReusableStyles.maxWidth1, ReusableStyles.paragraphBig)}>
              Real-world problems, solved by innovative businesses,{" "}
              <span css={ReusableStyles.paragraphBlack}>powered by the Tgrade blockchain</span>.
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
      </section>
      <section id="tgrade" ref={sectionRefs[1]}>
        <FullBackgroundImage
          image="1.jpg"
          headingText=""
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          verticalAlign="center"
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>A public, decentralised blockchain</h1>
            <p css={cn(ReusableStyles.paragraphBlack, ReusableStyles.maxWidth2)}>
              The case for a public, decentralised, secure blockchain is strong. Public blockchains are
              resilient by design as they are run by a group of independent node operators who are aligned
              through a framework of incentives and punishments.
              <br />
              <br />
              Tgrade is a chain that has been designed to support high value businesses in a very secure and
              decentralised model that is robust and safe.
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
      </section>
      <section id="trustedcircles" ref={sectionRefs[2]}>
        <FullBackgroundImage
          image="3.jpg"
          headingText=""
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          verticalAlign="center"
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Trusted Circles unleashed</h1>
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
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
      </section>
      <section id="articles" ref={sectionRefs[3]}>
        <FullBackgroundImage
          image="5.jpg"
          headingText=""
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          maxWidth={90}
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Articles</h1>
            <p css={ReusableStyles.paragraphBlack}>
              <br />
              <a
                style={{ color: "white" }}
                href="https://medium.com/tgradefinance/securitization-of-proof-of-stake-the-path-to-regulated-validators-9574f52c82e8"
              >
                <b>Securitization of Proof of Stake, the path to regulated validators?</b>
              </a>
              <br />

              <a
                style={{ color: "white" }}
                href="https://medium.com/tgradefinance/tgrade-trusted-circles-and-logistics-9f1a75f80fa9"
              >
                <b>Tgrade, Trusted Circles and Logistics</b>
              </a>
              <br />

              <a
                style={{ color: "white" }}
                href="https://medium.com/tgradefinance/tgrade-the-case-for-a-wholesale-cbdc-platform-5847cb683f61"
              >
                <b>Tgrade, the case for a wholesale CBDC platform</b>
              </a>
              <br />

              <a
                style={{ color: "white" }}
                href="https://medium.com/tgradefinance/tgrade-the-case-for-a-wholesale-cbdc-platform-5847cb683f61"
              >
                <b>Tgrade: The blockchain made for business</b>
              </a>
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
        <section id="about" ref={sectionRefs[4]}></section>
        <FullBackgroundImage
          image="7.jpg"
          textColor="var(--color-black)"
          headingText=""
          headingLevel={2}
          align="center"
          maxWidth={60}
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>About Tgrade</h1>
            <p css={ReusableStyles.paragraphBlack}>
              Stichting Ocean Blue, incorporated in Amsterdam, Netherlands, is the legal entity behind Tgrade.
              There is a written constitution for Tgrade which sets out the rules, who has authority, and how
              it is derived.
              <br />
              <br />A lot of work was done at the consensus layer to address the issues we found in Proof of
              Stake, which we implemented as Proof of Engagement. We opted not to include delegators, thus
              making validators principals and not agents. The layers make a very robust chain and make us
              confident that the value of the assets issued on Tgrade can far exceed the market
              capitalisation.
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
      </section>
      <section id="getstarted" ref={sectionRefs[5]}>
        <FullBackgroundImage
          image="6.jpg"
          textColor="var(--color-black)"
          headingText=""
          headingLevel={2}
          align="center"
          maxWidth={60}
        >
          <GlassWrapper>
            <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Get Started</h1>
            <BtnLink
              text="Try the Tgrade App"
              link="https://dapp.tgrade.finance/"
              color="var(--color-white)"
              borderColor="var(--color-white)"
              backgroundColor="var(--color-black)"
            />{" "}
            <div style={{ height: "25px" }} />
            <p css={ReusableStyles.paragraphBlack}>
              Depending on what your goal is there are various paths to Tgrade. You can try the App by
              clicking the button above, start creating trusted circles and your own digital assets.
              <br />
              <br />
              If you want to start developing Cosmwasm smart contracts for Tgrade or just browse the API
              please visit our{" "}
              <a href="https://github.com/confio/tgrade-networks/wiki/Tgrade-home">Wiki &#8594;</a>{" "}
            </p>
          </GlassWrapper>
        </FullBackgroundImage>
      </section>
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
