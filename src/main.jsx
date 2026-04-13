import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';
import BookContext from './context/BookContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <BookContext>
      <RouterProvider router={router} />,
      <ToastContainer />
    </BookContext>




  </StrictMode>,
)
