import { Navbar } from '../components/Navbar'
import React from 'react'
import { Slider } from '../components/Slider'
import { News } from '../components/News'

export const MainPage = () => {
    return(
        <div>
            <Navbar />
            <News />
        </div>
    )
}