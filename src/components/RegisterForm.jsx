import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getUsers, __addUsers } from "../redux/modules/users";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const dpUsers = JSON.stringify([...users]);

  useEffect(() => {
    dispatch(__getUsers());
  }, [dpUsers]);

  const [newUser, setNewUser] = useState({
    userId: "",
    password: "",
    email: "",
  });
  const [validPw, setValidPw] = useState({ body: "", isValid: false });
  const [invalidId, setInvalidId] = useState(false);

  const idCheckHandler = (id) => {
    const targetId = users.find(({ userId }) => String(userId) === String(id));
    if (targetId) {
      alert("중복된 아이디입니다!");
      setInvalidId(true);
    } else {
      alert("사용 가능한 아이디 입니다!");
      setInvalidId(false);
    }
  };

  const loginButtonHandler = (newItem) => {
    if (validPw && !invalidId) {
      dispatch(__addUsers(newItem));
      alert("가입 완료! 홈으로 돌아갑니다.");
      setNewUser({
        userId: "",
        password: "",
        email: "",
      });
      navigate("/");
    } else {
      alert("ID, PW를 확인해주세요!");
    }
  };

  return (
    <RegisterWrapper>
      <StForm>
        <label>아이디</label>
        <div>
          <StInput
            type="text"
            value={newUser.userId}
            required
            style={{ width: "210px" }}
            onChange={(e) => setNewUser({ ...newUser, userId: e.target.value })}
          />
          <Button
            style={{ width: "80px" }}
            onClick={(e) => {
              idCheckHandler(newUser.userId);
            }}
          >
            중복확인
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>비밀번호</label>
          <StInput
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            required
          />
          <label>비밀번호 확인</label>
          <StInput
            type="password"
            onChange={(e) => {
              setValidPw({ ...validPw, body: e.target.value });
            }}
            required
          />
          {validPw.body ? (
            validPw.body === newUser.password ? (
              <p>비밀번호가 일치합니다.</p>
            ) : (
              <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
            )
          ) : null}
          <label>이메일</label>
          <StInput
            type="email"
            value={newUser.email}
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
            required
          />
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
            onClick={() => {
              loginButtonHandler(newUser);
            }}
          >
            가입하기
          </Button>
        </div>
      </StForm>
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.div`
  width: 95%;
  height: 70vh;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid;
  margin: 10px;
`;
export default RegisterForm;
