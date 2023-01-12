import { ReactElement } from "react";
import styled from "styled-components";

const Spinner = () => {
  return <Circle />;
};

export default Spinner;

const Circle = styled.div<{}>`
  border-radius: 50%;
  border: 4px solid #535bf2;
  width: 30px;
  height: 30px;
  border-top: #213547;

  animation: 3s infinite linear rotate;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
