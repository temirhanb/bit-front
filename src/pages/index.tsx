import React from "react";
import styled from "@emotion/styled";
import {Search} from "../components";
import {TableComponent} from "../components";

export const MainPage: React.FC = () => {

  return (
    <Container>
      <CompanyName>Моя организация</CompanyName>
      <TableContainer>
        <NameTable>
          Пользователи
        </NameTable>
        <Search/>
        <TableComponent/>
      </TableContainer>
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
`;

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
`;

const TableContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 34px;
  display: flex;
  flex-direction: column;
`;

const NameTable = styled.span`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
`;