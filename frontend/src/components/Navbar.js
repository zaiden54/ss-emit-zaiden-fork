import React from 'react'
import menuBurger from '../media/icons/burger-menu-icon.png'

export const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <img src="media-contents/logo/SS_Logo.png" alt="" srcset="" />
            </div>

            <li className="menu">
                <ul className="menu__item"><a href="/">ГЛАВНАЯ</a></ul>
                <ul className="menu__item"><a href="/about">О СС ЭМИТ</a></ul>
                <ul className="menu__item"><a href="/career">КАРЬЕРА</a></ul>
                <ul className="menu__item"><a href="/emit-school">ШКОЛА ЭМИТ</a></ul>
                <ul className="menu__item"><a href="/partners">ПАРТНЕРЫ</a></ul>
                <ul className="menu__item"><a href="/lk">ЛИЧНЫЙ КАБИНЕТ</a></ul>
            </li>

            <div className="burger-menu">
                <div className="burger-menu__btn">
                    <img src={menuBurger} alt="" className="burger-icon" />
                </div>
            </div>
        </div>
    )
}