import React from 'react'
import { NewsCard } from './NewsCard'
import news from '../testDB/news.json'

export const News = () => {
    

    const renderNews = (news) => {
        return news.map((item, index) => {
            return(
                <NewsCard
                    image={item.image}
                    title={item.title}
                    hashtag={item.hashtag}
                    key={index}
                />
            )
        })
    }
    

    return(
        <div className="news-block">
            <div className="news__header">
                Новости
            </div>

            <div className="news-container">
                {renderNews(news)}
            </div>

            <div className="news__other">
                <a href="/news"><p>ДРУГИЕ НОВОСТИ</p></a>
            </div>
        </div>
    )

}