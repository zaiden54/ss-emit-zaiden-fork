import React, { useState, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import { useHttp } from "../hooks/http.hooks";
import { Spinner } from "./Spinner";

export const News = () => {
    const { loading, request, error, clearError } = useHttp();

    const [news, setNews] = useState([]);

    const renderNews = (news) => {
        if (!news) {
            return <div className="">пока нет новостей</div>;
        }

        return news.map((item, index) => {
            return <NewsCard image={item.image} title={item.title} hashtag={item.hashtag} key={index} />;
        });
    };

    useEffect(async () => {
        const res = await request("/api/content/news");
        setNews(res);
    }, []);

    return (
        <div className="news-block">
            <div className="news__header">Новости</div>

            <div className="news-container">{renderNews(news)}</div>

            <div className="news__other">
                <a href="/news">
                    <p>ДРУГИЕ НОВОСТИ</p>
                </a>
            </div>
        </div>
    );
};
