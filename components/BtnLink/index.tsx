import { StyledLink } from "./style";
import Link from "next/link";

interface BtnLinkProps {
  link: string;
  text: string;
  color: string;
  borderColor: string;
  backgroundColor: string;
  fileName?: string;
}

const BtnLink = ({ link, text, color, borderColor, backgroundColor, fileName = "" }: BtnLinkProps) => {
  return (
    <>
      {!fileName ? (
        <Link href={link} passHref={true}>
          <StyledLink color={color} borderColor={borderColor} backgroundColor={backgroundColor}>
            {text}
          </StyledLink>
        </Link>
      ) : (
        <StyledLink
          href={link}
          download={fileName}
          color={color}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        >
          {text}
        </StyledLink>
      )}
    </>
  );
};

export default BtnLink;
