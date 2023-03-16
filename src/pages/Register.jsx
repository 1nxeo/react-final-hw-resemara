import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Nav />
        <Header onClick={(e) => navigate("/")} />
        <RegisterForm />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

export default Register;
