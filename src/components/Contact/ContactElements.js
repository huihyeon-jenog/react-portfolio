import styled from "styled-components";
import { MdVerticalAlignTop } from "react-icons/md";
import { Link } from "react-scroll";
export const ContactContainer = styled.div`
  height: AUTO;
  position: relative;
  color: #eefbfb;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const ContactWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #0e0b0d;
`;
export const ContactTitle = styled.h2`
  color: #eefbfb;
  font-size: 48px;
  padding-top: 50px;
  text-align: center;
`;
export const ContactFormWrapper = styled.div`
  width: 600px;
  height: 220px;
  margin: 40px auto 20px;
  position: relative;
`;
export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5em;
`;
export const FormInput = styled.input`
  width: 65%;
  margin: 0 auto;
  background: #203647;
  border: none;
  padding-left: 10px;
  height: 30px;
  color: white;
`;
export const FormTextArea = styled.textarea`
  width: 65%;
  margin: 0 auto;
  height: 100px;
  background: #203647;
  padding-left: 10px;
  border: none;
  color: white;
`;
export const FormSubmitBtn = styled.button`
  width: 90px;
  background: #203647;
  border: 2px solid white;
  color: white;
  height: 35px;
  right: 105px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  &:hover {
    background: #007cc7;
    transition: all 0.5s ease-in;
  }
`;

export const ContactSocialWrapper = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
  background: #203647;
  z-index: 100;
  text-align: center;
`;

export const LinkTop = styled(Link)``;
export const MoveTop = styled(MdVerticalAlignTop)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  height: 40px;
  position: absolute;
  top: -20px;
  background: #007cc7;
  cursor: pointer;

  &:hover {
    background: #4da8da;
    transition: 0.25s ease-in;
  }
`;
export const SocialIconWrap = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding-top: 1.5em;
`;
