import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Queries from "../pages/Queries/Queries";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddQueries from "../pages/AddQueries";
import MyQueries from "../pages/MyQueries";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import RecommendationForm from "../pages/RecommendationForm";
import MyRecommendation from "../pages/MyRecommendation";
import AllRecommendation from "../pages/AllRecommendation";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/queries',
            element: <Queries></Queries>,
            loader: ()=> fetch('https://product-verse-server.vercel.app/products')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addQueries',
            element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
          path: '/myQueries',
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=> fetch(`https://product-verse-server.vercel.app/query/${params.id}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=> fetch(`https://product-verse-server.vercel.app/query/${params.id}`)
        },
        {
          path: '/recommendationForm/:id',
          element: <PrivateRoute><RecommendationForm></RecommendationForm></PrivateRoute> ,
          loader: ({params})=> fetch(`https://product-verse-server.vercel.app/query/${params.id}`)
        },
        {
          path: '/myRecommendation',
          element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>
        },
        {
          path: '/allRecommendation',
          element: <PrivateRoute><AllRecommendation></AllRecommendation></PrivateRoute>
        },
        {
          path: '/recommendationMe',
          element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
        }
      ],
    },
  ]);

  export default router;