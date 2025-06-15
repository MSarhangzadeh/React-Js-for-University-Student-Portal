import React, { useState } from 'react';
import NavItems from '../components/NavItems';
import Footer from '../components/Footer';
import Profile from './Profile';
import ReserveFood from './ReserveFood';
import RequestSection from './RequestSection';
import Courses from './Courses';
import Wallet from './Wallet';
import Notifications from './Notifications';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <>
      <NavItems />
      <br />
      <br />
      <br />
      <br />

      <div className="dashboard-section style-4 padding-tb" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="container">
          <div className="row align-items-stretch" style={{ minHeight: '80vh' }}>
            {/* Sidebar Navigation */}
            <div className="col-md-3">
              <div className="dashboard-nav h-100 pt-4">
                <ul className="lab-ul nav flex-column">
                  <li>
                    <button
                      onClick={() => setActiveSection('profile')}
                      className={`lab-btn w-100 mb-2 ${activeSection === 'profile' ? 'active' : ''}`}
                    >
                      <span>👤 Profile</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('reserveFood')}
                      className={`lab-btn w-100 mb-2 ${activeSection === 'reserveFood' ? 'active' : ''}`}
                    >
                      <span>🥗 Reserve Food</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('courses')}
                      className={`lab-btn w-100 mb-2 ${activeSection === 'courses' ? 'active' : ''}`}
                    >
                      <span>📚 Courses</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('requests')}
                      className={`lab-btn w-100 mb-2 ${activeSection === 'requests' ? 'active' : ''}`}
                    >
                      <span>📋 Requests</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('wallet')}
                      className={`lab-btn w-100 mb-2 ${activeSection === 'wallet' ? 'active' : ''}`}
                    >
                      <span>💳 Wallet</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('notifications')}
                      className={`lab-btn w-100 ${activeSection === 'notifications' ? 'active' : ''}`}
                    >
                      <span>🔔 Notifications</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Active Section Placeholder */}
            <div className="col-md-9">
                    <div
                    className="dashboard-content text-center p-4 shadow-sm rounded bg-white"
                    style={{
                        minHeight: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    >
                    <h4 className="mb-3">
                    {activeSection === 'profile' && '👤 Your Profile Overview'}
                    {activeSection === 'reserveFood' && '🥗 Reserve Your Favorite Meals'}
                    {activeSection === 'courses' && '📚 Explore Your Computer Science Courses'}
                    {activeSection === 'requests' && '📋 Submit and Track Your Requests'}
                    {activeSection === 'wallet' && '💳 Manage Your Wallet'}
                    {activeSection === 'notifications' && '🔔 Recent Notifications & Updates'}
                    </h4>

                    {activeSection === 'profile' && <Profile />}

                    {activeSection === 'reserveFood' && <ReserveFood />}

                    {activeSection === 'courses' && <Courses />}

                    {activeSection === 'requests' && <RequestSection />}

                    {activeSection === 'wallet' && <Wallet />}

                    {activeSection === 'notifications' && <Notifications />}

       
                    </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Dashboard;
