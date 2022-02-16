import React, { useState } from 'react'
import menuBurger from '../media/icons/burger-menu-icon.png'

export const Navbar = () => {

    const [isActive, setActive] = useState(false)

    const toggleSidenav = () => {
        setActive(!isActive)
    }

    return(

        
        <div className="navbar">


            <div className="logo">
                <img src="media-contents/logo/SS_Logo.png" alt="" srcset="" />
            </div>

            <ul className="menu">
                <li className="menu__item"><a href="/">ГЛАВНАЯ</a></li>
                <li className="menu__item"><a href="/about">О СС ЭМИТ</a></li>
                <li className="menu__item"><a href="/career">КАРЬЕРА</a></li>
                <li className="menu__item"><a href="/emit-school">ШКОЛА ЭМИТ</a></li>
                <li className="menu__item"><a href="/partners">ПАРТНЕРЫ</a></li>
                <li className="menu__item"><a href="/lk">ЛИЧНЫЙ КАБИНЕТ</a></li>
                
            </ul>

            <div className="burger-menu">
                <div className="burger-menu__btn" onClick={toggleSidenav}>
                    <img src={menuBurger} alt="" className="burger-icon" />
                </div>
            </div>



            

            <div className={"sidenav " + (isActive ? 'sidenav-active' : '')}>

            <ul className="sidenav-menu ">
                <li className="sidenav-item"><a href="/">ГЛАВНАЯ</a></li>
                <li className="sidenav-item"><a href="/about">О СС ЭМИТ</a></li>
                <li className="sidenav-item"><a href="/career">КАРЬЕРА</a></li>
                <li className="sidenav-item"><a href="/emit-school">ШКОЛА ЭМИТ</a></li>
                <li className="sidenav-item"><a href="/partners">ПАРТНЕРЫ</a></li>
                <li className="sidenav-item"><a href="/lk">ЛИЧНЫЙ КАБИНЕТ</a></li>

                <li className="close-sidenav" onClick={toggleSidenav}>&gt;&gt;&gt;</li>
            </ul>
            
        </div>
        </div>
    )
}