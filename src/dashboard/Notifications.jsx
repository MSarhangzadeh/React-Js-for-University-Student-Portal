import React from 'react';

const dummyNotifications = [
  {
    id: 1,
    title: 'New Assignment Released',
    message: 'An assignment for "Data Structures" has been released. Due in 5 days.',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Midterm Schedule Announced',
    message: 'Midterms for "Operating Systems" will be held next Monday at 10 AM.',
    time: '1 day ago',
  },
  {
    id: 3,
    title: 'New Course Added',
    message: '"Introduction to Cybersecurity" is now available for registration.',
    time: '3 days ago',
  },
  {
    id: 4,
    title: 'University Seminar',
    message: 'Join us for a guest lecture on AI Ethics this Friday at the Main Auditorium.',
    time: '5 days ago',
  },
  {
    id: 5,
    title: 'Grades Published',
    message: 'Your grades for "Computer Networks" have been uploaded to the portal.',
    time: '1 week ago',
  },
];

const Notifications = () => {
  return (
    <div className="container">
      <h3 className="mb-4 text-start">🔔 Notifications</h3>
      <div className="list-group">
        {dummyNotifications.map((note) => (
          <div
            key={note.id}
            className="list-group-item list-group-item-action flex-column align-items-start shadow-sm mb-3 rounded"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{note.title}</h5>
              <small className="text-muted">{note.time}</small>
            </div>
            <p className="mb-1">{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
