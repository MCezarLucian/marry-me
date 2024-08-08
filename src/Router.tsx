import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import App from "./App";
import RequestsPage from "./pages/RequestsPage";
import SignUpPageParticipant from "./pages/SignUpPageParticipant";
import SignUpPageRegular from "./pages/SignUpPageRegular";
import ContactForm from "./components/contactForm/ContactForm";
import SetPasswordPage from "./pages/SetPasswordPage";
import ParticipantList from "./pages/ParticipantList";
import IndividualPage from "./pages/IndividualPage";
import MyProfilePage from "./pages/MyProfilePage";
import Logo from "./components/ui/logo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/requests", element: <RequestsPage /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/my_profile", element: <MyProfilePage /> },
      { path: "/participant_list", element: <ParticipantList /> },
      { path: "/individual_Page", element: <IndividualPage /> },
    ],
  },
  {
    path: "/",
    element: <Logo />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot_password", element: <ForgotPasswordPage /> },
      { path: "/set_password", element: <SetPasswordPage /> },
      { path: "/signup_participant", element: <SignUpPageParticipant /> },
      { path: "/signup_regular", element: <SignUpPageRegular /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
