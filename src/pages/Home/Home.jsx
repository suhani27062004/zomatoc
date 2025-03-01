import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Zomato Clone</h1>
      <p className="text-lg mb-6">Find the best restaurants near you</p>
      <div className="flex space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
