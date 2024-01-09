import * as React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "@emotion/styled";
import {TokenTable} from "../TokenTable";
import {ITransactions} from "../types/transactions";
import {Chart} from "../Chart";
import {TitleDrawer} from "./component/TitleDrawer";

interface IProps {
  open: boolean;
  email: string;
  toggleDrawer: () => void;
  transaction: ITransactions[];
}

export const DrawerComponent: React.FC<IProps> = ({email, transaction, open, toggleDrawer}) => {

  const list = () => (
    <Container
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <TitleDrawer title={email}/>
      <TitleDrawer title={'Исользование токенов'}/>
      <Chart transaction={transaction} email={email}/>
      <TitleDrawer title={'История операций'}/>
      <div>
        <TokenTable transaction={transaction}/>
      </div>
    </Container>
  );

  return (
    <>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
};

const Container = styled.div`
  width: 470px;
  height: 100%;
  overflow-y: scroll;
  background-color: #121825;

`;
