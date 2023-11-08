import React from 'react';
import { createTheme } from '@mui/material/styles';
// import { DM_Sans, Be_Vietnam_Pro } from 'next/font/google';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Search from './components/Search';
import InnerCourse from './components/InnerCourse';
import db from '../src/firebase';
import HomeCourse from './pages/HomeCourse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="font-dmSans">
        <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeCourse />} />
          <Route path="courses" element={<Search />} />
          <Route path="courses/:id" element={<InnerCourse />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
