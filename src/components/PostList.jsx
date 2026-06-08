import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import api from '../api/axios'



function PostList ({search =''}) {
    const [posts, setPost] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null);

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts/getPost');
      setPost(response.data);
      setLoading(false);
    } catch (err) {
       console.log('Error:', err);
      setError('Failed to load posts');
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

    const filteredPosts = posts.filter((post)=> 
    post.title.toLowerCase().includes(search.toLowerCase()))

    if (loading) return <p>Loading post...</p>;
    if(error) return <p style={{color: 'red'}}>{error}</p>;

return (
  <div>
    {filteredPosts.length === 0 ? (
      <p>No posts found.</p>
    ) : (
      filteredPosts.map((post) => (
        <PostCard
          key={post._id}
          _id={post._id}
          title={post.title}
          body={post.body}
          author={post.author?.name}
          date={post.date}
        />
      ))
    )}
  </div>
);
}
export default PostList;