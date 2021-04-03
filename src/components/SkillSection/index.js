import React,{useState,useEffect} from 'react'
import {
    SkillsContainer,
    SkillWrapper,
    SkillH1,
    Skills,
    Etc,
    SkillItem,
    SkillIcon,
}from './SkillElements'
import {skill} from '../Data'
const SkillSetion = ({percent}) => {

    const [showValue, setShowValue] = useState(false)

    return (
        <SkillsContainer id="skill">
            <SkillWrapper>
                <SkillH1>
                    SKILLS
                </SkillH1>
                <Skills>
                    {skill.map((item)=>{
                        const {id,skill,percent} = item
                        return <SkillItem 
                            key={id} 
                            style={{background: `linear-gradient(0deg, #12232E ${percent}%, #EEFBFB ${100-percent}%)`}}
                            >
                            <SkillIcon >{skill}</SkillIcon>
                        </SkillItem>
                    })}
                </Skills>
            </SkillWrapper>
        </SkillsContainer>
    )
}

export default SkillSetion
