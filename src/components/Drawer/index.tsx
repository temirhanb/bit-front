import * as React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "@emotion/styled";

interface IProps {
  open: boolean;
  email: string;
  toggleDrawer: () => void;
  transaction: any;
}

export const DrawerComponent: React.FC<IProps> = ({email, transaction, open, toggleDrawer}) => {

  const list = () => (
    <Container
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Header>
        <h1>
          {email}
        </h1>
      </Header>
      <Header>
        <h1>
          Исользование токенов
        </h1>
      </Header>
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>

      </div>
      <Header>
        <h1>
          История операций
        </h1>
      </Header>
      <div>
        {transaction.map(({amount, type, id, created_at}) => {

          return (
            <div key={id}>
              <span>{type === "WRITE_OFF" ? "Списание" : "Пополнение"}</span>
              <span>{amount} BTKN</span>
              <span>{created_at}</span>
            </div>);
        })}

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
const Header = styled.div`
  margin-top: 24px;
  margin-left: 24px;

  h1 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #fff;
  }
`;

const UseTokens = styled.div`

`;