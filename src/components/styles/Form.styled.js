import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  input {
    width: 14.2rem;
    height: 3rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    border: none;
    outline: none;
    text-indent: 0.5rem;
    font-size: 12.5px;
  }

  button {
    width: 2.8rem;
    background-color: black;
    border: none;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    input {
      width: 30%;
      max-width: 450px;
    }
  }
`;

export default StyledForm;
