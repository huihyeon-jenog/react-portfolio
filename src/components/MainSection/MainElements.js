import styled from "styled-components";
import { Link } from "react-scroll";
import { MdExpandMore, MdArrowDownward } from "react-icons/md";

export const MainContainer = styled.main`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
`;

export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%:
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
`;

export const MainH1 = styled.h1`
    color: #eefbfb;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const MainP = styled.p`
    margin-top: 24px;
    color: #eefbfb;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const MainArrowWrapper = styled.div`
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: -160px;

    @media screen and (max-width: 768px) {
        margin-top: 250px;
    }
`;

export const ArrowExpand = styled(MdExpandMore)`
    margin-left: 8px;
    font-size: 70px;
    color: #b73225;
`;

export const ArrowDown = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 70px;
    color: #b73225;
`;

export const Arrow = styled(Link)`
    cursor: pointer;
`;
