import { Navbar } from '../components/Navbar'
import React from 'react'
import { News } from '../components/News'
import { Events } from '../components/Events'
import { Footer } from '../components/Footer'
import { Useful } from '../components/Useful'


export const MainPage = () => {
    return(
        <div>
            <Navbar />
            <News />
            <Events />
            <Useful />
            <Footer />
        </div>
    )
}