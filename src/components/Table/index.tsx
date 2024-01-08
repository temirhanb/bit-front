import React, {useState} from "react";

import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Button, TableCell, TableSortLabel} from "@mui/material";
import {DeleteIcon, EditIcon, SortIcon} from "../../assets/icons";
import {getUserTransaction} from "../../api/getUserTransaction";
import {DrawerComponent} from "../Drawer";

interface IProps {
  users: any;
  sort: string;
  handlerSort: (item: string) => void;
}

export const TableComponent: React.FC<IProps> = ({users, sort, handlerSort}) => {

  const names: Array<string> = [
    "Email",
    "Имя",
    "Роль",
    "Подписка",
    "Токены",
    "Действия",
  ];

  const [open, setOpen] = React.useState(false);

  const [transaction,setTransaction] = useState([])
  const [email,setEmail] = useState('')

  const toggleDrawer = () => setOpen(!open);
  console.log(open);
  const handlerClick = (id,email) => {
    getUserTransaction(id).then((res) => {
      setTransaction(res)
    });
    toggleDrawer();
    setEmail(email)
  };



  return (

    <Container>
      <DrawerComponent email={email} transaction={transaction} open={open} toggleDrawer={toggleDrawer}/>
      <Table>
        <TableHead>
          <TableRow>
            {names.map((item, index) => (<HeaderCell align={"center"} key={item + index}>
              {item === "Токены" ? (
                <TableSortLabelStyle
                  active={item === "Токены"}
                  sort={sort}
                  onClick={handlerSort}
                  IconComponent={() => <SortIcon/>}
                >
                  {item}
                </TableSortLabelStyle>
              ) : item}
            </HeaderCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({id, email, name, role, subscription}) => (
            <BodyRow key={id} onClick={() => handlerClick(id,email)}>
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
                {subscription.tokens} BTKN
              </BodyCell>
              <BodyCell align={"center"}>
                <ButtonContainer>
                  <StyleButton>
                    <EditIcon/>
                  </StyleButton>
                  <StyleButton>
                    <DeleteIcon/>
                  </StyleButton>
                </ButtonContainer>
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

interface ISortLabel {
  sort: string;
}

const TableSortLabelStyle = styled(TableSortLabel)<ISortLabel>`
  color: #9CA3AF !important;

  span {
    color: #9CA3AF;

  }

  svg {
    ${({sort}) => (sort === "asc" ? "" : "transform: rotate(180deg);")}
  }
`;

const BodyRow = styled(TableRow)`
  border-bottom: 1px solid #222B44;

  :hover {
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

const ButtonContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleButton = styled(Button)`
  padding: 0;
  margin: 0 10px 0 0;
  display: flex;
  min-width: 20px;
`;