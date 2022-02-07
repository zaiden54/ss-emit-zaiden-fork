import { Navbar } from '../components/Navbar'
import React from 'react'
import { Slider } from '../components/Slider'
import { Footer } from '../components/Footer'

export const MainPage = () => {
    return(
        <div>
            <Navbar />
            <Slider />
            <Footer />
        </div>
    )
}