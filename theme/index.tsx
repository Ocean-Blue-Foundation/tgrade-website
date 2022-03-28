import { GlobalReset } from "./GlobalReset";
import { GlobalStyles } from "./GlobalStyles";

interface GlobalWrapperProps {
  children: React.ReactNode;
}

const GlobalWrapper: React.FunctionComponent<GlobalWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      {children}
    </>
  );
};

export default GlobalWrapper;
