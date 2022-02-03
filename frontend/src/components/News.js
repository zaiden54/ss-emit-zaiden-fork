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
            <div className="news__title">
                Новости
            </div>

            {renderNews(news)}

        </div>
    )

}