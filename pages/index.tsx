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
        <FullBackgroundVideo
          video="hero-video-bg.mp4"
          headingText="Business solving real-world problems"
          textColor="var(--color-white)"
          maxWidth={100}
        >
          <p css={cn(ReusableStyles.paragraphWhite, ReusableStyles.maxWidth1, ReusableStyles.paragraphBig)}>
            Imagine real-world problems, solved by innovative businesses,{" "}
            <span css={ReusableStyles.boldWhite}>powered by the Tgrade blockchain</span>.
          </p>
          <BtnLink
            text="Go to the Tgrade App"
            link="https://try.tgrade.finance/"
            color="var(--color-black)"
            borderColor="var(--color-white)"
            backgroundColor="var(--color-white)"
          />
        </FullBackgroundVideo>
      </section>
      <section id="people" ref={sectionRefs[1]}>
        <FullBackgroundImage
          image="people-bg.jpg"
          headingText="To bring people together"
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          verticalAlign="start"
        >
          <p css={cn(ReusableStyles.paragraphBlack, ReusableStyles.maxWidth2)}>
            We want to drive the adoption of blockchain technology by making it usable and useful in the real
            world. We are solving real-world problems by{" "}
            <span css={ReusableStyles.emphasizedText}>bringing together people, businesses</span>, and{" "}
            <span css={ReusableStyles.emphasizedText}>blockchain</span>.
          </p>
        </FullBackgroundImage>
      </section>
      <section id="platform" ref={sectionRefs[2]}>
        <FullBackgroundImage
          image="platform-bg.jpg"
          headingText="A Revolutionary Platform"
          textColor="var(--color-black)"
          headingLevel={2}
          align="center"
          maxWidth={90}
        >
          <p css={ReusableStyles.paragraphBlack}>
            Tgrade is built using revolutionary blockchain technology, smart contracts, and new forms of
            decentralized autonomous organization. <span css={ReusableStyles.emphasizedText}>We solve</span>{" "}
            the basic problem in public chains of pseudo anonymous addresses and{" "}
            <span css={ReusableStyles.emphasizedText}>
              the issues of not knowing who you are trading with
            </span>{" "}
            through Trusted Circles, a self-sovereign governance mechanism to allow you to create your own
            groups with your own rules.
          </p>
          <BtnLink
            text="Try Tgrade App"
            link="https://try.tgrade.finance/"
            color="var(--color-white)"
            borderColor="var(--color-black)"
            backgroundColor="var(--color-black)"
          />
        </FullBackgroundImage>
        <FullBackgroundImage
          image="safe-bg.jpg"
          headingText="We give businesses a safe blockchain home"
          textColor="var(--color-black)"
          headingLevel={2}
          align="right"
          maxWidth={51}
        >
          <p css={ReusableStyles.paragraphBlack}>
            Tgrade is a home for businesses. By providing a central hub for commerce, and a neutral foundation
            for businesses to interact with one another and their customers,{" "}
            <span css={ReusableStyles.emphasizedText}>
              we are helping to build a robust ecosystem for businesses to thrive in the new era of blockchain
              technology.
            </span>
          </p>
        </FullBackgroundImage>
      </section>
      <section id="business" ref={sectionRefs[3]}>
        <FullBackgroundVideo
          video="business-video-bg.mp4"
          headingText="Revolutionize your business with blockchain!"
          textColor="var(--color-white)"
          headingLevel={2}
        >
          <BtnLink
            text="Try Tgrade App"
            link="https://try.tgrade.finance/"
            color="var(--color-black)"
            borderColor="var(--color-white)"
            backgroundColor="var(--color-white)"
          />
        </FullBackgroundVideo>
      </section>
      <section id="partner" ref={sectionRefs[4]}>
        <Partner headingText="Investor & Strategic partner" />
      </section>
      <section id="game-of-engagement" ref={sectionRefs[5]}>
        <FullBackgroundImage
          image="engagement-bg.jpg"
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
            Dates and challenges will be announced in Q2 2022.
          </p>
          {/* <BtnLink
            text="Send a Request"
            link="https://try.tgrade.finance/"
            color="var(--color-black)"
            borderColor="var(--color-white)"
            backgroundColor="var(--color-white)"
          /> */}
        </FullBackgroundImage>
      </section>
    </MainLayout>
  );
};

export default Home;
