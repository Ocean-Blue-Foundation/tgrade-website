import { StyledFooterLink } from "./style";
import Link from "next/link";

interface FooterLinkProps {
  text: string;
  link: string;
}

const FooterLink = ({ text, link }: FooterLinkProps) => {
  return (
    <Link href={link} passHref={true}>
      <StyledFooterLink>{text}</StyledFooterLink>
    </Link>
  );
};

export default FooterLink;
