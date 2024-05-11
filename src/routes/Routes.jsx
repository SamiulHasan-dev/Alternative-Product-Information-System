import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Queries from "../pages/Queries/Queries";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddQueries from "../pages/AddQueries";


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
            element: <Queries></Queries>
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
      ],
    },
  ]);

  export default router;