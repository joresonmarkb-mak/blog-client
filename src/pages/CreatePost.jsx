import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function CreatePost() {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={()=> navigate(-1)}>Back</button>
            <h1>Create New Post</h1>
            <PostForm />
        </div>
    )
}

export default CreatePost