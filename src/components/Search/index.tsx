import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import styled from "@emotion/styled";

export const Search: React.FC = () => {
  return (
    <Container>
      <InputField
        id="input-with-icon-textfield"
        placeholder="Поиск"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={"/public/search.svg"}/>
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 24px;
`;
const InputField = styled(TextField)`
  width: 100%;
  box-sizing: border-box;

  fieldset {
    border: 1px solid rgba(49, 62, 98, 0.57);
    border-radius: 8px;

    :hover {
      border-color: #313E6292;
    }
  }

  input {
    color: #fff;
    padding: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    ::placeholder {
      color: #616D8D;
    }
  }
`;