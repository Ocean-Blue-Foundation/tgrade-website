import styled from "styled-components";

export const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 2rem;
  right: 2rem;
  position: fixed;
  width: 38rem;
  max-width: calc(100vw - 48px);
  padding: 1.6rem 2.4rem;
  word-wrap: break-word;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
`;

export const StyledAlertTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAlertTopText = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const StyledAlertBottomText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8rem;
  font-weight: 400;
`;

export const StyledAlertTopClose = styled.span`
  cursor: pointer;
`;
