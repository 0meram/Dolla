import React from 'react'
import Icon1 from '../../images/Chatbot.svg'
import Icon2 from '../../images/digitalCurrency.svg'
import Icon3 from '../../images/GiftCard.svg'
import Icon4 from '../../images/LocationTracking.svg'
import Icon5 from '../../images/mobilePayments.svg'
import Icon6 from '../../images/OperatingSystem.svg'
import {
    
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,

} from './servicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Chat Bot</ServicesH2>
                    <ServicesP>We help reduce your fees and increas your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                {/* <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Location Tracking</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Mobile Payments.</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Operating System</ServicesH2>
                    <ServicesP>24 hours a day. We stay up so your money can go to sleep.</ServicesP>
                </ServicesCard> */}
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
