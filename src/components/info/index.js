import React from 'react'
import { Button } from '../ButtonElements'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
SubTitle,
BtnWrap,
Column2,
ImgWrap,
Img
} from "./infoElements"

const Info = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    alt,
    img,
    dark,
    dark2,
    primary
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            
                            
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default Info
