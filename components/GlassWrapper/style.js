import Styled from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSizeDesktop } from "../../theme/Functions";

export const GlassWrapper = Styled.div`
padding:25px;
margin:50px;
margin-top:100px;
text-align:left;
background: rgba(255, 255, 255, 0.3);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(255, 255, 255, 0.1);
${({ responsive }) =>
  responsive &&
  `
&::before {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4));
}

@media ${device.responsiveLaptop} {
  height: ${setSizeDesktop(883)};
}

@media ${device.bigLaptop} {
  height: 100vh;
}
`};

@media ${device.tablet} {
    height:100vh;
    width:100%;
    h1  {
        padding-bottom: 1rem;
        font-size: 0.4rem;
        line-height: 3.4rem;
    }
    p {
        padding-bottom: 1rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
      }
@media ${device.mobile} {
height:100vh;
width:100%;
h1  {
    padding-bottom: 1rem;
    font-size: 0.4rem;
    line-height: 3.4rem;
}
p {
    padding-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
}
  }



`;
