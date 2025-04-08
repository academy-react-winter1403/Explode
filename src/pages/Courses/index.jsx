import React, { Fragment } from 'react';
import Page_Title from './page-title';
import Content from './content';
import Sorting from './content/course-list/sorting-list';



const Courses = () => {
  return (
    <Fragment>
      <Page_Title />
      <Content />
      <Sorting/>
    </Fragment>
    

  );
};
export default Courses;

