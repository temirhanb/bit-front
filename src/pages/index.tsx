import React, {useState} from "react";
import {useQuery} from "react-query";
import {getUserPage} from "../api/getUserPage";
import styled from "@emotion/styled";

export const MainPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, isError} = useQuery(["users", currentPage], () => getUserPage(currentPage));

  console.log(data, isLoading, isError);
  const handlerPage = (page:number)=>{
    setCurrentPage(page)
  }
  return (
    <Container>
      <CompanyName>Моя организация</CompanyName>
      <TableContainer>Пользователи</TableContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 17px;
  background: #121825;
  height: 100%;
  margin-top: 35px;
  box-sizing: border-box;
  width: 100%;
`

const CompanyName = styled.h2`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 34px;
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  border-bottom: 1px solid #222B44;
`

const TableContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 34px 0 34px 34px;
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
`