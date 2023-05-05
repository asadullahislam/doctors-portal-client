
import Appointment from "../../Appointment/Appointment/Appointment";
import Home from "../../Home/Home"
import Main from "../../Layout/Main"
import Login from "../../Login/Login"

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

