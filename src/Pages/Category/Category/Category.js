
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../News/Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h3>This category has news:{categoryNews.length}</h3>
            {
                categoryNews?.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;