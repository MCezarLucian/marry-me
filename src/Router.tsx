import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignUpPage from "./pages/SignUpPage";
import App from "./App";
import RequestsPage from "./pages/RequestsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot_password", element: <ForgotPasswordPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/requests", element: <RequestsPage /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
