// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import App from "./App";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import AuthContextProvider, { useAuthContext } from "./Context/AuthContextProvider";
import SocketContextProvider from "./Context/SocketContextProvider";
import AppContextProvider from "./Context/AppContextProvider";




const MainApp = () => {
  const { authUser } = useAuthContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: (authUser ? <Home></Home> : <Navigate to={"/login"}></Navigate>)
        },
        {
          path: "/login",
          element: (authUser ? <Navigate to={"/"}></Navigate> : <Login></Login>)
        },
        {
          path: "/signup",
          element: (authUser ? <Navigate to={"/"}></Navigate> : <Signup></Signup>)
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />

}




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <AuthContextProvider>
        <SocketContextProvider>
          <MainApp></MainApp>
        </SocketContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

