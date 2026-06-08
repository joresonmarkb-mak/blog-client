import { useNavigate } from "react-router-dom";


function PostCard ({_id,title, body, author,date,}){
    const navigate =useNavigate();

    return (

        <div 
        onClick={()=>navigate(`/posts/${_id}`)}
        style={{ 
            border:'1px solid #ccc', 
            padding: '16px', 
            marginBottom: '12px', 
            borderRadius: '8px',
            cursor:'pointer'
            }}>
         
            <h2>{title}</h2>
            <p>{body}</p>
            <small>By: {author} · {date}</small>
        </div>
    )
}

export default PostCard;