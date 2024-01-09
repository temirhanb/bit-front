import React from "react";

import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableCell} from "@mui/material";
import {ITransactions} from "../types/transactions";

interface IProps {
  transaction: ITransactions[];
}

export const TokenTable: React.FC<IProps> = ({transaction}) => {

  const names: Array<string> = [
    "Тип",
    "Сумма",
    "Дата",
  ];

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {names.map((item, index) => (
              <HeaderCell align={"center"} key={item + index}>
                {item}
              </HeaderCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map(({amount, type, id, created_at}) => {

            const currentData = new Date(created_at);
            const data = currentData.toLocaleDateString();
            const time = currentData.toLocaleTimeString();
            return (
              <BodyRow key={id}>
                <BodyCell align={"center"}>
                  {type === "WRITE_OFF" ? "Списание" : "Пополнение"}
                </BodyCell>
                <BodyCell type={type} align={"center"}>
                  {type === "WRITE_OFF" ? "-" : "+"}{amount}
                </BodyCell>
                <BodyCell align={"center"}>
                  {data},<br/>
                  {time}
                </BodyCell>
              </BodyRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 24px;
  margin: 0 25px;
`;

const HeaderCell = styled(TableCell)`
  color: #9CA3AF;
  background: #0E0C15;
  height: 46px;
  padding: 0;
  border: none;

  :last-child {
    border-radius: 0 8px 0 0;
  }

  :first-child {
    border-radius: 8px 0 0 0;
  }
`;

const BodyRow = styled(TableRow)`
  border-bottom: 1px solid #222B44;
`;

interface IBodyCell {
  type?: string;
}

const BodyCell = styled(TableCell)<IBodyCell>`
  ${({type}) => (type !== undefined ? (type === "WRITE_OFF" ? "color:#FE4242" : "color:#1ABB34") : "color: #fff")};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border: none;
  padding: 0;
  height: 64px;
`;