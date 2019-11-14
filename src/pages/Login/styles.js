import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 45px;
      border-radius: 4px;
      padding: 10px;
      border: 1px solid #1f1f1f;
      background: #fff;
    }

    button {
      margin-top: 10px;
      height: 48px;
      border-radius: 5px;
      background: #9196d8;
      border: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.08, "#9196d8")};
      }
    }
  }
`;
