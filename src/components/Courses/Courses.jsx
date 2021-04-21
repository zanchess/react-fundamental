import React, { useEffect, useState } from 'react';
import './courses.scss';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';
import Searching from '../Searching/Searching';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/authors')
      .then((res) => setAllAuthors(res.data));
    axios
      .get('http://localhost:3001/api/courses')
      .then((res) => setCourses(res.data));
  }, []);

  const coursesList = courses.map((course, index) => (
    <CourseCard
      key={index}
      title={course.title}
      start={course.start}
      duration={course.duration}
      description={course.description}
      authors={course.authors}
      allAuthors={allAuthors}
    />
  ));
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

export default Courses;
