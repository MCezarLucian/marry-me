import { users } from "../mockdata/data";
import RequestsList from "../components/requestsList/RequestsList";
import React from "react";

const RequestsPage = () => {
  return (
    <div className="flex justify-center items-center h-full w-full py-24">
      <RequestsList users={users} />
    </div>
  );
};

export default RequestsPage;
