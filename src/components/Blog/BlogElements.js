import styled from "styled-components";

export const BlogContainer = styled.section`
    height: 700px;
    width: 100%;
    background: #0e0b0d;
    text-align: center;
    position: relative;
    @media screen and (max-width: 768px) {
        height: auto;
    }
`;
export const BlogItem = styled.div`
    width: 100%;
    height: 400px;
`;
export const BlogImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: fill;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
    }
`;
export const BlogTitle = styled.h3`
    color: #eefbfb;
    font-size: 16px;
    text-align: left;
    margin-top: 15px;
`;
export const BlogWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    width: 70%;
    margin: 80px auto 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
