import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./pages/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch(`https://coffee-crud-server-alpha.vercel.app/coffee`),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(`https://coffee-crud-server-alpha.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch(`https://coffee-crud-server-alpha.vercel.app/users`),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
