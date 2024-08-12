import Cookies from "js-cookie";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useUserStore((state) => ({
    loggedUser: state.loggedUser,
    setLoggedUser: state.setLoggedUser,
  }));
  const token = Cookies.get("sessionToken");
  const userId = Cookies.get("id");

  useEffect(() => {
    if (!token || token === "undefined") {
      navigate("/login");
    }
    if (userId) {
      setLoggedUser(userId);
    }
  }, [navigate, setLoggedUser, token, userId]);

  if (loggedUser === null) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-bgWhite w-full">
      <Navbar logged admin={false} user={loggedUser ? loggedUser : undefined} />

      <main className="relative flex flex-1 flex-col h-full bg-slate-100">
        <div className="m-auto flex w-full flex-1 justify-center h-full">
          <Outlet />
        </div>
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
