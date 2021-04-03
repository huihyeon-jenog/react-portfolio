import React, { useEffect } from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactFormWrapper,
  ContactSocialWrapper,
  ContactTitle,
  ContactForm,
  FormInput,
  FormTextArea,
  FormSubmitBtn,
  MoveTop,
  SocialIconWrap,
  LinkTop,
} from "./ContactElements";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yzh8apc",
        "template_ti53z4e",
        e.target,
        "user_JD9jWFJn5zn2zynwEVCG6"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("메일을 보내주셔서 감사합니다.");

          e.target.reset();
        },
        (err) => {
          Swal.fire("메일 전송 실패");

          console.log(err.text);
        }
      );
  };
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <ContactFormWrapper>
          <ContactForm onSubmit={sendEmail}>
            <FormInput
              type="text"
              name="from_name"
              placeholder="Name"
            ></FormInput>
            <FormInput
              type="email"
              name="reply_to"
              placeholder="Enter Email"
            ></FormInput>
            <FormTextArea name="message" placeholder="Enter Msg"></FormTextArea>
            <FormSubmitBtn type="submit">SUBMIT</FormSubmitBtn>
          </ContactForm>
        </ContactFormWrapper>
      </ContactWrapper>
      <ContactSocialWrapper>
        <LinkTop to="top" smooth={true} duration={500}>
          <MoveTop></MoveTop>
        </LinkTop>
        <SocialIconWrap>
          <FaFacebook style={{ margin: "0 25px 0 25px" }} />
          <FaInstagramSquare />
        </SocialIconWrap>
        <p style={{ margin: "15px 0 0 25px" }}>COPYRIGHT &copy; 2021</p>
      </ContactSocialWrapper>
    </ContactContainer>
  );
};

export default Contact;
