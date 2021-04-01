import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkTitle,
FooterLinkItem,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebSiteRights,
SocialIcons,
SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/signIn">How it works</FooterLink>
                            <FooterLink to="/signIn">Testimonails</FooterLink>
                            <FooterLink to="/signIn">Careers</FooterLink>
                            <FooterLink to="/signIn">Investors</FooterLink>
                            <FooterLink to="/signIn">About us</FooterLink>
                            <FooterLink to="/signIn">Terms of policy</FooterLink>
                            </FooterLinkItem>
                        <FooterLinkItem>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/signIn">Contact</FooterLink>
                            <FooterLink to="/signIn">Support</FooterLink>
                            <FooterLink to="/signIn">Destinations</FooterLink>
                            <FooterLink to="/signIn">Sponsorship</FooterLink>
                            </FooterLinkItem>
                        <FooterLinkItem>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to="/signIn">Submit Video</FooterLink>
                            <FooterLink to="/signIn">Ambassadors</FooterLink>
                            <FooterLink to="/signIn">Agency</FooterLink>
                            <FooterLink to="/signIn">Influencer</FooterLink>
                            </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        dolla
                    </SocialLogo>
                    <WebSiteRights>
                    dolla @ {new Date().getFullYear()} all rights reserved.
                    </WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instegram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href="https://twitter.com/?lang=he" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/feed/" target="_blank" aria-label="Linkdin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
