import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import {useAuth} from '../context/AuthContext'


function PostForm(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null);
    const navigate =useNavigate();
    const {token} = useAuth();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await api.post(
                '/posts/createPost',
                {title, body},
                {headers: { Authorization: `Bearer ${token}` }}
            );
          
            navigate('/')
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to create post')
            setLoading(false);
        }
        
    }
    
  

    return(
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color:'red'}}>{error}</p>}
            <div style={{ marginBottom: '12px'}}>
                <label>Title</label><br />
                <input 
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Post title"  
                    style={{width: '100%', padding: '8px',}} 
                    required             
                />
            </div>
            <br />
            <div style={{ marginBottom: '12px'}}>
                <label>Body</label> <br />
               <textarea 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    placeholder="Post content"
                    rows={4}
                    style={{ width: '100%', padding: '8px' }}
                    required
                    
                    />
            </div>
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Posting...': 'Submit Post'}</button>
        </form>
    )

}

export default PostForm