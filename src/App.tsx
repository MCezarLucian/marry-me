import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import useUserStore from "./store/useUserStore";
function App() {
  // const { users, fetchUsers } = useUserStore((state) => ({
  //   users: state.users,
  //   fetchUsers: state.fetchUsers,
  // }));

  // useEffect(() => {
  //   fetchUsers();
  //   console.log(users);
  // }, [fetchUsers, users]);
  return (
    <div className="w-full h-[calc(100vh-143px)] grid grid-rows-8">
      <Home />
    </div>
  );
}

export default App;
