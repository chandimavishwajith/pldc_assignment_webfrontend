import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/routes';

import './App.css';
import Login from './pages/login';
import AddStudent from './pages/admin/add-student';
import AddLecturer from './pages/admin/add-lecturer';
import ViewStudent from './pages/lecturer/view-student';
import ViewModuleList from './pages/student/view-modulelist';
import ViewModuleListLec from './pages/lecturer/view-modulelist';
import CreateContent from './pages/lecturer/create-content';
import UploadAssignment from './pages/lecturer/upload-assignment';
import ViewAssignment from './pages/lecturer/view-assignment';
import AddMarks from './pages/lecturer/add-marks';



function App() {
  const [showSidebar, setShowSidebar] = React.useState();
  const handleToggleSideBar = () => {
    //togglesidebar with useState
    setShowSidebar(!showSidebar);
  }
  return (
    <Router>
      <div className='dashboard-container'>
        {showSidebar && <SideBar menu={sidebar_menu} />}
        <div className='dashboard-body'>
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/login" element={< Login />} />
            <Route exact path="/admin/add-student" element={<AddStudent toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/admin/add-lecturer" element={<AddLecturer toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/view-student" element={<ViewStudent toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/create-content" element={<CreateContent toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/upload-assignment" element={<UploadAssignment toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/view-assignment" element={<ViewAssignment toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/add-marks" element={<AddMarks toggleSideBar={handleToggleSideBar} />} />

            <Route exact path="/student/view-modulelist" element={<ViewModuleList toggleSideBar={handleToggleSideBar} />} />
            <Route exact path="/lecturer/view-modulelist" element={<ViewModuleListLec toggleSideBar={handleToggleSideBar} />} />
            



          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;