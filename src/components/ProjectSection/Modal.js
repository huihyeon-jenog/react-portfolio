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
    MoreBtn2,
    BtnWrap,
} from "./ProjdectsElements";
const Modal = ({ handleClose, data }) => {
    return (
        <ModalContainer>
            <ModalWrapper>
                <CloseButton onClick={handleClose} />
                <ModalImg src={data[0].projectImg} alt={data[0].projectTitle} />
                <ModalTitle>
                    {data[0].projectTitle}{" "}
                    <span
                        style={{
                            color: "#203647",
                            marginLeft: "0.3em",
                            fontSize: "14px",
                        }}
                    >
                        참여율 : 100%
                    </span>
                </ModalTitle>
                <ModalSkill>{data[0].skills} </ModalSkill>

                <hr />
                <ModalDescript>{data[0].descript}</ModalDescript>
                <BtnWrap>
                    <MoreBtn>
                        <a
                            href={data[0].url}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                display: "block",
                                width: "100%",
                                height: "100%",
                                lineHeight: "30px",
                            }}
                            target="blank"
                        >
                            VIEW SITE
                        </a>
                    </MoreBtn>
                    <MoreBtn2>
                        <a
                            href={data[0].gitUrl}
                            style={{
                                textDecoration: "none",
                                color: "black",
                                display: "block",
                                width: "100%",
                                height: "100%",
                                lineHeight: "30px",
                            }}
                            target="blank"
                        >
                            Git SITE
                        </a>
                    </MoreBtn2>
                </BtnWrap>
            </ModalWrapper>
        </ModalContainer>
    );
};

export default Modal;
