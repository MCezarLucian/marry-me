import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import useUserStore from "./store/useUserStore";
import useLoginStore from "./store/useLoginStore";
import Spinner from "./components/spinner/Spinner";
function App() {
  // const { users, loading, error, fetchUsers } = useUserStore((state) => ({
  //   users: state.users,
  //   loading: state.loading,
  //   error: state.error,
  //   fetchUsers: state.fetchUsers,
  // }));

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  // console.log(users);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const { user, loading, error, fetchLogin } = useLoginStore((state) => ({
    user: state.user,
    loading: state.loading,
    error: state.error,
    fetchLogin: state.fetchLogin,
  }));

  useEffect(() => {
    fetchLogin("emily.blunt@gmail.com", "Parola1234!");
  }, [fetchLogin]);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-[calc(100vh-143px)] grid grid-rows-8">
      <Home />
    </div>
  );
}

export default App;
