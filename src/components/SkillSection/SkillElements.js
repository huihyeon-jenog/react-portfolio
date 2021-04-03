import styled from 'styled-components'
export const SkillsContainer = styled.div`
    height: 600px;
    max-width: 1000px;
    margin: 0 auto;

`

export const SkillWrapper = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 1fr;
    row-gap: 1.5em;
    text-align: center;
    margin-top: 100px;
`

export const SkillH1 = styled.h1`
    font-size: 52px;
    color: #B73225;
    
`
export const Skills = styled.div`
    font-size: 52px;
    display : grid;
    grid-template-columns: repeat(4,1fr);
    gap : .5em;
    margin: 0 auto;
`
export const SkillItem = styled.div`
    border: 1px solid black;
    border-radius: 50%;
    width: 2.8em;
    height: 2.8em;
    position: relative;
    cursor: pointer;

    
`
export const SkillIcon = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 1.5em;
`


export const Etc = styled.div`
    font-size: 48px;
    display : grid;
    grid-template-columns: repeat(4,1fr)

`
