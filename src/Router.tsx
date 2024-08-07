import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import App from "./App";
import RequestsPage from "./pages/RequestsPage";
import SignUpPageParticipant from "./pages/SignUpPageParticipant";
import SignUpPageRegular from "./pages/SignUpPageRegular";
import ParticipantList from "./components/pages/ParticipantList";
import { users } from "./mockdata/data";
import IndividualPage from "./components/pages/IndividualPage";
import ContactForm from "./components/contactForm/ContactForm";
import MyProfilePage from "./components/pages/MyProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot_password", element: <ForgotPasswordPage /> },
      { path: "/signup_participan", element: <SignUpPageParticipant /> },
      { path: "/signup_regular", element: <SignUpPageRegular /> },
      { path: "/requests", element: <RequestsPage /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/my_profile", element: <MyProfilePage user={users} /> },
      {
        path: "/participant_list",
        element: (
          <ParticipantList
            users={users}
            sender={users[0]}
            receiver={users[0]}
          />
        ),
      },
      {
        path: "/individual_Page",
        element: (
          <IndividualPage users={users} sender={users[0]} receiver={users[0]} />
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
