import React, {useState, useEffect} from 'react'
import { NewsCard } from './NewsCard'
import axios from 'axios'

export const News = () => {
    
    const [news, setNews] = useState([])

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

    useEffect( async () => {
        const res = await axios.get('/api/content/news')
        setNews(res.data)
    }, [])
    

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