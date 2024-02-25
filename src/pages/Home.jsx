import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate(); // Corrected: Added parentheses to useNavigate

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      {access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
      <h1>Ini halaman utama</h1>
    </div>
  );
};

export default Home;
