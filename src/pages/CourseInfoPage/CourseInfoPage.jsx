import React, { useEffect, useState } from 'react';
import './course-info-page.scss';
import { useParams } from 'react-router-dom';
import getTimeFromMins from '../../utils/get-time-from-mins';
import authorsAdapter from '../../utils/authors-adapter';

const CourseInfoPage = ({ allAuthors, courses }) => {
  const { id } = useParams();
  const [currentCourse, setCurrentCourse] = useState({});
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const course = courses.find((courseItem) => courseItem.id === id);
    setCurrentCourse(course);

    if (course) {
      const courseAuthors = authorsAdapter(course, allAuthors);
      setAuthors(courseAuthors);
    }
  }, []);

  return (
    <>
      <div className="course-info">
        <span>{`ID:${currentCourse.id}`}</span>
        {' '}
        s
        <br />
        <span>{getTimeFromMins(currentCourse.duration)}</span>
        {' '}
        <br />
        <span>{`Start Date: ${currentCourse.creationDate}`}</span>
        <br />
        <span>Authors:</span>
        {' '}
        <br />
        <span>
          {authors.map((author, i) => (
            <span key={i}>
              {' '}
              {author}
              {' '}
            </span>
          ))}
        </span>
      </div>
    </>
  );
};

export default CourseInfoPage;
