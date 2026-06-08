import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home'
import {useState} from 'react'
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails'
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

    return(
        <BrowserRouter>
            <NavBar />
            <div style={{ maxWidth: '600px', margin: '0 auto', padding:'20px'}}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/posts/:id" element={<PostDetails/>} />
                    <Route path="/create" element={<CreatePost/>} />
                    <Route path="/login" element={<Login />} />
                    <Route 
                    path="/create" 
                    element={<ProtectedRoute>
                        <CreatePost/>
                    </ProtectedRoute>} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;