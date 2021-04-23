import React from 'react';
import './edit-course-page.scss';
import CourseInfoForm from '../../components/CourseInfoForm/CourseInfoForm';

const EditCoursePage = () => (
  <div className="create-page">
    <h2 className="create-page__head">Create course</h2>
    <CourseInfoForm />
  </div>
);

export default EditCoursePage;
