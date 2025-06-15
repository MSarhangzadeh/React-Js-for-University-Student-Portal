import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyCourses = [
  {
    id: 1,
    title: 'Introduction to Algorithms',
    lecturer: 'Prof. Thomas Cormen',
    image: 'src/assets/images/Courses/01.jfif',
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    lecturer: 'Dr. Andrew Ng',
    image: 'src/assets/images/Courses/01.jfif',
  },
  {
    id: 3,
    title: 'Operating Systems',
    lecturer: 'Prof. Silberschatz',
    image: 'src/assets/images/Courses/01.jfif',
  },
  {
    id: 4,
    title: 'Computer Networks',
    lecturer: 'Dr. Kurose',
    image: 'src/assets/images/Courses/01.jfif',
  },
  {
    id: 5,
    title: 'Data Structures',
    lecturer: 'Prof. Mark Allen Weiss',
    image: 'src/assets/images/Courses/01.jfif',
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="container">
      <h3 className="mb-4 text-start">📚 Computer Science Courses</h3>
      <div className="row g-4">
        {dummyCourses.map((course) => (
          <div key={course.id} className="col-12 col-md-6">
            <div
              className="card h-100 shadow-sm border-0 hover-shadow"
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => handleClick(course.id)}
            >
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted mb-0">👨‍🏫 {course.lecturer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
