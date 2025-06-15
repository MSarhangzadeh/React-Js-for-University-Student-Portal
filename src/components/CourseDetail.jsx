import React from 'react';
import { useParams } from 'react-router-dom';

import lectureNotes from '../assets/files/AnimateAnyone.pdf';
import assignment1 from '../assets/files/AnimateAnyone.pdf';

import video1 from '../assets/videos/01.mp4';
import video2 from '../assets/videos/01.mp4';
import video3 from '../assets/videos/01.mp4';
import video4 from '../assets/videos/01.mp4';

// bu fgt id 1 aa olur ki avvl course di ozun page a bakh o backend di halasalasan

const courseData = {
  1: {
    title: 'Introduction to Algorithms',
    description: 'An in-depth look at algorithm design and analysis.',
    lecturer: 'Prof. Thomas Cormen',
    courseCode: 'CS101',
    group: 'A',
    files: [
      { name: 'Lecture 1 Notes', url: lectureNotes },
      { name: 'Assignment 1', url: assignment1 },
    ],
    videos: [
      { title: 'Intro to Sorting', url: video1 },
      { title: 'Divide & Conquer', url: video2 },
      { title: 'Greedy Algorithms', url: video3 },
      { title: 'Dynamic Programming', url: video4 },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="container py-5">
        <h4 className="text-warning">⚠️ Course not found.</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Course Header */}
      <div className="bg-dark text-light p-4 rounded shadow-sm mb-4">
        <h2 className="mb-3 text-warning">{course.title}</h2>
        <p className='text-primary'><strong>👨‍🏫 Lecturer:</strong> {course.lecturer}</p>
        <p className='text-primary'><strong>📘 Course Code:</strong> {course.courseCode}</p>
        <p className='text-primary'><strong>👥 Group:</strong> {course.group}</p>
        <p className='text-primary'><strong>📝 Description:</strong> {course.description}</p>
      </div>

      {/* Course Files */}
      <div className="mb-5">
        <h4 className="text-primary mb-3">📂 Course Files</h4>
        {course.files && course.files.length > 0 ? (
          <div className="list-group">
            {course.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{file.name}</span>
                <span className="badge bg-warning text-dark rounded-pill">View</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-muted">No files available for this course.</p>
        )}
      </div>

      {/* Course Videos */}
      <div>
        <h4 className="text-primary mb-3">🎬 Course Videos</h4>
        {course.videos && course.videos.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {course.videos.map((video, index) => (
              <div className="col" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column bg-light">
                    <h5 className="card-title text-dark">{video.title}</h5>
                    <p className="card-text text-muted small">Click below to watch the lecture</p>
                    <a
                      href={video.url}
                      className="btn btn-warning mt-auto text-dark fw-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ Watch Video
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No videos available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
