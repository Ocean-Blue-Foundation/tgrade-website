import type { NextPage } from "next";
import PressKitContent from "../sections/PressKitContent";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout alternateHeader>
      <PressKitContent />
    </MainLayout>
  );
};

export default Home;
