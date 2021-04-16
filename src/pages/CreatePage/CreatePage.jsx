import React from 'react';
import './create-page.scss';
import CourseInfoForm from '../../components/CourseInfoForm/CourseInfoForm';

const CreatePage = () => (
  <div className="create-page">
    <h2 className="create-page__head">Create course</h2>
    <CourseInfoForm />
  </div>
);

export default CreatePage;
