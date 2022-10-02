import { createBrowserRouter } from "react-router-dom";
import Help from "../components/Main/Help/Help";
import Home from "../components/Main/Home/Home";
import NotFound from "../components/Main/NotFound/NotFound";
import Orders from "../components/Main/Orders/Orders";
import Posts from "../components/Main/Posts/Posts";
import Shop from "../components/Main/Shop/Shop";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/orders", element: <Orders /> },
      { path: "/help", element: <Help /> },
      {
        path: "/posts",
        element: <Posts />,
        loader: async () => {
          return fetch(`https://jsonplaceholder.typicode.com/posts`);
        },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
