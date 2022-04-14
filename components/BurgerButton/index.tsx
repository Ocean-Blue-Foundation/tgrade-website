import { StyledBurger, StyledLine } from "./style";
import MobileMenu from "../MobileMenu";

interface ButtonProps {
  mobileMenuContent: Array<{
    link: string;
    text: string;
  }>;
  setMobileMenuOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  activeHeaderLink?: number | null;
}

const BurgerButton: React.FunctionComponent<ButtonProps> = ({
  mobileMenuContent,
  isMobileMenuOpen,
  setMobileMenuOpen,
  activeHeaderLink = null,
}) => {
  return (
    <>
      <StyledBurger isMobileMenuOpen={isMobileMenuOpen} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
        <StyledLine isMobileMenuOpen={isMobileMenuOpen} />
      </StyledBurger>
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setMobileMenuOpen(false)}
          mobileMenuContent={mobileMenuContent}
          activeHeaderLink={activeHeaderLink}
        />
      )}
    </>
  );
};

export default BurgerButton;
