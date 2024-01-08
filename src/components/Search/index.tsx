import React, {useDeferredValue, useEffect, useState} from "react";
import {InputAdornment, TextField} from "@mui/material";
import styled from "@emotion/styled";
import {getUserSearch} from "../../api/getUserSearch";

interface IProps {
  setUsers: (items: []) => void;
  setPages: (pages: number) => void;
}

export const Search: React.FC<IProps> = ({setUsers, setPages}) => {
  const [value, setValue] = useState("");

  const deferredValue = useDeferredValue(value);

  useEffect(() => {

    getUserSearch(deferredValue, 1).then((res) => {
      setUsers(res.data);
      setPages(res.pages);
    });

  }, [deferredValue]);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <InputField
        id="input-with-icon-text-field"
        placeholder="Поиск"
        onChange={handlerChange}
        value={value}
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