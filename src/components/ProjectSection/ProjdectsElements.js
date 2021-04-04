import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const ProjectConatiner = styled.div`
  background: #eefbfb;
  text-align: center;
  height: 1000px;
  @media screen and (max-width: 768px) {
    height: 1700px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
`;

export const ProjectH1 = styled.h2`
  padding-top: 50px;
  color: #b73225;
  margin-bottom: 2em;
`;

export const ProjectItem = styled.div`
  position: relative;
`;
export const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1.5em;
  column-gap: 1em;
  width: 90%;
  margin: 30px auto 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ProjectTitle = styled.h3`
  color: #12232e;
`;
export const ProjectSkill = styled.span`
  color: #007cc7;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 50%;
  background: white;
  height: 80%;
  position: relative;
  margin: 0 auto;
  top: 10%;
  z-index: 999;
  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  text-align: left;
`;

export const CloseButton = styled(FaTimes)`
  color: #007cc7;
  font-size: 30px;
  right: 0;
  bottom: 10px;
  position: absolute;
  margin: 10px;
  cursor: pointer;
`;
export const ModalImg = styled.img`
  position: relative;
  height: 65%;
  object-fit: contain;
  width: 100%;

  @media screen and (max-width: 1000px) {
    height: 60%;
  }
`;

export const ModalTitle = styled.h3`
  margin-left: 0.5em;
  font-size: 28px;
`;
export const ModalSkill = styled.p`
  margin-left: 1em;
  margin-bottom: 0.5em;
`;
export const ModalDescript = styled.p`
  margin: 0.5em 1em;
`;
export const MoreBtn = styled.button`
  background: #203647;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  bottom: 15px;
  position: absolute;
  margin-left: 1em;

  &:hover {
    background: #4da8da;
    transition: all 0.2s ease;
  }
`;
