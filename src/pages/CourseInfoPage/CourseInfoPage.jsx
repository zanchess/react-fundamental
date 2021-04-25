import React from 'react';
import './course-info-page.scss';

const CourseInfoPage = (props) => {
  console.log(props);
  return (
    <>
      <div className="course-info">
        <span>{`ID:${props.match.params.id}`}</span>
      </div>
    </>
  );
};

export default CourseInfoPage;
