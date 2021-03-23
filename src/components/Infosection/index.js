import React from 'react'
import{
    InfoContainer,
    TopLine,
} from './InfoElements'
const InfoSection = ({id,topLine,headLine,description,img}) => {
    return (
        <InfoContainer id={id}>
            <TopLine>{topLine}</TopLine>
            {headLine}
            {description}
            {img}
        </InfoContainer>
    )
}

export default InfoSection
