import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

import AddStudent from './pages/admin/AddStudent';
import AddLecturer from './pages/admin/AddLecturer';
import AdminViewStudent from './pages/admin/AdminViewStudent';
import AdminViewLecturer from './pages/admin/AdminViewLecturer';
import AdminViewModule from './pages/admin/AdminViewModule';
import AdminViewContent from './pages/admin/AdminViewContent';

import LecViewStudent from './pages/lecturer/LecViewStudent';
import LecViewModuleList from './pages/lecturer/LecViewModuleList';
import CreateContent from './pages/lecturer/CreateContent';
import LecCreateModule from './pages/lecturer/LecCreateModule';
import LecUploadAssignment from './pages/lecturer/LecUploadAssignment';
import LecViewAssignment from './pages/lecturer/LecViewAssignment';
import AddMarks from './pages/lecturer/AddMarks';

import StuViewModuleList from './pages/student/StuViewModuleList';
import StuViewContent from './pages/student/StuViewContent';
import StuUploadAssignment from './pages/student/StuUploadAssignment';


import './App.css';


export default function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<div></div>} /> */}
        <Route exact path="/" element={< Login />} />
        {/* Admin  */}
        <Route path="/admin/AddStudent" element={<AddStudent />} />
        <Route path="/admin/AddLecturer" element={<AddLecturer />} />
        <Route path="/admin/AdminViewStudent" element={<AdminViewStudent />} />
        <Route path="/admin/AdminViewLecturer" element={<AdminViewLecturer />} />
        <Route path="/admin/AdminViewModule" element={<AdminViewModule />} />
        <Route path="/admin/AdminViewContent" element={<AdminViewContent />} />

        {/* Lecturer  */}
        <Route path="/lecturer/LecViewStudent" element={<LecViewStudent />} />
        <Route path="/lecturer/CreateContent" element={<CreateContent />} />
        <Route path="/lecturer/LecCreateModule" element={<LecCreateModule />} />
        <Route path="/lecturer/LecUploadAssignment" element={<LecUploadAssignment />} />
        <Route path="/lecturer/LecViewAssignment" element={<LecViewAssignment />} />
        <Route path="/lecturer/AddMarks" element={<AddMarks />} />
        <Route path="/lecturer/LecViewModuleList" element={<LecViewModuleList />} />

        {/* Student  */}
        <Route path="/student/StuViewModuleList" element={<StuViewModuleList />} />
        <Route path="/student/StuViewContent" element={<StuViewContent />} />
        <Route path="/student/StuUploadAssignment" element={<StuUploadAssignment />} />


      </Routes>

    </Router>
  )
}
