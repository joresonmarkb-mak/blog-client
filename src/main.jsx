import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import Counter from "./components/Counter.jsx";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx";
import { AuthProvider } from "../src/context/AuthContext.jsx";


createRoot (document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
        <App />
        {/* <Counter /> */}
        {/* <PostForm></PostForm> */}
        </AuthProvider>
        
    </StrictMode>
)