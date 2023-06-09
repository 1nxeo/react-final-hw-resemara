import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  return (
    <StHeader onClick={(e) => navigate("/")}>
      <h2>@1nxeo Archive</h2>

      {/* <div></div>
      <h2>Archive</h2> */}
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 80px;
  width: 95%;
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  border: 1px solid black;
  margin: 10px;
`;

export default Header;
