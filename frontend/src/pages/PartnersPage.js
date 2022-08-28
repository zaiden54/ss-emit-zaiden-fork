import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BannerLoop } from '../components/BannerLoop'
// import { ScrollMenu } from '../components/ScrollMenu'
import textLoop from '../media/images/partnerLoop.svg'
import { Partners, PartnersCards, PartnersDiscount, PartnersRegistration } from '../components/Partners'


export const PartnersPage = () => {
    return (
        <div>
            <Navbar />
            <BannerLoop image={textLoop} />
            {/* <ScrollMenu /> */}
            <Partners />
            <PartnersDiscount/>
            <PartnersCards />
            <PartnersRegistration />
            <Footer />
        </div>

    )
}