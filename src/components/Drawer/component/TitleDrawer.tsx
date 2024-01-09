import React from "react";
import styled from "@emotion/styled/dist/emotion-styled.cjs";

interface IProps{
  title:string
}
export const TitleDrawer:React.FC<IProps> = ({title})=>{
  return(
    <Header>
      <h1>
        {title}
      </h1>
    </Header>
  )
}

const Header = styled.div`
  margin-top: 24px;
  margin-left: 24px;

  h1 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }
`;