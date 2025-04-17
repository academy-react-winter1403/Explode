import React from 'react'

const SingleContent = ({ describe }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">توضیحات دوره :</h2>
      <p className="text-lg mt-4">{describe}</p>
    </div>
  );
};

export default SingleContent