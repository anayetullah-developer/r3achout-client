import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home/HomePage";


    export const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage/>,
        },
      ]);
