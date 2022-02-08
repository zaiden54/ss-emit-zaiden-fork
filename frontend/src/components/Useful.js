import React from "react";
import Arrow from "../media/icons/Arrow.svg"

export const Useful = () => {
    
    return (
        <div className="useful-main">
            
            <div className="useful-heading">
                <p>Полезное</p>
            </div>
            
            <div className="useful-item">
                
                <div className="useful-block">
                    
                    <div className="useful-rectangle">
                        <div className="useful-rectangle-text">

                            <a href="/active">
                                <div className="rectangle-text-container">
                                    <div className="rectangle-text-item"><p>Актив</p></div>
                                    <div className="rectagle-text-icon"><img src={Arrow} alt="" /></div>
                                </div>
                            </a>

                        </div>
                    </div>
                    
                    <div className="useful-rectangle-heading"><p>Активистам</p></div>
                
                </div>

            </div>
            
            <div className="useful-item">
                <div className="useful-block">
                    <div className="useful-rectangle">
                        <div className="useful-rectangle-text">
                        
                            <a href="/active">
                                <div className="rectangle-text-container">
                                        <div className="rectangle-text-item"><p>Актив</p></div>
                                        <div className="rectagle-text-icon"><img src={Arrow} alt="" /></div>
                                </div>
                            </a>
                            <a href="/career">
                                <div className="rectangle-text-container">
                                        <div className="rectangle-text-item"><p>Карьера</p></div>
                                        <div className="rectagle-text-icon"><img src={Arrow} alt="" /></div>
                                </div>
                            </a>
                            <a href="/events">
                                <div className="rectangle-text-container">
                                        <div className="rectangle-text-item"><p>Мероприятия</p></div>
                                        <div className="rectagle-text-icon"><img src={Arrow} alt="" /></div>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                    <div className="useful-rectangle-heading"><p>Студентам</p></div>
                </div>
            </div>
        
        </div>
    )
}