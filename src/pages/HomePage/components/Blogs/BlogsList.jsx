import { Fragment, useEffect, useState } from 'react';
import { getBlogsList } from '../../../../core/services/blogs';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import CourseCards from '../../../../components/CourseCards';

const BlogsList = () => {
  const [loading, setLoading] = useState(true);
  const [topBlogs, setTopBlogs] = useState([]);

  const getTopBlogs = async () => {
    const params = {
      RowsOfPage: 3,
      SortingCol: 'currentView',
    };
    try {
      const { news } = await getBlogsList(params);
      setTopBlogs(news);
      console.log(news);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopBlogs();
  }, []);

  return (
    <Fragment>
      {loading
        ? Array(3)
            .fill(0)
            .map((_, index) => (
              <CardsSkeleton key={index} width={431} height={293} />
            ))
        : topBlogs.map((item, index) => (
            <CourseCards
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
    </Fragment>
  );
};
export default BlogsList;
