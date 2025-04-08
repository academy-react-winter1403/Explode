import { Fragment, useEffect, useState } from 'react';
import Cards from '../../../../components/shared/cards';
import { getBlogsList } from '../../../../core/services/api/blogs';
import CardsSkeleton from '../../../skeleton/cards-skeleton';

const BlogList = () => {
  const [loading, setLoading] = useState(true);
  const [topBlogs, setTopBlogs] = useState([]);

  const getTopBlogs = async () => {
    const params = {
      RowsOfPage: 6,
      SortingCol: 'currentView',
    };
    try {
      const { news } = await getBlogsList(params);
      setTopBlogs(news);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopBlogs();
  }, []);

  return (
    <div className='flex flex-wrap justify-evenly gap-y-5'>
      {loading
        ? Array(3)
            .fill(0)
            .map((_, index) => (
              <CardsSkeleton key={index} width={431} height={293} />
            ))
        : topBlogs.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              isBlog={true}
              author={item.addUserFullName}
              date={item.insertDate}
              view={item.currentView}
              width={431}
              image={item.currentImageAddressTumb}
              linkAddress={`/blogs/${item.id}`}
            />
          ))}
    </div>
  );
};

export default BlogList;
