import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0.5rem;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

export const EmailInput = styled.input`
  width: 100%;
  background: var(--color-light-black);
  border: none;
  color: var(--color-white);
  padding-left: 1.3rem;
  caret-color: var(--color-white);
  font-size: 1.3rem;
  line-height: 1.6rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-white);
    font-weight: 400;
    font-family: var(--ff-montserrat);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 4.4rem;
  border: 0.5px solid var(--color-white);
  box-sizing: border-box;
  border-radius: 0.8rem 3.6rem 3.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  margin: auto;

  @media ${device.tablet} {
    width: 100%;
    max-width: 33.8rem;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 8.8rem;
  height: 3.6rem;
  border-radius: 3.6rem;
  background: var(--color-white);
  font-family: var(--ff-montserrat);
  margin-right: 0.3rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: center;
  outline: none;
  border: none;
  color: #242730;
  cursor: pointer;
`;
