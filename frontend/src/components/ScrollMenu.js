import React, {useState} from 'react'
import arrow from '../media/images/arrow.svg'

export const ScrollMenu = () => {

    const [menuItem, setMenuItem] = useState(1)

    const handleMenuItem = (num) => {
        
    }

    return (

        

        <div className="scroll-menu">
            <div className="scroll-menu-header">
                <p>
                    СТУДЕНЧЕСКИЙ 
                    СОВЕТ <br/>
                    ЭМИТ
                </p>
            </div>
            
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>

            <div className="scroll-menu-container">
                
                <div className="scroll-menu-options">
                    <div className="scroll-menu-item"><a href="">НАПРАВЛЕНИЯ ПРОЕКОВ</a></div>
                    <div className="scroll-menu-item"><a href="">ПРОЕКТЫ</a></div>
                    <div className="scroll-menu-item"><a href="">МЕРОПРИЯТИЯ</a></div>
                    <div className="scroll-menu-item"><a href="">ЦЕНТРЫ</a></div>
                    <div className="scroll-menu-item"><a href="">НАША ИСТОРИЯ</a></div>
                    <div className="scroll-menu-item"><a href="">АКТИВ ЭМИТ</a> </div>
                </div>
                
            </div>
        </div>
    )
}