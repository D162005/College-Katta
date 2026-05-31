import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import StudyMaterial from './pages/StudyMaterial.jsx';
import MyUploads from './pages/MyUploads.jsx';
import Saved from './pages/Saved.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminUsers from './pages/admin/Users.jsx';
import AdminPendingFiles from './pages/admin/PendingFiles.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import Recent from './pages/Recent.jsx';
import Projects from './pages/Projects.jsx';
import PYQ from './pages/PYQ.jsx';
import Notes from './pages/Notes.jsx';
import LabManual from './pages/LabManual.jsx';
import ChatDiscussion from './pages/ChatDiscussion.jsx';
import PersonalFiles from './pages/PersonalFiles.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { FileProvider } from './context/FileContext.jsx';
import { ChatProvider } from './context/ChatContext.jsx';
import { GeneralChatProvider } from './context/GeneralChatContext.jsx';
import StudyMaterialProvider from './context/StudyMaterialContext.jsx';
import StudyMaterials from './pages/StudyMaterials.jsx';
import AdminStudyMaterials from './pages/AdminStudyMaterials.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <FileProvider>
        <ChatProvider>
          <StudyMaterialProvider>
            <GeneralChatProvider>
              <Router>
                <Layout>
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/study-material" element={<StudyMaterial />} />
                    <Route path="/study-materials" element={<StudyMaterials />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="/chat-discussion" element={<ChatDiscussion />} />
                    
                    {/* Protected Routes - User */}
                    <Route path="/recent" element={
                      <PrivateRoute>
                        <Recent />
                      </PrivateRoute>
                    } />
                    <Route path="/my-uploads" element={
                      <PrivateRoute>
                        <MyUploads />
                      </PrivateRoute>
                    } />
                    <Route path="/personal-files" element={
                      <PrivateRoute>
                        <PersonalFiles />
                      </PrivateRoute>
                    } />
                    <Route path="/projects" element={
                      <PrivateRoute>
                        <Projects />
                      </PrivateRoute>
                    } />
                    <Route path="/pyq" element={
                      <PrivateRoute>
                        <PYQ />
                      </PrivateRoute>
                    } />
                    <Route path="/notes" element={
                      <PrivateRoute>
                        <Notes />
                      </PrivateRoute>
                    } />
                    <Route path="/lab-manual" element={
                      <PrivateRoute>
                        <LabManual />
                      </PrivateRoute>
                    } />
                    <Route path="/saved" element={
                      <PrivateRoute>
                        <Saved />
                      </PrivateRoute>
                    } />
                    <Route path="/profile" element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    } />
                    <Route path="/user-dashboard" element={
                      <PrivateRoute>
                        <UserDashboard />
                      </PrivateRoute>
                    } />
                    
                    {/* Protected Routes - Admin */}
                    <Route path="/admin/dashboard" element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    } />
                    <Route path="/admin/users" element={
                      <AdminRoute>
                        <AdminUsers />
                      </AdminRoute>
                    } />
                    <Route path="/admin/pending-files" element={
                      <AdminRoute>
                        <AdminPendingFiles />
                      </AdminRoute>
                    } />
                    <Route path="/admin/study-materials" element={
                      <AdminRoute>
                        <AdminStudyMaterials />
                      </AdminRoute>
                    } />
                  </Routes>
                </Layout>
              </Router>
            </GeneralChatProvider>
          </StudyMaterialProvider>
        </ChatProvider>
      </FileProvider>
    </AuthProvider>
  );
}

export default App;
