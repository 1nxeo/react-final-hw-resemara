import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Cookies from "universal-cookie";

function LoginForm() {
  return (
    <LoginWrapper>
      <StForm>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>아이디</label>
          <StInput type="text" required />
          <label>비밀번호</label>
          <StInput type="password" required />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Button
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "lightgray",
              fontWeight: "700",
            }}
          >
            로그인
          </Button>
        </div>
      </StForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 95%;
  height: 70vh;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid;
  margin: 10px;
`;

export default LoginForm;
