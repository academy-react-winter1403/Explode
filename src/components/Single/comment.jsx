import { useEffect, useState } from 'react';
import vector from '../../../src/assets/icons/Vector.svg';
import axios from 'axios';
import { useParams } from 'react-router';

const Comment = () => {
  const { id } = useParams();
  const [commentList, setCommentList] = useState(null);

  const getComments = async () => {
    const res = await axios.get(
      `https://classapi.sepehracademy.ir/api/Course/GetCourseCommnets/${id}`,
    );
    setCommentList(res.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="mt-10 flex gap-5">
      <div className="flex h-72 w-1/4 flex-col items-center justify-center rounded-4xl bg-[#3772FF] text-white">
        <img src={vector} alt="" className="h-4 w-4" />
        <p>نظر شما</p>
        <p className="mt-5">برای نظر دادن کلیک کنید</p>
      </div>
      {commentList?.map((item, index) => {
        if (index < 3) {
          return (
            <div className="flex h-72 w-1/4 flex-col rounded-4xl bg-[#F6F6F6] p-4 pt-8">
              <p>{item.title}</p>
              <p className="my-5">{item.describe}</p>

              <div className="mt-auto self-end">
                      <p className='w-1/2'>{item.author}</p>
                      <div>
                          
                      </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comment;
