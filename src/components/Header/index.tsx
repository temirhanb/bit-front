import React from "react";
import PersonIcon from "@mui/icons-material/Person";

import {
  ButtonAuth, ButtonAuthInfo,
  ButtonAuthRole,
  ButtonAuthStatus,
  Container,
  ImageBackground, MailContainer,
  MailContainerButton,
  NameCompany
} from "./style";

export const Header: React.FC = () => {
  return (
    <Container>
      <NameCompany>BitTest</NameCompany>
      <MailContainer>
        <MailContainerButton>
          <img src="/public/case.svg" alt=""/>
          <span>Моя организация</span>
        </MailContainerButton>
      </MailContainer>
      <ButtonAuth>
        <ImageBackground>
          <PersonIcon/>
        </ImageBackground>
        <ButtonAuthInfo>
          <ButtonAuthStatus>Вы авторизованны</ButtonAuthStatus>
          <ButtonAuthRole>Администратор</ButtonAuthRole>
        </ButtonAuthInfo>
      </ButtonAuth>
    </Container>
  );
};