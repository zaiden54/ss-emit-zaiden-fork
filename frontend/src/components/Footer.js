import React from "react";
import VK from "../media/icons/VK.svg";
import Inst from "../media/icons/Inst.svg";

export const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo-footer">
                    <img src="media-contents/logo/Logo-Color.png" alt="" srcSet="" />
                </div>

                <div className="footer-main-info">
                    <div className="footer-container">
                        <div className="footer-list">
                            <div className="footer-heading">
                                <a href="/">
                                    <p>Главная</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="">
                                    <p>Приветствие</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/news">
                                    <p>Новости</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/occasions">
                                    <p>События</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/useful">
                                    <p>Полезное</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer-list">
                            <div className="footer-heading">
                                <a href="/career">
                                    <p>Карьера</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer-list">
                            <div className="footer-heading">
                                <a href="school">
                                    <p>Школа ЭМИТ</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer-list">
                            <div className="footer-heading">
                                <a href="/lk">
                                    <p>Личный кабинет</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer-list">
                            <div className="footer-heading">
                                <a href="/partners">
                                    <p>Партнеры</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/contacts">
                                    <p>Как с нами связаться</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/products">
                                    <p>Что представляем</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/partners">
                                    <p>Наши партнеры</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="footer-heading">
                                <a href="/council">
                                    <p>О СС ЭМИТ</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/about">
                                    <p>Кто мы</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/activities">
                                    <p>Направления деятельности</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/events">
                                    <p>Мероприятия</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/projects">
                                    <p>Проекты</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/departments">
                                    <p>Центры</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/history">
                                    <p>История</p>
                                </a>
                            </div>
                            <div className="footer-item">
                                <a href="/active">
                                    <p>Актив</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-contacts">
                        <div className="footer-contacts-item">
                            <a href="https://vk.com/smi_emit" target="_blank">
                                <img src={VK} alt="" />
                            </a>
                        </div>
                        <div className="footer-contacts-item">
                            <a href="https://instagram.com/smi_emit" target="_blank">
                                <img src={Inst} alt="" />
                            </a>
                        </div>
                        <div className="footer-contacts-item">
                            <a href="mailto:zaiden.ranepa@gmail.com">
                                <p>ssemit@gmail.com</p>
                            </a>
                        </div>
                        <div className="footer-contacts-item">
                            <a href="tel:+79822748010">
                                <p>+7(777)777-77-77</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="footer-copyright-item">
                    <p>&copy; Студенческий совет ЭМИТ РАНХиГС. Все права защищены.</p>
                </div>
            </div>
        </div>
    );
};
