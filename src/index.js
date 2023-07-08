import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reservation from './components/Reservation';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path : "/reservation",
    element: <Reservation />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
)


reportWebVitals();
