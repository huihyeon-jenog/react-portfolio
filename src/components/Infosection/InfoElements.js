import styled from "styled-components";

export const InfoContainer = styled.section`
    height: 800px;
    background: #0e0b0d;
    position: relative;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: arround-space;
    padding-top: 100px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: center;
    gap: 1em;
    position: relative;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(auto, 400px);
    }
`;

export const TopLine = styled.p`
    color: #b73225;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const HeadLine = styled.h2`
    font-size: 1.8rem;
    line-height: 1.2;
    margin-bottom: 24px;
    top: -20px;
    position: relative;
    max-width: 500px;
    color: #eefbfb;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 24px;
    color: #eefbfb;
    letter-spacing: 0.5px;
`;

export const Grade = styled.div`
    font-size: 18px;
    color: #eefbfb;
`;
export const Contact = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #eefbfb;
`;

export const Column1 = styled.div`
    display: grid;
    margin-left: 3em;

    @media screen and (max-width: 768px) {
        margin-right: 3em;
    }
`;

export const Column2 = styled.div`
    margin: 0;
    }
`;

export const Img = styled.img`
    height: 400px;
    width: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        object-fit: cover;
        width: 50%;
        height: 300px;
        margin-left: 3em;
    }
`;
export const SkillWrapper = styled.div`
    position: relative;
    display: flex;
    width: 1000px;
    max-width: 1100px;
    margin: 50px auto 0;
    left: -25px;

    @media screen and (max-width: 1000px) {
        width: 90%;
    }
    @media screen and (max-width: 768px) {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        margin-top: -5em;
        margin-left: 2em;
        padding-bottom: 3em;
        left: 0px;
    }
`;
export const Skill = styled.div`
    width: 100px;
    height: 100px;
    background: #203647;
    border-radius: 50%;
    position: relative;
    margin: 2em 1.5em;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        margin: 1em 0;
    }
`;

export const SkillIcon = styled.div`
    color: #eefbfb;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 3.5em;
`;
