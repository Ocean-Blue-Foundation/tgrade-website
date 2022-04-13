import { StyledContainer } from "./style";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default MainContainer;
