import React from 'react'




export const NewsCard = (props) => {

    const cardStyle = {
        background: 'url(' + props.image + ') 50% 50%/auto 100% no-repeat'
    }

    return (
        <div style={cardStyle} className="news__card">
            
            <div className="news-text">
                <div className="news-hashtag">
                    {props.hashtag}
                </div>
                <div className="news-title">
                    {props.title.toUpperCase()}
                </div>
            </div>
        </div>
    )
}