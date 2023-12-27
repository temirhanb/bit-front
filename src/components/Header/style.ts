import styled from "@emotion/styled";
import {Button} from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 17px;
  height: 82px;
  background: #121825;
  padding: 0 24px;
`;
export const NameCompany = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  margin-right: 85px;
  user-select: none;
`;
export const ButtonAuth = styled(Button)`
  display: flex;
  border: 1px solid #222B44;
  color: white;
  text-transform: none;
`;

export const ImageBackground = styled.div`
  background: #313E62;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const ButtonAuthInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 34px;
`;

export const ButtonAuthStatus = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #616D8D;
`;

export const ButtonAuthRole = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
`;

export const MailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;

`;

export const MailContainerButton = styled(Button)`
  color: white;
  text-transform: none;

  img {
    margin-right: 10px;
  }
`;