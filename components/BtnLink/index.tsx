import { StyledLink } from "./style";
import Link from "next/link";
import { CSSObject, CSSProp } from "styled-components";

interface BtnLinkProps {
  link: string;
  text: string;
  color: string;
  borderColor: string;
  backgroundColor: string;
  fileName?: string;
  cssBtn?: CSSProp | CSSObject;
}

const BtnLink = ({
  link,
  text,
  color,
  cssBtn,
  borderColor,
  backgroundColor,
  fileName = "",
}: BtnLinkProps) => {
  return (
    <>
      {!fileName ? (
        <Link href={link} passHref={true}>
          <StyledLink css={cssBtn} color={color} borderColor={borderColor} backgroundColor={backgroundColor}>
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
          css={cssBtn}
        >
          {text}
        </StyledLink>
      )}
    </>
  );
};

export default BtnLink;
