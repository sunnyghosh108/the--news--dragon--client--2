import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home/Home';
import Category from './pages/Home/Category/Category';
import NewsLayout from './layouts/NewsLayout';
import News from './pages/News/News/News';
import AuthProvider from './providers/AuthProvider';
import LoginLayOut from './layouts/LoginLayOut';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Terms from './pages/Shared/Terms/Terms';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayOut></LoginLayOut>,
    children:[
      {
           path:'/',
           element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }
    ]

  },
  {
    path: "category",
    element: <Main></Main>,
    children:[
      
      {
        path:':id',
        element:<Category></Category>,
        loader:({params})=>fetch( `https://the-news-dragon-server-sunnyghosh108.vercel.app/categories/${params.id}`)
      }
      
    ]
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<PrivateRoute><News></News></PrivateRoute>,
        loader:({params})=>fetch(`https://the-news-dragon-server-sunnyghosh108.vercel.app/news/${params.id}`)

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
