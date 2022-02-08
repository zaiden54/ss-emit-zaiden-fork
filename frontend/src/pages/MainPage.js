import { Navbar } from '../components/Navbar'
import React from 'react'
import { Slider } from '../components/Slider'
import { News } from '../components/News'
import { Events } from '../components/Events'
import { Footer } from '../components/Footer'

export const MainPage = () => {
    return(
        <div>
            <Navbar />
            <News />
            <Events />
            <Footer />
        </div>
    )
}