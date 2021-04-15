import React, { useEffect, useState } from 'react';
import './courses-page.scss';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CourseItem from '../../components/CourseItem/CourseItem';
import Searching from '../../components/Searching/Searching';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/courses')
      .then((res) => setCourses(res.data));
  });

  const coursesList = courses.map((course) => <CourseItem info={course} />);
  return (
    <div className="login-page">
      <div className="courses__block">
        <div className="login-page__control">
          <Searching />
          <Button className="add-btn" variant="primary">Add Course</Button>
        </div>
        <div className="course__block_courses">
          {coursesList}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
