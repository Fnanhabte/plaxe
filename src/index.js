import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reservation from './components/Reservation';
import Rooms from './components/Rooms';
import FoodNdrink from './components/FoodNdrink';
import PagenotFound from './components/PagenotFound';
import Large from './components/Large';
import Small from './components/Small';
import Medium from './components/Medium';
import Activity from './components/Activity';
import Cameraroll from './components/Cameraroll';

const router = createBrowserRouter([
  {
    path: "/plaxe",
    element:<App />
  },
  {
    path : "/reservation",
    element: <Reservation />
  },
  {
    path : "/rooms",
    element: <Rooms />
  },
  {
    path : "/plaxe-events",
    element: <Activity />
  },
  {
    path : "/camera-roll",
    element: <Cameraroll />
  },
  {
    path : "/large",
    element: <Large />
  },
  {
    path : "/small",
    element: <Small />
  },
  {
    path : "/medium",
    element: <Medium />
  },
  {
    path : "/eat-and-drink",
    element: <FoodNdrink />
  },

  {
    path: "*",
    element: <PagenotFound />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
)


reportWebVitals();
