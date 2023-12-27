import React, {useState} from "react";

import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useQuery} from "react-query";
import {getUserPage} from "../../api/getUserPage";
import {TableCell} from "@mui/material";

export const TableComponent: React.FC = () => {

  const [currentPage] = useState(1);
  const {data, isLoading, isError} = useQuery(["users", currentPage], () => getUserPage(currentPage));

  console.log(data, isLoading, isError);

  const names: Array<string> = [
    "Email",
    "Имя",
    "Роль",
    "Подписка",
    "Токены",
    "Действия",
  ];
  if (isLoading) return <div>loading...</div>;
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {names.map((item, index) => (<HeaderCell align={"center"} key={item + index}>{item}</HeaderCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map(({id, email, name, role, subscription}) => (
            <BodyRow key={id}>
              <BodyCell align={"center"}>
                {email}
              </BodyCell>
              <BodyCell align={"center"}>
                {name}
              </BodyCell>
              <BodyCell align={"center"}>
                {role}
              </BodyCell>
              <BodyCell align={"center"}>
                {subscription.plan.type}
              </BodyCell>
              <BodyCell align={"center"}>
                {subscription.tokens}
              </BodyCell>
              <BodyCell align={"center"}>
                <button>E</button>
                \
                <button>D</button>
              </BodyCell>
            </BodyRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 24px;
`;

const HeaderCell = styled(TableCell)`
  color: #9CA3AF;
  background: #0E0C15;
  height: 46px;
  padding: 0;
  border: none;

  :last-child {
    border-radius: 0 8px 8px 0;
  }

  :first-child {
    border-radius: 8px 0 0 8px;
  }
`;

const BodyRow = styled(TableRow)`
  border-bottom: 1px solid #222B44;
  :hover{
    opacity: .1;
    cursor: pointer;
  }
`;

const BodyCell = styled(TableCell)`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border: none;
  padding: 0;
  height: 64px;

`;