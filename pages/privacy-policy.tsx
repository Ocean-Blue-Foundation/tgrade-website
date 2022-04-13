import type { NextPage } from "next";
import PrivacyContent from "../sections/PrivacyContent";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout alternateHeader>
      <PrivacyContent />
    </MainLayout>
  );
};

export default Home;
