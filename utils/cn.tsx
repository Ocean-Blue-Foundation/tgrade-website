import { CSSProp } from "styled-components";

function cn(...classNames: Array<string | CSSProp | undefined | false>) {
  return classNames
    .reduce(
      (classNames: Array<string | CSSProp | undefined | false>, className) => classNames.concat(className),
      [],
    )
    .join(" ");
}

export default cn;
