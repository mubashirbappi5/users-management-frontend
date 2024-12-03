import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Home';
import AddUsers from './Pages/AddUsers';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path:"/",
      element:<Home/>,
      loader:()=>fetch("https://users-management-backend.vercel.app/user")
    },
    {
      path:'/addusers',
      element:<AddUsers/>
  
    },
    {
      path:'/update/:id',
      element:<Update/>,
      loader:({params})=>fetch(`https://users-management-backend.vercel.app/user/${params.id}`)
    }
  ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
