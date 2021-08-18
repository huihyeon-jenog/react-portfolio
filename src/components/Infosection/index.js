import React from 'react'
import{
    InfoContainer,
    TopLine,
    InfoWrapper,
    Column1,
    Column2,
    Img,
    HeadLine,
    Description,
    Contact,
    Grade,
    Skill,
    SkillIcon,
    SkillWrapper
} from './InfoElements'
import {MdSchool,MdPhoneAndroid} from "react-icons/md"
import {skill} from "../Data"
const InfoSection = ({id,topLine,headLine,description,img,alt,contact,grade}) => {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
                <Column1>
                    <TopLine>{topLine}</TopLine>
                    <HeadLine>{headLine}</HeadLine>
                    <Description>{description}</Description>
                    <Grade>
                        <MdSchool style={{marginRight:'10px'}}/>{grade}
                    </Grade>
                    <Contact>
                        <MdPhoneAndroid style={{marginRight:'10px'}}/>{contact}
                    </Contact>
                </Column1>
                <Column2>
                    <Img src={img} alt={alt} />
                </Column2>
                
            </InfoWrapper>
            <SkillWrapper>
                {skill.map((item)=>{
                        const {id,skill} = item
                        return <Skill key={id}>
                            <SkillIcon>{skill}</SkillIcon>
                        </Skill>
                    })}
            </SkillWrapper>
        </InfoContainer>
    )
}

export default InfoSection
