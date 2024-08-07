import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import App from "./App";
import RequestsPage from "./pages/RequestsPage";
import SignUpPageParticipant from "./pages/SignUpPageParticipant";
import SignUpPageRegular from "./pages/SignUpPageRegular";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot_password", element: <ForgotPasswordPage /> },
      { path: "/signup_pariticpant", element: <SignUpPageParticipant /> },
      { path: "/signup_regular", element: <SignUpPageRegular /> },
      { path: "/requests", element: <RequestsPage /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
