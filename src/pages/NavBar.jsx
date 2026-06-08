import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthContext';


function NavBar() {
  const {user,logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () =>{
    logout();
    navigate('/login');
  }

  return (
    <nav style={{
      background: "#333",
      padding: "12px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>
        MyBlog
      </Link>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        {user ? (
           <>
           <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>New Post</Link>
           <span style={{ color:'#aaa',}}>Hi, {user.name}</span>
           <button onClick={handleLogout}
           style={{background:'transparent', color:'white', border:'1px solid white', padding:'4px 10px', cursor:'pointer', borderRadius:'4px'}}>
            Logout 
           </button>
          
          
           </>
        ):(
          <Link to="/login" style={{color:'white', textDecoration: 'none', }}>Login</Link>
        )}
        
      </div>
    </nav>
  );
}

export default NavBar;