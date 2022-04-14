import type { NextPage } from "next";
import FullBackgroundImage from "../sections/FullBackgroundImage";
import ContentWithImage from "../sections/ContentWithImage";
import SubscribeSection from "../sections/SubscribeSection";
import Partner from "../sections/Partner";
import VideoSection from "../sections/VideoSection";
import VideoSlider from "../sections/VideoSlider";
import Features from "../sections/Features";
import ReusableStyles from "../theme/ReusableStyles";
import ContentWithImageContainer from "../containers/ContentWithImageContainer";
import BtnLink from "../components/BtnLink";
import MainLayout from "../layouts/MainLayout";
import useScrollSpy from "react-use-scrollspy";
import { useRef } from "react";

const Home: NextPage = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeHeaderLink = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <MainLayout activeHeaderLink={activeHeaderLink}>
      <section id="welcome" ref={sectionRefs[0]}>
        <FullBackgroundImage
          image="main-bg.jpg"
          headingText="The Big Bang of Regulated Blockchain"
          subHeadingText="Welcome To Tgrade"
          textColor="var(--color-white)"
          responsive={true}
        >
          <p css={ReusableStyles.paragraphWhite}>
            Our vision is for self-sovereign groups, bound by their local jurisdiction and regulations,
            trading P2P programmable financial instruments.
          </p>
        </FullBackgroundImage>
      </section>
      <section id="problem" ref={sectionRefs[1]}>
        <ContentWithImageContainer>
          <ContentWithImage
            image="/bitcoin.jpg"
            headingText="DeFi has grown explosively since 2020, roughly $200bn in total value locked."
            subHeadingText="Problem"
            headingLevel={3}
          >
            <p>
              People involved in the blockchain and DeFi world have a libertarian mind-set who seek to avoid
              regulations.
            </p>
          </ContentWithImage>
          <ContentWithImage
            image="/markets.jpg"
            headingText="The traditional markets volumes are thousands of trillions."
            headingLevel={3}
            imageLeft={true}
          >
            <p>
              Financial institutions cannot enter the DeFi world as they need to know who they are trading
              with and the origin of funds. A public, permissionless blockchain can be problematic for
              financial institutions unless a whitelisting system is in place.
            </p>
          </ContentWithImage>
          <ContentWithImage
            image="/balance.jpg"
            headingText="How do we balance decentralization, innovation and a framework to support regulated business?"
            headingLevel={3}
          />
        </ContentWithImageContainer>
      </section>
      <section id="solution" ref={sectionRefs[2]}>
        <FullBackgroundImage
          image="solution-bg.jpg"
          headingText="The answer is Tgrade!"
          subHeadingText="Solution"
          textColor="var(--color-white)"
          headingLevel={2}
        >
          <p css={ReusableStyles.paragraphWhite}>
            We build a self-sovereign framework which ensures the principal of decentralisation. Institutions
            within a given jurisdiction can each a self-sovereign group and ensure they comply with their
            local regulations. On-chain financial instruments controlled by self-sovereign groups, and
            on-chain governance complying with corresponding off-chain regulations is the key solution.
          </p>
          <BtnLink
            text="Go to the Tgrade App"
            link="https://try.tgrade.finance/"
            color="var(--color-black)"
            borderColor="var(--color-white)"
            backgroundColor="var(--color-white)"
          />
        </FullBackgroundImage>
      </section>
      <section id="how-it-works" ref={sectionRefs[3]}>
        <VideoSection />
      </section>
      <section id="features" ref={sectionRefs[4]}>
        <Features />
        <Partner headingText="Investor & Strategic partner" />
      </section>
      <section id="knowledge" ref={sectionRefs[5]}>
        <VideoSlider />
      </section>
      <section id="game-of-engagement" ref={sectionRefs[6]}>
        <FullBackgroundImage
          image="engagement-bg.jpg"
          headingText="Game of Engagement 2022"
          textColor="var(--color-white)"
          headingLevel={2}
        >
          <p css={ReusableStyles.paragraphWhite}>
            Following the launch of Tgrade there will be a Game of Engagement which will be run over a 4 week
            period. There will be double engagement points on offer, a series of challenges, some will be
            announced in advance to help people with planning and others will be flash challenges on the same
            time on each Monday morning.
          </p>
          <p css={ReusableStyles.paragraphWhite}>Dates and challenges will be announced in Q2 2022.</p>
        </FullBackgroundImage>
      </section>
      <SubscribeSection textColor="var(--color-white)" headingText="Sign up for Tgrade Mailing List" />
    </MainLayout>
  );
};

export default Home;
