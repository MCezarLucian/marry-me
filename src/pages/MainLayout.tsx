import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-bgWhite w-full">
      <Navbar />

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
