import PostList from "../components/PostList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <h1>My Blog</h1>
                <button onClick={()=> navigate('/create')}>New Post</button>
            </div>

            <input 
            type="text"
            placeholder="search post..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            style={{width:'100', padding:'8px', marginBottom: '16px'}}
            />
            <PostList search={search}/>
        </div>

        
    )
}

export default Home