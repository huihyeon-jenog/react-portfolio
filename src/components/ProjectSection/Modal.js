import React from "react";
import {
  ModalContainer,
  ModalWrapper,
  CloseButton,
  ModalImg,
  ModalTitle,
  ModalSkill,
  ModalDescript,
  MoreBtn,
} from "./ProjdectsElements";
const Modal = ({ handleClose, data }) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <CloseButton onClick={handleClose} />
        <ModalImg src={data[0].projectImg} alt={data[0].projectTitle} />
        <ModalTitle>{data[0].projectTitle}</ModalTitle>
        <ModalSkill>{data[0].skills}</ModalSkill>
        <hr />
        <ModalDescript>{data[0].descript}</ModalDescript>
        <MoreBtn>
          <a
            href={data[0].url}
            style={{ textDecoration: "none", color: "white" }}
            target="blank"
          >
            VIEW SITE
          </a>
        </MoreBtn>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
