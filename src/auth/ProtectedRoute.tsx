import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute= ()=>{
    const {isAuthenticated, isLoading}= useAuth0();

    if(!isLoading){
        return null;
    }

    if(!isAuthenticated){
        return <Outlet/>;
    }

    return <Navigate to="/" replace />;
    // outlet means render all the child component if user is authenticated
    // replace indicates that we want this to be new url
};

export default ProtectedRoute;