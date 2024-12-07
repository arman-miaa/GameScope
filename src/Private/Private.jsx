import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const { users } = useContext(AuthContext);
  

  if (users) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default Private;
