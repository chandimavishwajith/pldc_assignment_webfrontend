import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

import AddStudent from './pages/admin/AddStudent';
import AddTeacher from './pages/admin/AddTeacher';
import AdminViewStudent from './pages/admin/AdminViewStudent';
import AdminViewTeacher from './pages/admin/AdminViewTeacher';
import AdminViewModule from './pages/admin/AdminViewModule';
import AdminViewContent from './pages/admin/AdminViewContent';

import TeaViewStudent from './pages/teacher/TeaViewStudent';
import TeaViewModuleList from './pages/teacher/TeaViewModuleList';
import CreateContent from './pages/teacher/CreateContent';
import TeaCreateModule from './pages/teacher/TeaCreateModule';
import TeaUploadAssignment from './pages/teacher/TeaUploadAssignment';
import TeaViewAssignment from './pages/teacher/TeaViewAssignment';
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
        <Route path="/teacher/TeaViewStudent" element={<TeaViewStudent />} />
        <Route path="/teacher/CreateContent" element={<CreateContent />} />
        <Route path="/teacher/TeaCreateModule" element={<TeaCreateModule />} />
        <Route path="/teacher/TeaUploadAssignment" element={<TeaUploadAssignment />} />
        <Route path="/teacher/TeaViewAssignment" element={<TeaViewAssignment />} />
        <Route path="/teacher/AddMarks" element={<AddMarks />} />
        <Route path="/teacher/TeaViewModuleList" element={<TeaViewModuleList />} />

        {/* Student  */}
        <Route path="/student/StuViewModuleList" element={<StuViewModuleList />} />
        <Route path="/student/StuViewContent" element={<StuViewContent />} />
        <Route path="/student/StuUploadAssignment" element={<StuUploadAssignment />} />


      </Routes>

    </Router>
  )
}
