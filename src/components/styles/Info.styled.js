import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  text-align: center;
  width: 17rem;
  background-color: white;
  position: relative;
  border-radius: 0.8rem;
  z-index: 3;
  margin: 1.5rem auto;
  section {
    padding-bottom: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    /* justify-content: center; */
    padding-top: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.veryDarkGrey};
    opacity: 0.5;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.veryDarkGrey};
    font-weight: 500;
  }

  @media (min-width: 568px) {
    width: 80%;
    max-width: 1000px;
    height: 5.5rem;
    div {
      margin: 0 0.5rem;
      /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
    }
    section {
      display: flex;
      justify-content: space-evenly;
    }

    @media (min-width: 825px) {
    }
  }
`;
