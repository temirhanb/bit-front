import React from "react";
import styled from "@emotion/styled";
import {Pagination, PaginationItem, Stack} from "@mui/material";
import {NextIcon, PrevIcon} from "../../assets/icons";

interface IProps {
  pages: number;
  currentPage: number;
  handlerCurrentPage: (event: React.ChangeEvent<unknown>, item: number) => void;
}

export const PaginationPage: React.FC<IProps> = ({pages, handlerCurrentPage, currentPage}) => {

  return (
    <ContainerStack spacing={2}>
      <PaginationStyle
        onChange={handlerCurrentPage}
        page={currentPage}
        renderItem={(item) => (
          <PaginationItem
            slots={{previous: PrevIcon, next: NextIcon}}
            {...item}
          />
        )}
        count={pages}
        shape="rounded"
      />
    </ContainerStack>
  );
};

const ContainerStack = styled(Stack)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PaginationStyle = styled(Pagination)`
  color: #fff;

  .MuiPaginationItem-root {
    color: #fff;
  }

  .MuiPaginationItem-root.Mui-selected {
    background-color: #1C64F2;
  }
`;