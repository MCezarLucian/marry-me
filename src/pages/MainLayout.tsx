import Cookies from "js-cookie";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom";
import { UserType } from "../lib/types";

const MainLayout = () => {
  const token = Cookies.get("sessionToken");
  const userJson = localStorage.getItem("user");
  const user: UserType = userJson ? JSON.parse(userJson) : undefined;
  if (!token) {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex min-h-screen flex-col bg-bgWhite w-full">
      <Navbar logged admin={false} user={user} />

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
