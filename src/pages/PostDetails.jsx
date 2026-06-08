import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";



function PostDetails() {
    const {id} = useParams();
    const navigate =useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
       const fetchPost = async ()=>{
        try {
            const response = await api.get(`/posts/getPost/${id}`);
            setPost(response.data);
            setLoading(false);
        } catch (error) {
            setError('Post not found');
            setLoading(false);
        }
       }

       fetchPost();
    },[id]);
    
    if(loading) return <p> Loading...</p>
    if(!post) return <p> Post not found</p>

    return (
        <div>
            <button onClick={()=> navigate(-1)}> ←Back</button>
            <h1>{post.title}</h1>
            <p style={{color:"#666"}}>
                By {post.author?.name} · {new Date(post.createdAt).toLocaleDateString()}
                </p>
            <hr />
            <p>{post.body}</p>
        </div>
    )
}
export default PostDetails