import { StyledHeading } from "./style";
import { CSSProp, CSSObject } from "styled-components";

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  cssHeading?: CSSProp | CSSObject;
  textColor?: string;
}

const Heading: React.FunctionComponent<HeadingProps> = ({ text, level, cssHeading, textColor }) => {
  return (
    <StyledHeading
      textColor={textColor}
      as={`h${level}`}
      css={`
        ${cssHeading}
      `}
    >
      {text}
    </StyledHeading>
  );
};

export default Heading;
