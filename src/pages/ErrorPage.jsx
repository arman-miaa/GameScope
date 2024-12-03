import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Sorry! Page Not Found</h1>
            <p>Go bace to <Link to='/' className="text-red-700 underline">Home</Link></p>
        </div>
    );
};

export default ErrorPage;