import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";

function App() {
  return (
    <div className="border border-red-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
