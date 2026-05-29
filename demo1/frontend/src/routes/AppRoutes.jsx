import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "../MainPage/RegisterPage";
import UserLogin from "../MainPage/LoginPage";
import Home from "../MainPage/Home";
import Layout from "../NavBar/Layout";
import ProtectedRoute from "../utils/ProtectedRoute";
import Profile from "../NavBar/Profile";
import Courses from "../MainPage/Courses";
import SelectCourse from "../MainPage/SelectCourse";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path='/' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                <Route path="home" element={<Home />}/>
                <Route path="user-profile" element={<Profile/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="courses/:id" element={<Courses/>}/>
                <Route path="selectcourse" element={<SelectCourse/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
};
