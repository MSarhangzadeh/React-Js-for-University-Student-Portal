import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { semester: 'Sem 1', GDP: 2.5 },
  { semester: 'Sem 2', GDP: 3.1 },
  { semester: 'Sem 3', GDP: 2.8 },
  { semester: 'Sem 4', GDP: 3.5 },
  { semester: 'Sem 5', GDP: 4.0 },
  { semester: 'Sem 6', GDP: 3.7 },
];

const Profile = () => {
  const [profileImg, setProfileImg] = useState(
    'https://cdn-icons-png.flaticon.com/512/847/847969.png' // anonymous avatar
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      {/* Left: Profile Picture */}
      <div className="col-md-4 d-flex flex-column align-items-center mb-4">
        <div
          className="position-relative"
          style={{ width: '250px', height: '320px', cursor: 'pointer' }}
          title="Click to change image"
          onClick={() => document.getElementById('profileImgInput').click()}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="shadow-sm"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
          <input
            id="profileImgInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>
        <button
          className="btn btn-sm btn-outline-primary mt-3 w-100"
          onClick={() => document.getElementById('profileImgInput').click()}
        >
          Edit Image
        </button>
      </div>

      {/* Right: Profile Info and Chart */}
      <div className="col-md-8 d-flex flex-column">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="John" disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Doe" disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Student Number</label>
            <input type="text" className="form-control" placeholder="S1234567" disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Social ID</label>
            <input type="text" className="form-control" placeholder="987654321" disabled />
          </div>
          <div className="col-md-12">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="student@example.com" disabled />
          </div>
        </div>

        <div className="mt-4" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <h5 className="text-center mb-3">📈 Semester GDP Overview</h5>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="GDP"
                  stroke="#8884d8"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
