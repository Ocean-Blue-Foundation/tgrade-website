import { StyledBurger, StyledLine } from "./style";
// import MobileMenu from "../MobileMenu";

interface ButtonProps {
  mobileMenuContent: Array<{
    link: string;
    text: string;
  }>;
  setMobileMenuOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
}

const BurgerButton: React.FunctionComponent<ButtonProps> = ({
  mobileMenuContent,
  isMobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <>
      <StyledBurger isMobileMenuOpen={isMobileMenuOpen} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
      </StyledBurger>
      {/* {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setMobileMenuOpen(false)}
          mobileMenuContent={mobileMenuContent}
        />
      )} */}
    </>
  );
};

export default BurgerButton;
