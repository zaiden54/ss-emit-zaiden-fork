import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BannerLoop } from '../components/BannerLoop'
import { ScrollMenu } from '../components/ScrollMenu'

export const AboutPage = () => {
    return (
        <div className="">
            <Navbar />

            <BannerLoop />
            <ScrollMenu />
            
            <Footer />
        </div>

    )
}