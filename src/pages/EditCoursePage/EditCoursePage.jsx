import React from 'react';
import './edit-course-page.scss';
import CourseInfoForm from '../../components/CourseInfoForm/CourseInfoForm';

const EditCoursePage = ({ hideEditCourseForm }) => (
  <div className="create-page">
    <h2 className="create-page__head">Edit course</h2>
    <CourseInfoForm hideForm={hideEditCourseForm} />
  </div>
);

export default EditCoursePage;
