import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

import AddStudent from './pages/admin/AddStudent';
import AddTeacher from './pages/admin/AddTeacher';
import AdminViewStudent from './pages/admin/AdminViewStudent';
import AdminViewTeacher from './pages/admin/AdminViewTeacher';
import AdminViewModule from './pages/admin/AdminViewModule';
import AdminViewContent from './pages/admin/AdminViewContent';

import LecViewStudent from './pages/teacher/LecViewStudent';
import LecViewModuleList from './pages/teacher/LecViewModuleList';
import CreateContent from './pages/teacher/CreateContent';
import LecCreateModule from './pages/teacher/LecCreateModule';
import LecUploadAssignment from './pages/teacher/LecUploadAssignment';
import LecViewAssignment from './pages/teacher/LecViewAssignment';
import AddMarks from './pages/teacher/AddMarks';

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
        <Route path="/admin/AddTeacher" element={<AddTeacher />} />
        <Route path="/admin/AdminViewStudent" element={<AdminViewStudent />} />
        <Route path="/admin/AdminViewTeacher" element={<AdminViewTeacher />} />
        <Route path="/admin/AdminViewModule" element={<AdminViewModule />} />
        <Route path="/admin/AdminViewContent" element={<AdminViewContent />} />

        {/* Teacher  */}
        <Route path="/teacher/LecViewStudent" element={<LecViewStudent />} />
        <Route path="/teacher/CreateContent" element={<CreateContent />} />
        <Route path="/teacher/LecCreateModule" element={<LecCreateModule />} />
        <Route path="/teacher/LecUploadAssignment" element={<LecUploadAssignment />} />
        <Route path="/teacher/LecViewAssignment" element={<LecViewAssignment />} />
        <Route path="/teacher/AddMarks" element={<AddMarks />} />
        <Route path="/teacher/LecViewModuleList" element={<LecViewModuleList />} />

        {/* Student  */}
        <Route path="/student/StuViewModuleList" element={<StuViewModuleList />} />
        <Route path="/student/StuViewContent" element={<StuViewContent />} />
        <Route path="/student/StuUploadAssignment" element={<StuUploadAssignment />} />


      </Routes>

    </Router>
  )
}
