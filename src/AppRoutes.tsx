import { Navigate, Routes, Route } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes= () =>{
    return(
        <Routes>
            <Route path="/" 
            element={
                <Layout showHero>
                    <HomePage/>
                </Layout>
            }
            />

            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>

            <Route element={<ProtectedRoute/>} >
            <Route 
            path="/user-profile" 
            element={
            <Layout>
                <UserProfilePage/>
            </Layout>} />
            </Route>
            
            {/* protected route is going to check if user is authenticated and if yes then render the outlet component of children of this route and if is not logged in  the redirect to home page*/}
            

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>


    );
};

export default AppRoutes;