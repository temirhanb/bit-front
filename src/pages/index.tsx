import React, {useEffect, useMemo, useState} from "react";
import styled from "@emotion/styled";
import {PaginationPage, Search, TableComponent} from "../components";
import {getUserPage} from "../api/getUserPage";

export const MainPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<string>("asc");

  const handlerSort = () => {
    if (sort === "asc") return setSort("desc");
    return setSort("asc");
  };

  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);

  const handlerCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPage(currentPage, sort).then((res) => {
      setUsers(res.data);
      setPages(res.pages);
    }).finally(() => setIsLoading(false));
    return (() => {
      setIsLoading(true);
    });
  }, []);

  useMemo(() => {
    setIsLoading(true);
    getUserPage(currentPage, sort).then((res) => {
      setUsers(res.data);
      setPages(res.pages);
    }).finally(() => setIsLoading(false));
    return (() => {
      setIsLoading(true);
    });
  }, [currentPage, sort]);

  return (
    <Container>
      <CompanyName>Моя организация</CompanyName>
      <TableContainer>
        <NameTable>
          Пользователи
        </NameTable>
        <Search
          setUsers={setUsers}
          setPages={setPages}
        />
        {
          isLoading ? <div>loading...</div> :
            <TableComponent
              users={users}
              sort={sort}
              handlerSort={handlerSort}
            />
        }
      </TableContainer>
      {!isLoading && (
        <PaginationPage currentPage={currentPage} handlerCurrentPage={handlerCurrentPage} pages={pages}/>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 17px;
  background: #121825;
  margin-top: 35px;
  padding-bottom: 35px;
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