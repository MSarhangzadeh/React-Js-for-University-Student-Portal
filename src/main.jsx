import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import CourseDetail from './components/CourseDetail.jsx'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
    children:[
      {path:"/", element:<Home/>},
      {path:"/signup", element:<Signup/>},
      {path:"/login", element:<Login/>},
      {path:"/dashboard", element:<Dashboard/>},
      { path: "*", element: <ErrorPage /> },
      {path:"/courses/:id", element:<CourseDetail/>}
    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
