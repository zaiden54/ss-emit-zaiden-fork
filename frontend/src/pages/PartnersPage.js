import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BannerLoop } from '../components/BannerLoop'
// import { ScrollMenu } from '../components/ScrollMenu'
import textLoop from '../media/images/partnerLoop.svg'
import { Partners, PartnersCards, PartnersDiscount, PartnersRegistration } from '../components/Partners'


export const PartnersPage = () => {
    return (
        <div className="parters-page__container">
            <Navbar />
            <BannerLoop image={textLoop} />
            <div className="partners-page">
                <Partners />
                <PartnersDiscount/>
                <PartnersCards />
                <PartnersRegistration />
            </div>
            <Footer />
        </div>

    )
}