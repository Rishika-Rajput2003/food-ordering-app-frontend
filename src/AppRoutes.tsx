import { Navigate, Routes, Route } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";

const AppRoutes= () =>{
    return(
        <Routes>
            {/* homepage */}
            <Route path="/" 
            element={
                <Layout showHero>
                    <HomePage/>
                </Layout>
            }
            />

            {/* auth-callback */}
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>

            <Route
             path="/search/:city"
             element={
                <Layout showHero={false}>
                    <SearchPage/>
                </Layout>
             }
            />

            <Route 
            path="/detail/:restaurantId"
            element={
                <Layout showHero={false}>
                    <DetailPage/>
                </Layout>
            }
            />
            
            <Route element={<ProtectedRoute/>} >
                {/* user profile */}
                <Route 
                path="/user-profile" 
                element={
                <Layout>
                    <UserProfilePage/>
                </Layout>} />

                {/* manage restaurant */}
                <Route 
                path="/manage-restaurant" 
                element={
                <Layout>
                    <ManageRestaurantPage/>
                </Layout>} 
                />

                <Route 
                path="/order-status" 
                element={
                <Layout>
                    <OrderStatusPage/>
                </Layout>} />

            </Route>
            
            {/* protected route is going to check if user is authenticated and if yes then render the outlet component of children of this route and if is not logged in  the redirect to home page*/}

            

            {/* homepage */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>


    );
};

export default AppRoutes;