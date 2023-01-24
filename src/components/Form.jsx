import React from "react";
import StyledForm from "./styles/Form.styled";
import arrow from "../assets/icon-arrow.svg";

const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={(e) => handleChange(e)}
        value={input}
      />
      <button type="submit">
        <img src={arrow} alt="" />
      </button>
    </StyledForm>
  );
};

export default Form;
