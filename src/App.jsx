import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import Root from './Layouts/Root/Root'
import ProductList from './Components/ProductList'
import ShopList from './Components/ShopList'
import Shopdetail from './Components/Shopdetail'
import Contact from './Components/Contact'
import ShoppingCart from './Components/ShoppingCart'
import Checkout from './Components/Checkout'
import { Toaster } from 'sonner'
import Login from './Auth/Login'
import PrivateRouter from './Utils/PrivateRouter'
import Register from './Auth/Register'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>,
        },
        {
          element: <PrivateRouter/>,
          children:[
            {
              path:"/",
              element:<ProductList/>
            },
            {
              path:"/shop",
              element:<ShopList/>
            },
            {
              path:"/detail/:id",
              element:<Shopdetail/>
            },
            {
              path:"/contact",
              element:<Contact/>
            },
            {
              path:"/cart",
              element:<ShoppingCart/>
            },
            {
              path:"/checkout",
              element:<Checkout/>
            },
            
          ]
          
        }
       
      ]
    }
  ])

  return (
    <>
    <Toaster position='top-center' richColors/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
