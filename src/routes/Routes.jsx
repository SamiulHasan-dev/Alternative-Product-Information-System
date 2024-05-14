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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/queries',
            element: <Queries></Queries>,
            loader: ()=> fetch('http://localhost:5000/products')
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
            element: <AddQueries></AddQueries>
        },
        {
          path: '/myQueries',
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/query/${params.id}`)
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:5000/query/${params.id}`)
        },
        {
          path: '/recommendationForm/:id',
          element: <PrivateRoute><RecommendationForm></RecommendationForm></PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/query/${params.id}`)
        }
      ],
    },
  ]);

  export default router;