import type { NextPage } from "next";
import ImpressumContent from "../sections/ImpressumContent";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout alternateHeader>
      <ImpressumContent />
    </MainLayout>
  );
};

export default Home;
