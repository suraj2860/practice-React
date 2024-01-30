import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProductPage from './components/Product/ProductPage.jsx'
import './index.css'
import Layout from './Layout.jsx'
import SignIn from './components/User/SignIn.jsx'
import Register from './components/User/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<SignIn />}></Route>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<App />}></Route>
        <Route path='products/:productId' element={<ProductPage />}></Route>
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
