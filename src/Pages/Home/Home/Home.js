import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../News/Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>Daily news Home: {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                >

                </NewsSummeryCard>)
            }
        </div>
    );
};

export default Home; <h3>Home</h3>