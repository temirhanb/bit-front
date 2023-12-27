import React, {useState} from "react";
import {useQuery} from "react-query";
import {getUserPage} from "../api/getUserPage";

export const MainPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, isError} = useQuery(["users", currentPage], () => getUserPage(currentPage));

  console.log(data, isLoading, isError);
  return (
    <div>main page</div>
  );
};