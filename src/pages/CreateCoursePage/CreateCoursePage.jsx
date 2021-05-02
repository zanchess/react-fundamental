import React from 'react';
import './create-course-page.scss';
import CourseInfoForm from '../../components/CourseInfoForm/CourseInfoForm';

const CreateCoursePage = ({ hideCreateCourseForm }) => (
  <div className="create-page">
    <h2 className="create-page__head">Create course</h2>
    <CourseInfoForm />
  </div>
);

export default CreateCoursePage;
