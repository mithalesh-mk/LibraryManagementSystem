import App from './App.jsx'
import * as React from "react";
import './index.css'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from  "react-router-dom";
import Layout from './Layout.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Books from './Pages/Books.jsx';
import IssuedBooks from './Pages/IssuedBooks.jsx';
import Dues from './Pages/Dues.jsx';
import ErrorPage from './ErrorPage.jsx'
import Profile from './Pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Dashboard />
      },
      {
        path:"books",
        element:<Books />
      },
      {
        path:"issuedbooks",
        element:<IssuedBooks/>
      },
      {
        path:"dues",
        element:<Dues/>
      },
      {
        path:"profile",
        element:<Profile />
      }
      
    ]

  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);