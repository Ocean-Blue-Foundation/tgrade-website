import { StyledMain } from "./style";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  alternateHeader?: boolean;
  activeHeaderLink?: number;
}

const MainLayout = ({ children, alternateHeader = false, activeHeaderLink }: MainLayoutProps) => {
  return (
    <StyledMain>
      <Header alternateHeader={alternateHeader} activeHeaderLink={activeHeaderLink} />
      {children}
      <Footer />
    </StyledMain>
  );
};

export default MainLayout;
