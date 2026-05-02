import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login">login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
