import Cookies from "js-cookie";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import Spinner from "../components/spinner/Spinner";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const { user, fetchUserById } = useUserStore((state) => ({
    user: state.user,
    loading: state.loading,
    fetchUserById: state.fetchUserById,
  }));
  const token = Cookies.get("sessionToken");
  const userId = Cookies.get("id");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchUserById(userId ? userId : "");
    }
  }, [fetchUserById, navigate, token, userId]);

  if (user === null) {
    return <Spinner />;
  }

  return (
    <div className="flex h-auto flex-col bg-bgWhite w-full">
      <Navbar logged admin={false} user={user ? user : undefined} />

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
