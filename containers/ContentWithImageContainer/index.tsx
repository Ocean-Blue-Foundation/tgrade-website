import { StyledContainer } from "./style";

interface ContentWithImageContainerProps {
  children: React.ReactNode;
}

const ContentWithImageContainer = ({ children }: ContentWithImageContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContentWithImageContainer;
